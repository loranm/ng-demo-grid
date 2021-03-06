import { FeaturesRoutingEnum } from '@features/features-routing.enum';
import { StepsRoutingEnum } from '@features/steps/steps-routing.enum';
import { Step } from '@models/step';

export const STEPS: readonly Step[] = [
  {
    label: 'π― Centrer des trucs π― ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Center}`,
  },
  {
    label: 'π Dimensionner dans une grille π',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Sizing}`,
  },
  {
    label: 'ποΈββοΈ DΓ©placer des blocs ποΈββοΈ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Move}`,
  },
  {
    label: 'Aligner et centrer',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.AlignCenter}`,
  },
  {
    label: 'π Cardio π',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Cardio}`,
  },
  {
    label: 'π€ minmax Auto-fill Auto-fit π€',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.MinMax}`,
  },
  // {
  //   label: "π¦ Galerie d'images π¦ A faire ",
  //   path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Testimonials}`,
  // },
  {
    label: 'π¦ Dans la vraie vie π¦ ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.Testimonials}`,
  },
  {
    label: 'π± Version mobile Easy Peasy π± ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.TestimonialsResponsive}`,
  },
  {
    label: 'π ...avec des mots pour le dire... βοΈ',
    path: `/${FeaturesRoutingEnum.Steps}/${StepsRoutingEnum.TemplateAreas}`,
  },
] as const;
