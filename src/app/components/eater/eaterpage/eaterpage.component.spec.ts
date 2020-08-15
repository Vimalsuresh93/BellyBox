import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaterpageComponent } from './eaterpage.component';

describe('EaterpageComponent', () => {
  let component: EaterpageComponent;
  let fixture: ComponentFixture<EaterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
