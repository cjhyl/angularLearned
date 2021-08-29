import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

interface Options {
  bgColor?: string
}
@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements AfterViewInit {
  @Input("appHover") appHover: Options = {}
  ele:HTMLElement
  constructor(private elementRef: ElementRef) {
    this.ele = this.elementRef.nativeElement
  }

  ngAfterViewInit(){
    this.ele.style.background = this.appHover.bgColor || 'skyblue'
  }

  @HostListener("mouseenter") enter() {
    this.ele.style.backgroundColor = "pink"
  }

  @HostListener("mouseleave") leave() {
    this.ele.style.backgroundColor = this.appHover.bgColor || "skyblue"
  }

}
