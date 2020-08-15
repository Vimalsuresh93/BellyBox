import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosignupComponent } from './herosignup.component';

describe('HerosignupComponent', () => {
  let component: HerosignupComponent;
  let fixture: ComponentFixture<HerosignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
