import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticisComponent } from './staticis.component';

describe('StaticisComponent', () => {
  let component: StaticisComponent;
  let fixture: ComponentFixture<StaticisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
