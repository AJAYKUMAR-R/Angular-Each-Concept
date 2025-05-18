import { Component, Inject, InjectionToken, Optional, Self, SkipSelf } from '@angular/core';
import { CustomService } from '../services/custom/custom.service';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../../config';
import { ConfigService } from '../services/Config/config.service';
import { skip } from 'rxjs';

//This is the token which should be generated
const token = new InjectionToken<CustomService>('CUSTOMSERVICE');

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  providers:[
    // This is the one of the way providing the Service
    // With-our custom factory funtion
    { 
      provide:token,
      useFactory:(http:HttpClient)=> new CustomService(http),
      deps:[HttpClient]
    },
    //This is another alternative syntax
    {provide:CustomService,useClass:CustomService,deps:[HttpClient]},

    //This is how we can inject simple object to
    { provide: 'APP_CONFIG', useValue: CONFIG },

    ConfigService

  ]
})
export class SummaryComponent {

  public serviceName:string = "";
  public apiName:string = "";

    //Decorator specific to the Injection
    //@Optional => which is optional of the service if we did not provide it would not throw as an Error
    //@Self => it will look for the decorator not in the tree only in the host componet
    //@SkipSelf => for some reason you will using single service as global and componet specific in that case skipself will seeking on the root level service not host level
    //@host => if the directive or pipes use the service instead look into the root module it will look into the hostComponent

  constructor(
    @Inject(token) private customerService:CustomService,
    @Inject('APP_CONFIG') private config:any,
    @Optional() private configService:ConfigService,
    //@Self() private configSelf : ConfigService,
    //@SkipSelf() private configSkipSelf : ConfigService
  ) { 
    this.serviceName = this.customerService.customService;
    this.apiName = this.config.apiUrl;
    // console.log(this.configService ? this.configService : "Not discoverd")
    // console.log(this.configSelf ? this.configSelf : "Not discoverd")
  }

}
