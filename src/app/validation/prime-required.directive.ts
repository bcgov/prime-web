import { Directive, ElementRef, Input, HostListener, HostBinding, Renderer2, Inject, ViewContainerRef, ChangeDetectorRef, ComponentRef } from '@angular/core';

import { RequiredValidationErrorsComponent } from './required-validation-errors/required-validation-errors.component';

//TODO - Tidy up imports here.
import {
  ComponentFactoryResolver,
  Injectable,
  ReflectiveInjector
} from '@angular/core'

/**
 * NOTES / Proposed Architecture
 *
 * Idea: Depending on options, different/multiple injected class is used (e.g.
 * RequiredValidationErrorsComponent). That component should contain both
 * the validation logic, and the text to display.
 *
 * Example input:
 *  <div class="form-group" primeRequired="notEmpty, phoneNumber">
 *
 * Would load 2 different classes, for notEmpty + phoneNumber.
 * Including validation logic.
 *
 *
 * Use STATIC fn for validation.
 */
@Directive({
  selector: '[primeRequired]'
})
export class PrimeRequiredDirective {
  private el: ElementRef;
  private input: ElementRef;
  private label: ElementRef;
  private view: ViewContainerRef;
  private factoryResolver: ComponentFactoryResolver;
  /** The CSS class to add to the element with the directive, i.e. form-group */
  private ERROR_CLASS: string = "has-error";
  /** A list of all active validation components. Components are created/destroyed when validation fails/passes. */
  private activeComponents = {}; //todo - typing!

  /** A comma separated list of validation choices. Default: "required" */
  @Input('primeRequired') validationOptions: string;


  private validationComponents = []; //todo - typing!


  constructor(input: ElementRef, private renderer: Renderer2,
    @Inject(ViewContainerRef) viewContainerRef,
    @Inject(ComponentFactoryResolver) factoryResolver,
    private ref: ChangeDetectorRef) {
    this.input = input;
    this.view = viewContainerRef;
    this.factoryResolver = factoryResolver;
  }

  ngOnInit() {
    if (!this.check(this.input)) {
      throw new Error("Unable to initialize PrimeRequiredDirective. Directive is on an element without required child elements.");
    }
    this.validationOptions = this.validationOptions || "required";
    this.loadValidationComponents();
  }

  /** Loads the validation components based off of directive input. Add future validation options here. */
  private loadValidationComponents() {
    this.validationOptions.replace(' ', '').split(',').forEach(opt => {
      //TODO - Refactor to a simple switch statement.
      if (opt.toLowerCase() === "required") {
        this.validationComponents.push(RequiredValidationErrorsComponent);
      }
      //Future validation options should be added here.
    });
  }

  @HostListener('keyup')
  onKey() {
    //Run validation of EACH of the validation components.
    this.validationComponents.forEach(this.runValidationComponent.bind(this));
  }

  /** Runs the logic of a given validation component */
  private runValidationComponent(validationComponent: ValidationComponent): void {
    if (!validationComponent.validate(this.input)) {
      this.setInvalid(validationComponent);
    }
    else {
      this.setValid(validationComponent);
    }
  }

  setInvalid(validationComponent) {
    this.renderer.addClass(this.formGroupElement, this.ERROR_CLASS);
    let comp = this.addComponent(validationComponent);
  }

  setValid(validationComponent) {
    if (this.activeComponents[validationComponent.name] == null) {
      return;
    }

    this.activeComponents[validationComponent.name].destroy();
    this.activeComponents[validationComponent.name] = null;

    //Only remove class if there are no other active components.
    const componentsActive = Object.keys(this.activeComponents)
      .map(key => this.activeComponents[key])
      .filter(x => x !== null).length >= 1;

    if (!componentsActive) {
      this.renderer.removeClass(this.formGroupElement, this.ERROR_CLASS);
    }
  }

  private get inputVal() {
    return this.input.nativeElement.value;
  }

  private get labelText() {
    return this.label.nativeElement.textContent;
  }

  /** Returns the div.form-group parent, which _should_ be the direct parent. */
  private get formGroupElement(): ElementRef {
    let parent = this.input.nativeElement.parentElement;
    if (parent.classList.contains('form-group')) {
      return parent
    }
    //Extend this function as required to find .form-group, but keep DOM operations at a minimum.
    throw new Error("PrimeRequiredDirective unable to find the parent .form-group element");
  }

  /** Creates a component and adds it to the view. */
  private addComponent<T>(componentClass): ComponentRef<T> {
    //Max 1 instance of each component type, to stop duplicate messages.
    if (this.activeComponents[componentClass.name]) {
      return;
    }
    const component = this.prepareComponent(componentClass);
    this.insertComponent(component);
    this.activeComponents[componentClass.name] = component;
    return component as ComponentRef<T>;
  }

  /** Creates a component but does not add it to the view */
  private prepareComponent<T>(componentClass): ComponentRef<T> {
    const factory = this.factoryResolver.resolveComponentFactory(componentClass)
    const component = factory.create(this.view.parentInjector) as ComponentRef<T>
    (component.instance as ValidationComponent).fieldName = this.labelText;
    return component;
  }

  /** Inserts an already created component into the view (c.f. prepareComponent()) */
  private insertComponent(component: ComponentRef<{}>) {
    this.view.insert(component.hostView)
  }


  /** Checks that primeRequired is attached to the right element and can identify the label. */
  private check(el: ElementRef): boolean {
    this.input = el;
    // this.input = new ElementRef(el.nativeElement.querySelector('input'));
    // this.label = document.querySelector(`[for="${this.input.nativeElement.name}"]`);
    this.label = new ElementRef(document.querySelector(`[for="${this.input.nativeElement.name}"]`));

    if (this.input === null || this.label === null) {
      console.error("PrimeRequiredDirective is on an element without required child elements.", { element: el })
      return false;
    }
    return true;
  }

}

// TODO TODO - Move to separate file
interface ValidationComponent {
  fieldName?: string;
  validate?: (input: any) => boolean;
}
