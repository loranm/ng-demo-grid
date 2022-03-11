import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeaturesRoutingEnum } from '@features/features-routing.enum';

interface Step {
  label: string;
  path: FeaturesRoutingEnum;
}

@Component({
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  steps: Step[] = [
    { label: 'Centrer des trucs', path: FeaturesRoutingEnum.Center },
    { label: 'Dimensionner des blocs', path: FeaturesRoutingEnum.Sizing },
    { label: 'Déplacer des blocs', path: FeaturesRoutingEnum.Move },
  ];
}
