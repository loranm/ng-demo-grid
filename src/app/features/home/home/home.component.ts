import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardBackgroundColors } from 'src/app/models/card-classees';
import { TESTIMONIALS } from 'src/app/shared/data/testimonials';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  TESTIMONIALS = TESTIMONIALS;
  classArray: CardBackgroundColors[] = [
    CardBackgroundColors.Primary400,
    CardBackgroundColors.Secondary400,
    CardBackgroundColors.Neutral100,
    CardBackgroundColors.Secondary500,
    CardBackgroundColors.Neutral100,
  ];
}
