import { AfterViewInit, Component, Inject, InjectionToken, ViewChild } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { HighlighterDirective } from './directive/highlighter.directive';
import { IntialService } from './service/intial.service';
import { TypeService } from './service/TYPE/type.service';
import { Observable, Subject, Subscription } from 'rxjs';

//This is the Provider funtion
function setProvider(Type:TypeService) : IntialService
{
  return new IntialService(Type)
}

//This is the specific token which is out there for the angular 
export const Intial = new InjectionToken<IntialService>('INITIAL_TOKEN');



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  //Here i am creating my custom provider
  //Components of custom provider are one unique token 
  //factory funtion which will instantiate the service
  //Deps will hold the dependency required for the service

  //Below it the syntax for creating an provider
  // providers : [
  //   {
  //     provide: Intial,
  //     useFactory: setProvider,
  //     deps: [TypeService]
  //   }
    
  // ]

  providers : [
    IntialService
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'control-flow';

 

  getData(dataEmitted:boolean){
    console.log(dataEmitted);
  }

  nameList:Observable<string[]>;

  constructor( private inital:IntialService) 
  {
    this.nameList = this.inital.$listofName;
    console.log(this.inital.$listofName)
    console.log("App component " + this.inital.count)
  }


  @ViewChild(ParentComponent) parent!:ParentComponent;

  //accessing the direcive in the ts file
  @ViewChild(HighlighterDirective) directive!:HighlighterDirective;

  ngAfterViewInit(): void {
    //will be hoverd initally 
    setTimeout(() => this.directive.MouseOver(),2000)
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
