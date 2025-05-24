import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { TableHighlighterDirective } from './directive/tablehighlighter/table-highlighter.directive';
import { NotifierComponent } from './notifier/notifier.component';
import { SummaryParentComponent } from './summary-parent/summary-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TableHighlighterDirective,
    NotifierComponent,
    SummaryParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
