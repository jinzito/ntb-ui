import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdTabsModule } from '@angular2-material/tabs';
import { TracksService } from "./service/track.service";
import { InfoComponent } from './view/info.component';
import { InfoService } from "./service/info.service";


@NgModule({
  declarations: [
    AppComponent, InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [TracksService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
