import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class JsonServiceService {

  private cards = [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.',
      buttonText: 'Read More'
    },
    {
      id: 2,
      title: 'Explore TypeScript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      buttonText: 'Start Now'
    },
    {
      id: 3,
      title: 'Build with Components',
      description: 'Components are the building blocks of Angular applications.',
      buttonText: 'See Examples'
    }
  ];
  
  public jsonData:any[]= [];

  constructor() { 
    this.jsonData = [...this.cards]
  }
}
