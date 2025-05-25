import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BootstrapService } from './services/bootstrap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy,OnChanges{
  title = 'angular-life-cycle-hook';

  public data:any;

  constructor(private service:BootstrapService){
    //console.log("The constructor will run it for only once for intitializing dependency",this.data)
  }

  //Note: LifeCycle hooks are never meant to invoked programtically it should run
  //by the framework not by the programmer

  ngOnInit(): void {
    this.data = this.service.listofName;
    //console.log("NgOninit one time run if the component got intialized mostly used for intialization",this.data);
  }

  ngOnDestroy(): void {
    //console.log("NgOnDestory run only if the component is being destroyed ",this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("Run only if there is change in the input property done by the parent componnet which is passing the data",changes)
  }

  Modify(){
    let array = [this.data.map((element:any) => {
      return element + "_";
    })];

    this.data = [...array];

    console.log(array);
    
  }
  
}
