import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeaturesRoutingEnum } from '@features/features-routing.enum';
import { StepsRoutingEnum } from '@features/steps/steps-routing.enum';

interface Step {
  label: string;
  path: string;
}

@Component({
  selector: 'app-step-picker',
  templateUrl: './step-picker.component.html',
  styleUrls: ['./step-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepPickerComponent {
  steps: Step[] = [
    {
      label: '🎯 Centrer des trucs 🎯 ',
      path: `${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Center}`,
    },
    {
      label: '📏 Dimensionner dans une grille 📏',
      path: `${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Sizing}`,
    },
    {
      label: '🏋️‍♂️ Déplacer des blocs 🏋️‍♂️',
      path: `${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Move}`,
    },
    {
      label: '💛 Cardio (time to practice) 💛',
      path: `${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Cardio}`,
    },
    {
      label: 'Aligner et centrer',
      path: `${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.AlignCenter}`,
    },
    {
      label: '🤔 minmax Auto-fill Auto-fit 🤔',
      path: `${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.MinMax}`,
    },
    {
      label: '🦄 Dans la vraie vie 🦄 ',
      path: StepsRoutingEnum.Testimonials,
    },
  ];
}
