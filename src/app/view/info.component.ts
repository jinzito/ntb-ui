import { Component, OnInit } from '@angular/core';
import { InfoService } from "../service/info.service";
import { Info } from "../model/info";

@Component({
  selector: 'app-info',
  template: `<p>
    bytesWritten: {{infoBytesWritten}}
  </p>`
})
export class InfoComponent implements OnInit {

  info: Info  = new Info();
  errorMessage: string;

  constructor(private infoService: InfoService) {
  }

  ngOnInit() {
    this.infoService.getInfo()
      .then(
        info => this.info = info,
        error => this.errorMessage = <any>error);
  }

}
