import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements  AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'form_id', 'date', 'status', 'action'];
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  dataSource: MatTableDataSource<RebateHistory>;

  constructor(private router: Router) {
    const list = [
      createRebateHistory(1),
      createRebateHistory(2, 2),
      createRebateHistory(3, 2),
      createRebateHistory(4),
      createRebateHistory(5, 4),
      createRebateHistory(6),
      createRebateHistory(7, 3),
      createRebateHistory(8, 2),
      createRebateHistory(9),
      createRebateHistory(10, 4),
      createRebateHistory(11, 2),
      createRebateHistory(12, 3),
      createRebateHistory(13),
      createRebateHistory(14, 4),
    ];
    this.dataSource = new MatTableDataSource(list);
  }

  applyFilter($event: KeyboardEvent) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  goto() {
    this.router.navigate(['/view-app/']);
  }
}

export interface RebateHistory {
  id: string;
  name: string;
  status: string;
  form_id: string;
  date: Date;
}
/** Builds and returns a new User. */
function createRebateHistory(id: number, status: number = 1): RebateHistory {


  return {
    id: id.toString(),
    name: 'Test Form' + Math.round(Math.random() * 100).toString(),
    status: status === 1 ? 'complete' : (status === 2 ? 'pending' : (status === 3 ? 'draft' : 'error')),
    date: new Date(),
    form_id: '#ftx-sao6-42csac'
  };
}
