import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityupdateComponent } from './charityupdate.component';

describe('CharityupdateComponent', () => {
  let component: CharityupdateComponent;
  let fixture: ComponentFixture<CharityupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
