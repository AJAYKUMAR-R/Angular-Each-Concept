import { Component, DestroyRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BootstrapService } from '../services/bootstrap.service';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit,OnChanges,OnDestroy{
   @Input() data:any;

  constructor(private service:BootstrapService){
    console.log("The constructor will run it for only once for intitializing dependency",this.data)
  }

  //Note: LifeCycle hooks are never meant to invoked programtically it should run
  //by the framework not by the programmer

  ngOnInit(): void {
    console.log("NgOninit one time run if the component got intialized mostly used for intialization",this.data);
  }

  ngOnDestroy(): void {
    console.log("NgOnDestory run only if the component is being destroyed ",this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Run only if there is change in the input property done by the parent componnet which is passing the data",changes)
  }


}
