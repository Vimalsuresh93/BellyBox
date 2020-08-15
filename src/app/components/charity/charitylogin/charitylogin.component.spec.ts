import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityloginComponent } from './charitylogin.component';

describe('CharityloginComponent', () => {
  let component: CharityloginComponent;
  let fixture: ComponentFixture<CharityloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
