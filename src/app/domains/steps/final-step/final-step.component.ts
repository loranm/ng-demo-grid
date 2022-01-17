import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import {
  CARDBACKGROUNDCOLORS,
  CardBackgroundColors,
} from '@models/card-classes';
import { Snippet } from '@models/snippet';
import { Testimonial } from '@models/testimonial';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { SharedModule } from '@shared/shared.module';
import { SNIPPETS } from './snippets';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalStepComponent {
  TESTIMONIALS!: readonly Testimonial[];
  classArray!: readonly CardBackgroundColors[];
  snippets!: readonly Snippet[];

  constructor() {
    this.TESTIMONIALS = TESTIMONIALS;
    this.classArray = CARDBACKGROUNDCOLORS;
    this.snippets = SNIPPETS;
  }
}

@NgModule({
  imports: [CommonModule, CardModule, SharedModule],
  declarations: [FinalStepComponent],
  exports: [FinalStepComponent],
})
export class FinalStepModule {}
