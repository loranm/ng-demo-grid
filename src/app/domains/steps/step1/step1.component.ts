import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CardModule } from 'src/app/commons/card/card.component';
import { CardBackgroundColors } from 'src/app/models/card-classees';
import { TESTIMONIALS } from 'src/app/shared/data/testimonials';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {
  TESTIMONIALS = TESTIMONIALS;
  classArray: CardBackgroundColors[] = [
    CardBackgroundColors.Primary400,
    CardBackgroundColors.Secondary400,
    CardBackgroundColors.Neutral100,
    CardBackgroundColors.Secondary500,
    CardBackgroundColors.Neutral100,
  ];
}

@NgModule({
  imports: [CommonModule, CardModule],
  declarations: [Step1Component],
  exports: [Step1Component],
})
export class Step1Module {}
