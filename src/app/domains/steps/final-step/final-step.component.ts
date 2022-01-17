import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { CardBackgroundColors } from '@models/card-classes';
import { Snippet } from '@models/snippet';
import { Testimonial } from '@models/testimonial';
import { SharedModule } from '@shared/shared.module';

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
}

@NgModule({
  imports: [CommonModule, CardModule, SharedModule],
  declarations: [FinalStepComponent],
  exports: [FinalStepComponent],
})
export class FinalStepModule {}
