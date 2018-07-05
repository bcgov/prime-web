import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[primeLoadingSpinner]'
})
export class LoadingSpinnerDirective {
  private SPINNER_TEMPLATE: string = `<i class="fa fa-spinner fa-pulse fa-fw"></i>`;

  /** A copy of the elements original content (e.g. "Save"), that we can restore when removing the spinner. */
  private originalContent: string;
  private firstRun: boolean = true;

  /** Width of the element before we make any changes to it. */
  private originalWidth: string;
  /** Hardcoded width of the element when the content is replaced with the spinner. */
  private SPINNER_WIDTH: string = "40px";

  @Input('primeLoadingSpinner') showSpinner: boolean;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes) {
    this.main();
  }

  ngOnDestroy() {
    this.disableSpinner();
  }

  ngOnInit(){
    this.originalWidth = this.el.nativeElement.offsetWidth + "px";
    this.el.nativeElement.style.transition = "width 0.3s";
    // Change the width from auto to the fixed value so we can animate the width change after.
    this.el.nativeElement.style.width = this.originalWidth;
  }

  main() {
    if (this.showSpinner) {
      this.originalContent = this.el.nativeElement.innerHTML;
      this.firstRun = false;
      this.enableSpinner();
    }
    else if (!this.firstRun) {
      this.disableSpinner();
    }
  }

  private enableSpinner() {
    this.el.nativeElement.innerHTML = this.SPINNER_TEMPLATE;
    this.el.nativeElement.style.width = this.SPINNER_WIDTH;
  }

  private disableSpinner() {
    this.el.nativeElement.innerHTML = this.originalContent;
    this.el.nativeElement.style.width = this.originalWidth;
  }

}
