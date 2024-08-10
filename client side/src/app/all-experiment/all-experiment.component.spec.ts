import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExperimentComponent } from './all-experiment.component';

describe('AllExperimentComponent', () => {
  let component: AllExperimentComponent;
  let fixture: ComponentFixture<AllExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
