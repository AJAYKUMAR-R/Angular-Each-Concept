import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { BootstrapService } from './services/bootstrap.service';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BootstrapService],  //If you removed provided in Root the component will be available on the like module
                                  //as we know we can put it in the component level also
  bootstrap: [AppComponent]  //We can provide multiple root component so more case it will be one
})
export class AppModule { }
