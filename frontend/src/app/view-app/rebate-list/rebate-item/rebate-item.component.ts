import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rebate-item',
  templateUrl: './rebate-item.component.html',
  styleUrls: ['./rebate-item.component.scss']
})
export class RebateItemComponent {
  @Input() logo: any;
  @Input() title: any = 'Test';
  @Input()  status:boolean = false;
}
