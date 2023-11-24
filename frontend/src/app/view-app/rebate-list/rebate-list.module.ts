import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RebateListComponent} from "./rebate-list.component";
import {RouterModule} from "@angular/router";
import {RebateItemModule} from "./rebate-item/rebate-item.module";
import {RebateLoginModule} from "../rebate-login/rebate-login.module";
import {MatDialogModule} from "@angular/material/dialog";

const appRouter = [
  {
    path: '',
    component: RebateListComponent,
  },
  {
    path: ':id/new_rebate_form',
    loadChildren: () => import("../rebate-form/rebate-form.module").then(m => m.RebateFormModule)
  }
];

@NgModule({
  declarations: [
    RebateListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter),
    RebateItemModule,
    RebateLoginModule,
    MatDialogModule
  ]
})
export class RebateListModule { }
