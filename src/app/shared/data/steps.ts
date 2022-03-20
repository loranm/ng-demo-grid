import { FeaturesRoutingEnum } from '@features/features-routing.enum';
import { StepsRoutingEnum } from '@features/steps/steps-routing.enum';
import { Step } from '@models/step';

export const STEPS: readonly Step[] = [
  {
    label: '🎯 Centrer des trucs 🎯 ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Center}`,
  },
  {
    label: '📏 Dimensionner dans une grille 📏',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Sizing}`,
  },
  {
    label: '🏋️‍♂️ Déplacer des blocs 🏋️‍♂️',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Move}`,
  },
  {
    label: '💛 Cardio 💛',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Cardio}`,
  },
  {
    label: 'Aligner et centrer',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.AlignCenter}`,
  },
  {
    label: '🤔 minmax Auto-fill Auto-fit 🤔',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.MinMax}`,
  },
  {
    label: '🦄 Dans la vraie vie 🦄 ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Testimonials}`,
  },
  {
    label: '📱 Version mobile Easy Peasy 📱 ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.TestimonialsResponsive}`,
  },
] as const;
