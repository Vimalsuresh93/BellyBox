import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatersignupComponent } from './eatersignup.component';

describe('EatersignupComponent', () => {
  let component: EatersignupComponent;
  let fixture: ComponentFixture<EatersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
