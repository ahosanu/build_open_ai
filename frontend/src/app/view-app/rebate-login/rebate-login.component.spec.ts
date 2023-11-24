import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebateLoginComponent } from './rebate-login.component';

describe('RebateLoginComponent', () => {
  let component: RebateLoginComponent;
  let fixture: ComponentFixture<RebateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RebateLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RebateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
