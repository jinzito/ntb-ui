//import {TrackErrorStatusEnum} from "./track-error-status-enum.enum";
export class Track {
  _id: string;
  initUrl: string;
  internalUrl: string;
  localUrl: string;
  created: string;
  creator: string;
  // errorStatus: TrackErrorStatusEnum;
  errorStatus: string;
  storageId: String;
  storageUrl: String;
  title: String;
  author: String;
  coverSrc: String;

  localCoverSrc:String; //will be generated on client side depends on evn
}
