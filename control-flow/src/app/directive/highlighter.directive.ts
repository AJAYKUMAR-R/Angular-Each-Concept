import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: false,
  exportAs:'hlight' //This help us to export the directive by providing the alias
})

export class HighlighterDirective {

  //getting the data for the directive
  @Input() isHighlighter : boolean = false;

  //getting the data for the directive
  @Input() isCreator : boolean = false;

  @Output() data = new EventEmitter();


  constructor() { 
    console.log("Instance Created")
  }

  @HostBinding('class.highlighted')
  get GetHiglighted(){
    return this.isCreator;
  }

  @HostListener('mouseover')
   MouseOver(){
    this.isCreator = true;
    this.data.emit(this.isCreator);
  }

  @HostListener('mouseleave',['$event'])
   MouseLeaver(){
    this.isCreator = false;
    //This is the event from the element : e for dom manupulation
    console.log(event);
    this.data.emit(this.isCreator);

    
  }
}
