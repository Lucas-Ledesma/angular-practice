import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirec]',
  standalone: true,
})
export class DirecDirective {
  constructor(private element: ElementRef) {
    console.log('aaa');

    this.element.nativeElement.style.backgroundColor = 'green';
  }
}
