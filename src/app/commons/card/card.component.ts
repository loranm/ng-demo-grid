import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { Testimonial } from '@models/testimonial';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() testimonial!: Testimonial;
  @Input() className!: string;
}

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
