import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeparatorModule } from '@commons/separator/separator.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styleUrls: ['./step-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepHeaderComponent {}

@NgModule({
  imports: [SeparatorModule, SharedModule, RouterModule],
  declarations: [StepHeaderComponent],
  exports: [StepHeaderComponent],
})
export class StepHeaderModule {}
