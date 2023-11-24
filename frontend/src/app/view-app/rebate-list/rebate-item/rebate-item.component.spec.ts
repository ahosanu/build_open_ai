import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebateItemComponent } from './rebate-item.component';

describe('RebateItemComponent', () => {
  let component: RebateItemComponent;
  let fixture: ComponentFixture<RebateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
