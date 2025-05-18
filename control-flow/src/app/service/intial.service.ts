import { Injectable } from '@angular/core';
import { count, Observable, of, Subject } from 'rxjs';
import { TypeService } from './TYPE/type.service';

//Provided in is the default injection service providers
//root mention that it will be injected as singleTon service

//will do the work which i done it the component using
//setProvider method

let id = 1;

@Injectable()



export class IntialService {

  public count = 0;

  $listofName!:Observable<string[]>;

  constructor(private TYPE:TypeService) { 
    
    id = id + 1;

    this.count = id;

    console.log("Root Level Count : " + this.count);

    this.getName();
  }

  getName(){
    this.$listofName = this.TYPE.TYPE ? of(['Ajay','David','Dhabush']) : of([])
  }
}
