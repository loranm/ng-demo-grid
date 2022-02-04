import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { SeparatorModule } from '@commons/separator/separator.component';
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
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {
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
  imports: [CommonModule, CardModule, SharedModule, SeparatorModule],
  declarations: [Step1Component],
  exports: [Step1Component],
})
export class Step1Module {}
