import {Injectable} from '@angular/core'
import { Http, Response, Headers} from '@angular/http';
import { Track } from '../model/track';
import 'rxjs/Rx';

@Injectable()
export class TracksService {

  constructor(private http: Http) { }

  private requestUrl = 'http://localhost/tracks';

  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }

  getTracks(): Promise<Track[]> {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*')

    return this.http.post(this.requestUrl, '', { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let d = 9;
    let result = [];
    let body = res.json();
    for (let object of body) {
      var track = new Track();
      // track._id = object['_id'];
      // track['initUrl'] = object['initUrl'];
      for (var prop in object) {
        track[prop] = object[prop];
      }
      result.push(track);
    }
    return result;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

}
