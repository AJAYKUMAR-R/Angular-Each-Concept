  import { Directive, ElementRef, Host, HostListener } from '@angular/core';
  import { ConfigService } from '../../services/Config/config.service';

  @Directive({
    selector: '[appTableHighlighter]',
    standalone: false
  })
  export class TableHighlighterDirective {

    constructor(private ElementRef:ElementRef,@Host() private config:ConfigService) {
      
    }

    @HostListener('mouseover')
    setColor(){
      debugger
      this.ElementRef.nativeElement.style.color = 'red';
    }

  }
