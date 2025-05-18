import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxFor]',
  standalone: false
})
export class NgxForDirective {

  public isVisible = false;


  constructor(private tempRef:TemplateRef<any>,private conRef:ViewContainerRef ) { 

  }

  @Input('appNgxForOf')
  set appNgxFor(array:any){
    if(!this.isVisible){     
      array.forEach((item:any,index:number) =>{
        this.conRef.createEmbeddedView(this.tempRef,{
        $implicit:item,
        index:index
        });
      })
    }
  }



}
