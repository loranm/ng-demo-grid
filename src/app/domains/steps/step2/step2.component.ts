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
  selector: 'app-step1',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2Component {
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
  declarations: [Step2Component],
  exports: [Step2Component],
})
export class Step2Module {}
