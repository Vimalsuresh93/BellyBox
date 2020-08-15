import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterloginComponent } from './shelterlogin.component';

describe('ShelterloginComponent', () => {
  let component: ShelterloginComponent;
  let fixture: ComponentFixture<ShelterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
