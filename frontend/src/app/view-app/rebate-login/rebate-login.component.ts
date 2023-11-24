import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-rebate-login',
  templateUrl: './rebate-login.component.html',
  styleUrls: ['./rebate-login.component.scss']
})
export class RebateLoginComponent {
  title: any;
  logo: any;
  constructor(public dialogRef: MatDialogRef<RebateLoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.logo = data.logo;
  }

  onNoClick(): void {
    this.dialogRef.close(true);
  }
}
