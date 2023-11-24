import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllDataService} from "../all-data.service";
import {ViewAppComponent} from "./view-app.component";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {AlertModule} from "./alert/alert.module";


const appRouter = [
  {
    path: '',
    component: ViewAppComponent,
    children: [
      {
        path: 'new_rebate',
        loadChildren: () => import("./rebate-list/rebate-list.module").then(m => m.RebateListModule),
      },
      {
        path: 'support',
        loadChildren: () => import("./support/support.module").then(m => m.SupportModule),
      },
      {
        path: 'setting',
        loadChildren: () => import("./setting/setting.module").then(m => m.SettingModule),
      },
      {
        path: 'rebate_history',
        loadChildren: () => import("./history/history.module").then(m => m.HistoryModule),
      },
      {
        path: '**',
        redirectTo: '/view-app/new_rebate',
      }
    ]
  }
];

@NgModule({
  declarations: [ViewAppComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter),
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatListModule,
    AlertModule
  ]
})
export class ViewAppModule {
  constructor(public appData: AllDataService) {
  }
}
