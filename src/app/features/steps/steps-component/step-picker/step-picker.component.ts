import { Component, ChangeDetectionStrategy } from '@angular/core';
import { STEPS } from '@shared/data/steps';

@Component({
  templateUrl: './step-picker.component.html',
  styleUrls: ['./step-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepPickerComponent {
  readonly steps = STEPS;
}
