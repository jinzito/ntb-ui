import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Info } from "../model/info";
import { Mapper } from "./mapper";

@Injectable()
export class InfoService {

  constructor(private http: Http) {
  }

  private requestUrl = 'http://127.0.0.1/api/info';
  private mapper = new Mapper();

  getInfo(): Promise<Info> {
    return this.http.post(this.requestUrl, '')
      .toPromise()
      .then(res => this.mapper.mapInfo(res.json()))
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
