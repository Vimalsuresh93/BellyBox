import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersignupComponent } from './sheltersignup.component';

describe('SheltersignupComponent', () => {
  let component: SheltersignupComponent;
  let fixture: ComponentFixture<SheltersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheltersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheltersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
