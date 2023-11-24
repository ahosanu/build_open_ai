import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from "./history.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";


const appRouter = [
  {
    path: '',
    component: HistoryComponent,
  }
];

@NgModule({
  declarations: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(appRouter),
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
  ]
})
export class HistoryModule { }
