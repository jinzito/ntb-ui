import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Track } from '../model/track';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TracksService {

  constructor(private http:Http) { }

  // getTracks(): void {
  //   return this.http.get('https://radio.myihor.ru/tracks').map(res => res.json());
  // }

  private requestUrl = 'https://radio.myihor.ru/tracks';

  getTracks(): Observable<Track[]> {
    return this.http.post(this.requestUrl, '').map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }



}
