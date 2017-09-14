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
  private ERROR_CLASS: string = "has-error";

  private view: ViewContainerRef;
  private factoryResolver: ComponentFactoryResolver;


  /** A list of all active validation components. */
  private validationComponents = {};

  constructor(el: ElementRef, private renderer: Renderer2,
    @Inject(ViewContainerRef) viewContainerRef,
    @Inject(ComponentFactoryResolver) factoryResolver,
    private ref: ChangeDetectorRef) {
    // console.log('prime required', el);
    this.el = el;
    this.view = viewContainerRef;
    this.factoryResolver = factoryResolver;
  }

  ngOnInit(){
    if (!this.check(this.el)) {
      throw new Error("Unable to initialize PrimeRequiredDirective. Directive is on an element without required child elements.");
    }

    // let comp = this.addComponent(RequiredValidationErrorsComponent);
    // (comp.instance as RequiredValidationErrorsComponent).visible = true;
    // this.ref.detectChanges();
    // console.log('added component', comp);
  }

  @HostListener('keyup', ['$event']) onKey($event) {
    // console.log('onKey', $event.type, this.inputVal);

    //TODO - get option-based loading in of component working,
    //ie. don't hardcode RequiredValidationErrorsComponent

    if(RequiredValidationErrorsComponent.validate(this.input)){
      this.setInvalid();
    }
  }


  setInvalid(){
    console.log('SET INVALID CALLED!');
    this.renderer.addClass(this.el.nativeElement, this.ERROR_CLASS);
    // let comp = this.prepareComponent(RequiredValidationErrorsComponent);
    let comp = this.addComponent(RequiredValidationErrorsComponent);

    //TODO - Get fieldName programmatically from label!
    //TODO - Don't require hardcoding of component instance casting
      // Backup plan: Have an interface with fieldName?

    // if (comp){
    //   (comp.instance as ValidationComponent).fieldName = this.labelText;
    // }
  }

  setValid(){
    this.renderer.removeClass(this.el.nativeElement, this.ERROR_CLASS);
  }

  /**
   * TODO - Move this function to RequiredValidationErrors
   * Maybe rename RequiredValidationErrors to IsNotEmptyValidationErrors?
   */
  // private validateInputIsNotEmpty(): boolean{
  //   return this.inputVal.length > 0;
  // }

  private get inputVal(){
    return this.input.nativeElement.value;
  }

  private get labelText(){
    return this.label.nativeElement.textContent;
  }

  /** Creates a component and adds it to the view. */
  private addComponent<T>(componentClass): ComponentRef<T>{
    //Max 1 instance of each component type, to stop duplicate messages.
    if (this.validationComponents[componentClass.name]){
      return;
    }
    const component = this.prepareComponent(componentClass);
    this.insertComponent(component);
    this.validationComponents[componentClass.name] = component;
    return component as ComponentRef<T>;
  }

  /** Creates a component but does not add it to the view */
  private prepareComponent<T>(componentClass): ComponentRef<T>{
    const factory = this.factoryResolver.resolveComponentFactory(componentClass)
    const component = factory.create(this.view.parentInjector) as ComponentRef<T>
    (component.instance as ValidationComponent).fieldName = this.labelText;
    return component;
  }

  /** Inserts an already created component into the view (c.f. prepareComponent()) */
  private insertComponent(component: ComponentRef<{}>){
    this.view.insert(component.hostView)
  }


  /** Checks that primeRequired is attached to the right element. It must have exactly one child label and one input label. */
  private check(el: ElementRef) : boolean{
    // this.input = el;
    this.input = new ElementRef(el.nativeElement.querySelector('input'));
    // this.label = document.querySelector(`[for="${this.input.nativeElement.name}"]`);
    this.label = new ElementRef(document.querySelector(`[for="${this.input.nativeElement.name}"]`));

    if (this.input === null || this.label === null){
      console.error("PrimeRequiredDirective is on an element without required child elements.", {element: el})
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
