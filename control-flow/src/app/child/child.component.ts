import { Input,Component ,Output,EventEmitter, TemplateRef} from '@angular/core';
import { IntialService } from '../service/intial.service';


@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',

  //below it the concept called component heiarch injection
  //if the component has service it will seek for it's parent has it any
  //like wise it will go deeper in the hiearchy to find the services
  //that will served all over the place
  //however if we put it as seprate for the each componet it will be like
  //transient scope which mean all the place will have different instance
  //when you wan't keep the data specific to the instance you can use 
  //you can use provider like specific more statefull 
  //if it is common it could be stateless resuble service
  providers : [
    IntialService
  ]
})


export class ChildComponent {
    //Required true will help us to have the compilation error if the developer forget to give the values
    @Input({required:true}) card! : ICards;
    @Input() first!:boolean;


    //rather than instanitating passing it as reference of template
    @Input() noImage!:TemplateRef<any>;

    //Custom event binder to transfer child to parent
    @Output() selectedTrip = new EventEmitter<ICards>();
	  constructor(private inital:IntialService) { 
      console.log("child " + this.inital.count)
    }

    sendTrip(card:ICards){
      if(card){
        this.selectedTrip.emit(card);
      }
    }

}


export interface ICards{
  Id:number;
  title:string;
  imageUrl:string;
  description:string;
}