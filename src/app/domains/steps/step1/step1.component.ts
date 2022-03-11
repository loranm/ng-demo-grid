import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';
import { CARDBACKGROUNDCOLORS } from '@shared/data/colors';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { SNIPPETS } from './snippets';

@Component({
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {
  readonly title = 'Première étape';
  readonly snippets = SNIPPETS;
  readonly TESTIMONIALS = TESTIMONIALS;
  readonly classArray = CARDBACKGROUNDCOLORS;
}

@NgModule({
  imports: [CommonModule, StepLayoutModule, CardModule],
  declarations: [Step1Component],
  exports: [Step1Component],
})
export class Step1Module {}
