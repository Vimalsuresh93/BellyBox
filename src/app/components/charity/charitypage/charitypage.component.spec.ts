import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitypageComponent } from './charitypage.component';

describe('CharitypageComponent', () => {
  let component: CharitypageComponent;
  let fixture: ComponentFixture<CharitypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
