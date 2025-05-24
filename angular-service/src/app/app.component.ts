import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { CustomService } from './services/custom/custom.service';
import { JsonServiceService } from './service/json-service/json-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  //This is helps to understand that if the service not found in the host component 
  //it will find it in the root component of the module app.componet.ts
  providers:[JsonServiceService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'angular-service';
  public serviceData!:any[];

  

  constructor(@Self() private sf:JsonServiceService,private cdr:ChangeDetectorRef) {
  this.serviceData = this.sf.jsonData;
  // This data appears in the view not because mutation is detected,
  // but because it was added to the source (array) during component construction.
  // At that time, Angular is performing the initial binding, so it captures the current state.
  // Therefore, it's included in the rendered view as part of the first change detection cycle.
  //it wouldn't even render it before that we updated so it will render it the updated data
    this.sf.jsonData.push({
      id: 4,
      title: 'Build with Directive ' + 4 ,
      description: 'Directive are the building blocks of Angular applications.',
      buttonText: 'See Directive Examples'
    })

    //This is here to justify the componet which has strategy on push 
    //will detect only change through event or changedetect methods 
    //let say for an example you are adding the data to the element
    //using add button in the appcomponent the chagnes in the serviceData property
    //seems to updated in the UI because of it is an event
    //below example replicate the scenario where data got updated aftersome time
    //the serviceData got updated but the changes would not shown in the UI
    //it will show only any event in the current component or changedetection method
    setTimeout(()=>{
      this.sf.jsonData.push({
        id: this.count,
        title: 'Build with Pipe LongTime' + this.count,
        description: 'Pipe are the building blocks of Angular applications.',
        buttonText: 'See Pipe Examples'
      });
      //Thi will detect changes
      //this.cdr.detectChanges();

      this.cdr.markForCheck();
      console.log("Service data updated",this.serviceData)
        },20000)
  }

  ngOnInit(): void {
    
  }

  

  mannualDetect()
  {
    //this.serviceData = this.sf.jsonData;
  }

  public count = 5;

  add(){

    this.count = this.count + 1;

    //Look at it over here due to the event triggered angular detect the changes 
    //and update the UI even in the on push
    this.sf.jsonData.push({
      id: this.count,
      title: 'Build with Pipe ' + this.count,
      description: 'Pipe are the building blocks of Angular applications.',
      buttonText: 'See Pipe Examples'
    });

    //Even in the on push if the reference got update the data got update
    //this.serviceData = [...this.sf.jsonData]

    console.log("Logging the service",this.serviceData);
    
  }

  alert(event:any){
    let obj = this.serviceData.findIndex((item) => item.id === event.id)
    this.serviceData.splice(obj,1);
  }
  
}

