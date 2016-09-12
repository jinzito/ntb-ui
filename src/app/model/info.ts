import { Track } from "./track";
export class Info {
  bytesWritten: number;
  connected:number;
  connections:number;
  currentItemBytesSend:number;
  currentItemPlayed:number;
  totalPlayed:number;
  processedTrack:Track;
  processStatus:string;
  onAir:Track;
  playList:Array<Track>;
}
