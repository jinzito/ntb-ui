import { Component, OnInit } from '@angular/core';
import { TracksService } from './service/tracks.service';
import {Track} from "./model/track";
import './rxjs-operators';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [TracksService]
})
export class AppComponent implements OnInit {

  errorMessage: string;
  tracks: Track[];
  mode = 'Observable';

  constructor (private trackService: TracksService) {}

  ngOnInit() { this.getTracks(); }

  getTracks() {
    this.trackService.getTracks()
      .subscribe(
        tracks => this.tracks = tracks,
        error =>  this.errorMessage = <any>error);
  }

  title = 'app works!';
}
