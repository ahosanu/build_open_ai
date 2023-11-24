import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.scss']
})
export class ViewAppComponent {
  constructor(public api: ApiService) {
  }
}
