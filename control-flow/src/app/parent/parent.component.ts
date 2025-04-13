import { Input,Component } from '@angular/core';
import {ICards} from '../child/child.component'

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
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

  public testCard : ICards[]  = [];

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
