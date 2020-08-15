import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitysignupComponent } from './charitysignup.component';

describe('CharitysignupComponent', () => {
  let component: CharitysignupComponent;
  let fixture: ComponentFixture<CharitysignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitysignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
