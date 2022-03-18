import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturesRoutingEnum } from '@features/features-routing.enum';

@Component({
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {}
