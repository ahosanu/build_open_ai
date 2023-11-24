import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SupportComponent} from "./support.component";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

const appRouter = [
  {
    path: '',
    component: SupportComponent,
  }
];

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter),
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class SupportModule { }
