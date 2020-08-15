import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsignupComponent } from './donorsignup.component';

describe('DonorsignupComponent', () => {
  let component: DonorsignupComponent;
  let fixture: ComponentFixture<DonorsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
