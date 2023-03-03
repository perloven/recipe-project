import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private readonly showDropdownClass: string = 'open';
  private isClicked: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  click() {
    if (this.isClicked) {
      this.renderer.removeClass(this.elementRef.nativeElement, this.showDropdownClass)
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, this.showDropdownClass)
    }

    this.isClicked = !this.isClicked;
  }
}
