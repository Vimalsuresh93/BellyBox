import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaterloginComponent } from './eaterlogin.component';

describe('EaterloginComponent', () => {
  let component: EaterloginComponent;
  let fixture: ComponentFixture<EaterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
