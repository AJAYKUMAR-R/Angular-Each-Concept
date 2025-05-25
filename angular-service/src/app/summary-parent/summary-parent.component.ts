import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { JsonServiceService } from '../service/json-service/json-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary-parent',
  standalone: false,
  templateUrl: './summary-parent.component.html',
  styleUrl: './summary-parent.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SummaryParentComponent {
   @Input() serviceData = [];

  constructor(private sf:JsonServiceService,private cdr:ChangeDetectorRef) {

  }


  public count = 5;

  add(){

    this.count = this.count + 1;

    //Look at it over here due to the event triggered angular detect the changes 
    //and update the UI even in the on push
    this.sf.postData({
      id: this.count,
      title: 'Build with Pipe ' + this.count,
      description: 'Pipe are the building blocks of Angular applications.',
      buttonText: 'See Pipe Examples'
    });

    
  }
  mannualDetect(){
    //this.cdr.detectChanges();
  }

  alert(event:any){
    this.sf.deleteData(event);
  }

}
