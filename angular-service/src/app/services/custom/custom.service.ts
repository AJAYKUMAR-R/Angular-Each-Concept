import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//ProvidedIn root will make the service available to all over the application
//Globally available in the appModule.ts file
// @Injectable({
//   providedIn: 'root'
// })



export class CustomService {

  public customService = "Custom Service";

  constructor(http:HttpClient) { }
}
