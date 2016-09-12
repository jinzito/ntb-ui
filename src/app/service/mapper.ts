import { Track } from "../model/track";
import { Info } from "../model/info";
import { isArray } from "rxjs/util/isArray";
import 'rxjs/util/isArray';

export class Mapper {

  protected mapSimpleProperties(source: Object, dest: Object) {
    for (var prop in source) {
      if (typeof source[prop] === "number" || typeof source[prop] === "string") {
        dest[prop] = source[prop];
      }
    }

    return dest;
  }

  public mapTrack(source: Object): Track {
    var result: Track = new Track();
    this.mapSimpleProperties(source, result);
    return result;
  }

  public mapTracks(source: Array<Object>): Array<Track> {
    var result = Array<Track>();
    for (let trackObject of source) {
      result.push(this.mapTrack(trackObject));
    }
    return result;
  }

  public mapInfo(source: Object): Info {
    var result: Info = new Info();
    this.mapSimpleProperties(source, result);
    if (source.hasOwnProperty('processedTrack')) {
      result.processedTrack = this.mapTrack(source['processedTrack']);
    }
    if (source.hasOwnProperty('onAir')) {
      result.processedTrack = this.mapTrack(source['onAir']);
    }
    if (source.hasOwnProperty('playList') && isArray(source['playList'])) {
      result.playList = this.mapTracks(source['playList'])
    } else {
      result.playList = [];
    }
    return result;
  }
}
