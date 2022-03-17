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
    { label: '🎯 Centrer des trucs 🎯 ', path: FeaturesRoutingEnum.Center },
    {
      label: '📏 Dimensionner dans une grille 📏',
      path: FeaturesRoutingEnum.Sizing,
    },
    { label: '🏋️‍♂️ Déplacer des blocs 🏋️‍♂️', path: FeaturesRoutingEnum.Move },
    {
      label: '💛 Cardio (time to practice) 💛',
      path: FeaturesRoutingEnum.Cardio,
    },
    {
      label: '🦄 Dans la vraie vie 🦄 ',
      path: FeaturesRoutingEnum.Testimonials,
    },
  ];
}
