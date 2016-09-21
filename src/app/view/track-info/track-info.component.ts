import { Component, OnInit, Input } from '@angular/core';
import { Track } from "../../model/track";

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.css']
})
export class TrackInfoComponent implements OnInit {

  @Input() track;

  constructor() { }

  ngOnInit() {
  }

}
