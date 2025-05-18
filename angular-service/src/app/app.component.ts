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
      title: 'Build with Directive',
      description: 'Directive are the building blocks of Angular applications.',
      buttonText: 'See Directive Examples'
    })
  }
  ngOnInit(): void {

    //I have modified the data after 5 sec so it would no shown in the view
    //just because on Push
    setTimeout(()=>{
      this.sf.jsonData.push({
        id: 5,
        title: 'Build with Pipe',
        description: 'Pipe are the building blocks of Angular applications.',
        buttonText: 'See Pipe Examples'
      })

      //Althogh i am assigning it never updates the UI unless there is change in the reference
      this.serviceData = this.sf.jsonData;
      console.log(this.sf.jsonData)
    },5000)

    //To update the UI even in the Onpush strategy to solid response
    //So it will replace the reference and it got caught by change detection on push
    setTimeout(()=>{
     this.sf.jsonData = [...this.sf.jsonData , {
        id: 6,
        title: 'Build with Service',
        description: 'Service are the building blocks of Angular applications.',
        buttonText: 'See Service Examples'
      }]
      //this.serviceData = this.sf.jsonData;
      //mark for check will mark the component to be run the next change detection
      //it just marked it won't run it imediately like detectChanges
      //However since we put it inside the setTimeout it would run
      //Change detection will run even if it is in onpush for event mouse,onlcick
      //observable data bind , rxjs operator , setTimeout , setInterval etc
      this.cdr.markForCheck();
      console.log(this.sf.jsonData)
    },6000)
  }

  alert(event:any){

  }
  
}

