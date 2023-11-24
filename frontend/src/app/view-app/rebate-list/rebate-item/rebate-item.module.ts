import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RebateItemComponent} from "./rebate-item.component";



@NgModule({
  declarations: [
    RebateItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RebateItemComponent
  ]
})
export class RebateItemModule { }
