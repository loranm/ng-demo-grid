import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';
import { CARDBACKGROUNDCOLORS } from '@shared/data/colors';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { SNIPPETS } from './snippets';

@Component({
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalStepComponent {
  readonly title = 'Dernière étape';
  readonly snippets = SNIPPETS;
  readonly TESTIMONIALS = TESTIMONIALS;
  readonly classArray = CARDBACKGROUNDCOLORS;
}

@NgModule({
  imports: [CommonModule, CardModule, StepLayoutModule],
  declarations: [FinalStepComponent],
  exports: [FinalStepComponent],
})
export class FinalStepModule {}
