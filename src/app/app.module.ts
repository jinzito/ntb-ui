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
import { PlayerComponent } from "./view/player.component";
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';

@NgModule({
  declarations: [
    AppComponent, InfoComponent, PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdTabsModule,
    MdCardModule,
    MdIconModule,
    MdListModule
  ],
  providers: [TracksService, InfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
