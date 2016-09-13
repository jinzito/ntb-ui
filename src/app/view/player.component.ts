import { ElementRef, ViewChild, Renderer, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InfoService } from "../service/info.service";
import { Info } from "../model/info";
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
  viewProviders: [MdIconRegistry],
  encapsulation: ViewEncapsulation.None,
  selector: 'app-player',
  styleUrls: ['../app.component.css'],
  template: `
  <md-card class="container">
    <audio #audio1 (pause)="onAudioEvent('pause')" (play)="onAudioEvent('play')" (playing)="onAudioEvent('playing')" (canplay)="onAudioEvent('canplay')">
      <source src="http://127.0.0.1/api/stream" type="audio/mp3" >
    </audio>
    <button #butt md-fab (click)="onButtonClick()" [disabled]="playerStatus == 'cached'">
        <md-icon >{{playerStatus}}</md-icon>
    </button>
     on air: {{onAirTrack}}
  </md-card>
  <md-card class="container">
    <input type="text" readonly="" value="http://127.0.0.1/api/stream"/>
  </md-card>
`
})
export class PlayerComponent implements OnInit {

  info: Info = new Info();
  onAirTrack: string = 'Loading...';
  playerStatus: PlayerStatus = PlayerStatus.Play;
  errorMessage:string;
  @ViewChild('audio1') audio: ElementRef;

  constructor(private renderer: Renderer, private infoService: InfoService) {
  }

  ngOnInit() {
    this.infoService.getInfo()
      .then(
        info => this.info = info,
        error => this.errorMessage = <any>error);
  }

  protected onGettingInfo() {
    this.onAirTrack = (this.info && this.info.onAir && this.info.onAir.internalUrl) ? this.info.onAir.internalUrl : 'unrecognized';
  }

  public onAudioEvent(event) {
    switch (event) {
      case 'playing': this.playerStatus = PlayerStatus.Pause; break;
      case 'canplay': this.playerStatus = PlayerStatus.Play; break;
      case 'pause': this.playerStatus = PlayerStatus.Play; break;
      // default : this.playerStatus = PlayerStatus.Play; break;
    }
    this.onGettingInfo();
    // console.log('onAudioEvent:' + JSON.stringify(event));
  }

  public onButtonClick() {
    switch (this.playerStatus) {
      case PlayerStatus.Play:
        this.playAudio();
        break;
      case PlayerStatus.Pause:
        this.pauseAudio();
        break;
    }
  }

  private playAudio() {
    this.playerStatus = PlayerStatus.Cached;
    this.renderer.invokeElementMethod(this.audio.nativeElement, 'play');
  }

  private pauseAudio() {
    this.renderer.invokeElementMethod(this.audio.nativeElement, 'pause');
  }
}
enum PlayerStatus {
  Play = <any>'play_arrow',
  Pause = <any>'pause',
  Cached = <any>'cached'
}
