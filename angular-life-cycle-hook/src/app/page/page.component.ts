import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DestroyRef, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BootstrapService } from '../services/bootstrap.service';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit,OnChanges,OnDestroy,DoCheck,
AfterViewInit,AfterContentInit,AfterViewChecked,AfterContentChecked
{
   @Input() data:any;

   private inital:any;

  constructor(private service:BootstrapService){
    console.log("The constructor will run it for only once for intitializing dependency",this.data)
  }
  //Timing : Run for ever change detection 
  ngAfterContentChecked(): void {
    console.log("After content Checked has been implemented here");
  }

  //Timing : Run for every change detection
  ngAfterViewChecked(): void {
    console.log("After view checked has been implemented");
  }

  //Timing : Run once the projected content is being intialized
  ngAfterContentInit(): void {
    console.log("After content Init has been implemented over here");
  }

  //Timinig : Run once the Child Component is being intialized
  ngAfterViewInit(): void {
    console.log("After ViewInit should be implemented");
  }

  //Timing :Run for every change detection
  //NgDocheck will be used where we want implement some custom change detection
  //what do you mean intead of updating the reference if we mutated like push or nested property
  //change we can do logical comparision that is what custom change detection mean
  //we can set the previous value even an minor mutation can be caught
  ngDoCheck(): void {
    debugger;
    if(this.data[0] !== this.inital[0]){
      console.log("Do check has been implemented over here",this.data);
    }
    
  }

  //Note: LifeCycle hooks are never meant to invoked programtically it should run
  //by the framework not by the programmer
  //Timing : Run only once for the component intialization
  ngOnInit(): void {
    console.log("NgOninit one time run if the component got intialized mostly used for intialization",this.data);
  }

  //Run if the component is being destroyed
  ngOnDestroy(): void {
    console.log("NgOnDestory run only if the component is being destroyed ",this.data)
  }

  //Run for every change detection
  //NgOnchange it should be in the child component 
  //If it finds change in the child component it will get the change we can
  //conditionally define the change should it appiled or not 
  //we flag firstChange this will be true if it is an inital load 
  //even in the intial change it will have data
  ngOnChanges(changes: SimpleChanges): void {

    if(changes['data']['firstChange']){
      this.inital = changes['data']['currentValue']
    }
    console.log("Run only if there is change in the input property done by the parent componnet which is passing the data",changes)
  }
 

}
