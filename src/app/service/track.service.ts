import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Track } from '../model/track';
import 'rxjs/Rx';
import { Mapper } from "./mapper";

@Injectable()
export class TracksService {

  constructor(private http: Http) {
  }

  private requestUrl = 'http://127.0.0.1/api/tracks';
  private mapper = new Mapper();

  getTracks(): Promise<Track[]> {
    return this.http.post(this.requestUrl, '')
      .toPromise()
      .then(res => this.mapper.mapTracks(res.json()))
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}
