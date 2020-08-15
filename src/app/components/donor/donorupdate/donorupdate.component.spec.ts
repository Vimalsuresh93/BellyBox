import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorupdateComponent } from './donorupdate.component';

describe('DonorupdateComponent', () => {
  let component: DonorupdateComponent;
  let fixture: ComponentFixture<DonorupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
