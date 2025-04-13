import { Input,Component ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})


export class ChildComponent {
    //Required true will help us to have the compilation error if the developer forget to give the values
    @Input({required:true}) card! : ICards;
    @Input() first!:boolean;

    //Custom event binder to transfer child to parent
    @Output() selectedTrip = new EventEmitter<ICards>();
	  constructor() { }

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