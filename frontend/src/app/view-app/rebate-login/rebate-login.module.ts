import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RebateLoginComponent} from "./rebate-login.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    RebateLoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    RebateLoginComponent
  ]
})
export class RebateLoginModule { }
