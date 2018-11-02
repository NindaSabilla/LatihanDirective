import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string='transparent';
  @Input('appBetterHighlight') highLightColor:string='blue';
  //@HostBinding('style.backgroundColor')backgroundColor:string='transparent';
  @HostBinding('style.backgroundColor')backgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
   // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseover')MockNgModuleResolver(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    //this.backgroundColor='blue';
    this.backgroundColor = this.highLightColor;
  }
  @HostListener('mouseleave')mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    //this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;
  }
}
