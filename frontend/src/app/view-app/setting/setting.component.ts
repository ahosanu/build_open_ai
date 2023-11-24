import { Component } from '@angular/core';
import * as events from "events";
import {MatDialog} from "@angular/material/dialog";
import {AllDataService} from "../../all-data.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  protected readonly events = events;
  selectedFile: any;
  image_url: any;

  constructor(public dialog: MatDialog, public allData: AllDataService) {
  }

  updateImage(e: any) {
    this.selectedFile = e && e.target.files.length > 0 ? e.target.files[0] : '';
    let reader = new FileReader();
    reader.onload = () => {
      this.image_url = reader.result;
    };

    reader.readAsDataURL(this.selectedFile);
  }

  saveData() {
    this.allData.showAlert("Successfully Saved");
  }
}
