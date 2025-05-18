import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContentProjectorComponent } from './content-projector/content-projector.component';
import { HighlighterDirective } from './directive/highlighter.directive';
import { InstantCardComponent } from './sample/instant-card/instant-card.component';
import { NgxForDirective } from './directive/ngx-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ContentProjectorComponent,
    HighlighterDirective,
    InstantCardComponent,
    NgxForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
