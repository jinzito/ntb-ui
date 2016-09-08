import {TrackErrorStatusEnum} from "./track-error-status-enum.enum";
export class Track {
  _id: string;
  initUrl: string;
  internalUrl: string;
  localUrl: string;
  created: string;
  creator: string;
  errorStatus: TrackErrorStatusEnum;
  storageId:String;
}
