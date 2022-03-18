import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { SeparatorModule } from '@commons/separator/separator.component';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepHeaderComponent {}

@NgModule({
  imports: [SeparatorModule],
  declarations: [StepHeaderComponent],
  exports: [StepHeaderComponent],
})
export class StepHeaderModule {}
