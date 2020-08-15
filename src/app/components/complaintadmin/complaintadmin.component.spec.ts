import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintadminComponent } from './complaintadmin.component';

describe('ComplaintadminComponent', () => {
  let component: ComplaintadminComponent;
  let fixture: ComponentFixture<ComplaintadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
