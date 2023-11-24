import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingComponent} from "./setting.component";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

const appRouter = [
  {
    path: '',
    component: SettingComponent,
  }
];

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter),
    MatButtonModule,
    MatDialogModule,
  ]
})
export class SettingModule { }
