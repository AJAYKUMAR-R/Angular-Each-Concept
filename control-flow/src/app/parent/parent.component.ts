import { Input,Component, ViewChild, AfterViewInit, ElementRef, viewChild, OnInit, ViewChildren, QueryList, AfterContentInit, ContentChild, ContentChildren } from '@angular/core';
import {ChildComponent, ICards} from '../child/child.component'
import { TemplateBindingParseResult } from '@angular/compiler';
import { ContentProjectorComponent } from '../content-projector/content-projector.component';
import { IntialService } from '../service/intial.service';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers : [
    IntialService
  ]
})
export class ParentComponent implements OnInit,AfterViewInit {
  
 
  public cards:ICards[] = [
    {
      Id:1,
      title: 'Sunset Paradise',
      imageUrl: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7d?auto=format&fit=crop&w=800&q=60',
      description: 'Relaxing sunset at the beach.'
    },
    {
      Id:2,
      title: 'Mountain Escape',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
      description: 'Breathtaking view of the mountains.'
    },
    {
      Id:3,
      title: 'City Lights',
      imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60',
      description: 'Skyline illuminated by the city lights.'
    }
  ];

  ngOnInit(): void {
    console.log('ngOninit : staticTrue',this.staticTrueRef)
    console.log('ngOninit : staticFalse',this.staticFalseRef)
  }

  public testCard : ICards[]  = [];

  /**
   *
   */
  constructor(private intial:IntialService) {
    console.log("Parent Service " + this.intial.count)
  }

  //view child componenet declartion
  @ViewChild(ChildComponent) child! : ChildComponent;


  //we can accces the child element as the template reference
  @ViewChild('cardRef',{read:ElementRef}) childRef! : ElementRef;

  @ViewChild('HeadingRef',{read:ElementRef}) HeadingRef! : ElementRef;

  @ViewChild('staticTrueRef' ,{static:true}) staticTrueRef!:ElementRef;

  @ViewChild('staticFalseRef' ,{static:false}) staticFalseRef!:ElementRef;


  //ViewChildren will provide all the matched elements in the first child componets
  @ViewChildren('cardRef') childListRef! : QueryList<ChildComponent>;

  //first possible access points for child elements on it successfully 
  ngAfterViewInit(): void {
    //viewchild will give first mathcing comoponents 
    console.log('Child card',this.child.card);

    //accessing child as elementRef
    console.log('ElementRef',this.childRef);
    //For dom manupulation
    this.childRef.nativeElement.innerHTML = 'red'

    //Accessing simple html elements for dom manupulation
    this.HeadingRef.nativeElement.BackgroundColor = 'red'

    //Accessing the child elements based on the static property 
    //static false will be accessed over here but static static true also accesiible over and ngOnInit
    console.log('Viewinit : staticTrue',this.staticTrueRef)
    console.log('Viewinit : staticFalse',this.staticFalseRef)


    //this will show the list of of mathing child components
    console.log('List of child Components',this.childListRef)

    //This will listen for the changes predically
    //this will provide if any changes in the component happens
    this.childListRef.changes.subscribe((changes)=>{
      console.log(changes);
    });



  }

  

  //Custom event never bubble whereas js event like click will buble up till parent component
  getTrip(card:ICards){
    console.log(card);
  }

  //We can tweak like id based manupulation in angular
  getStyle(){
    if(1){
      return {'card-wrapper':true}
    }
    return ''
  }

 
  
}
