import { Component, OnInit } from '@angular/core';
import {Track} from "./model/track";
import { TracksService } from './service/tracks.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

  errorMessage: string;
  tracks: Track[];
  mode = 'Promise';

  constructor (private tracksService: TracksService) {}

  ngOnInit() { this.getTracks(); }

  getTracks() {
    this.tracksService.getTracks()
      .then(
        tracks => this.tracks = tracks,
        error =>  this.errorMessage = <any>error);
  }

  title = 'app works';
}
