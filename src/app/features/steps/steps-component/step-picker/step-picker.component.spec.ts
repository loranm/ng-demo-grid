import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPickerComponent } from './step-picker.component';

describe('StepPickerComponent', () => {
  let component: StepPickerComponent;
  let fixture: ComponentFixture<StepPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
