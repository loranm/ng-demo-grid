import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { SeparatorModule } from '@commons/separator/separator.component';
import { CARDBACKGROUNDCOLORS } from '@models/card-classes';
import { Snippet } from '@models/snippet';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-step-layout',
  templateUrl: './step-layout.component.html',
  styleUrls: ['./step-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepLayoutComponent {
  @Input() title!: string;
  @Input() snippets!: readonly Snippet[];
}

@NgModule({
  imports: [CommonModule, SeparatorModule, SharedModule],
  declarations: [StepLayoutComponent],
  exports: [StepLayoutComponent],
})
export class StepLayoutModule {}
