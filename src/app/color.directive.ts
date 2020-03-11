import { Directive, ElementRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() color;
  @HostBinding('style.color') myColor;

  // @HostListener('click') onClick() {
  //   alert('click');
  // }

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    if (this.color) {
      this.myColor = this.color;
      // this.el.nativeElement.style.color = this.color;
    } else {
      this.myColor = 'red';
      // this.el.nativeElement.style.color = 'red';
    }
  }

}
