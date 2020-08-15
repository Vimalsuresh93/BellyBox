import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorloginComponent } from './donorlogin.component';

describe('DonorloginComponent', () => {
  let component: DonorloginComponent;
  let fixture: ComponentFixture<DonorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
