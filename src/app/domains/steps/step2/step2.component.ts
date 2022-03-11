import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';
import { CARDBACKGROUNDCOLORS } from '@shared/data/colors';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { SNIPPETS } from './snippets';

@Component({
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2Component {
  readonly title = 'Deuxième étape';
  readonly snippets = SNIPPETS;
  readonly TESTIMONIALS = TESTIMONIALS;
  readonly classArray = CARDBACKGROUNDCOLORS;
}

@NgModule({
  imports: [CommonModule, StepLayoutModule, CardModule],
  declarations: [Step2Component],
  exports: [Step2Component],
})
export class Step2Module {}
