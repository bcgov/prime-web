import { PrimeRequiredDirective } from './prime-required.directive';
import { Directive, ElementRef, Input, HostListener, HostBinding, Renderer2 } from '@angular/core';


describe('PrimeRequiredDirective', () => {
  it('should create an instance', () => {
    const directive = new PrimeRequiredDirective();
    expect(directive).toBeTruthy();
  });
});
