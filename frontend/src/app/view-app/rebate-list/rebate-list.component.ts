import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RebateLoginComponent} from "../rebate-login/rebate-login.component";
import {Router} from "@angular/router";
import {AllDataService} from "../../all-data.service";

@Component({
  selector: 'app-rebate-list',
  templateUrl: './rebate-list.component.html',
  styleUrls: ['./rebate-list.component.scss']
})
export class RebateListComponent {



  constructor(public dialog: MatDialog, private router: Router, public allData: AllDataService) {
  }

  openLogin(data: any) {
    if(data.status){

      this.router.navigate(['/view-app/new_rebate/'+data.id+'/new_rebate_form'], {state: data});
    }else {

      const dialogRef = this.dialog.open(RebateLoginComponent, {
        width: '650px',
        data: data
      });

      dialogRef.afterClosed().subscribe(result => {
        this.allData.showAlert("Successfully Connected");
        data.status = result;
        if(result) {
          this.router.navigate(['/view-app/new_rebate/new_rebate_form'], {state: data});
        }
      });
    }
  }
}
