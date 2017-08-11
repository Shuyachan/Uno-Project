import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckComponent } from '../app/components/deck.component';
import { HeaderComponent } from '../app/components/header.component';
import { HandComponent } from '../app/components/hand.component';
//import { HeaderComponent } from '/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    HeaderComponent,
    HandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
