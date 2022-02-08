import { StepId } from '@commons/services/step-assets.service';
import { HomeRoutingEnum } from '@features/home/home-routing.enum';
import { CardBackgroundColors } from '@models/card-classes';
import { Snippet } from '@models/snippet';
import { Testimonial } from '@models/testimonial';

export interface StepAsset {
  id: StepId;
  title: string;
  route: HomeRoutingEnum;
  testimonials: readonly Testimonial[];
  colors: readonly CardBackgroundColors[];
  snippets: readonly Snippet[];
}
