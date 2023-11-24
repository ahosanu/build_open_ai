import {Component, Input} from '@angular/core';
import {AllDataService} from "../../all-data.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  constructor(public  all: AllDataService) {
  }
}
