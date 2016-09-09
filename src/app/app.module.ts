import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import {TracksService} from "./service/track.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule
  ],
  providers: [TracksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
