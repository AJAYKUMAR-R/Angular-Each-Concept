import { Component, ViewChild } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'control-flow';

  @ViewChild(ParentComponent) parent!:ParentComponent;


  constructor() {
    
  }

  addData(){
    this.parent.cards.push({
      Id:6,
      title: 'City Lights',
      imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60',
      description: 'Skyline illuminated by the city lights.'
    });
  }
}
