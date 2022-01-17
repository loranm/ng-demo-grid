import { HomeRoutingEnum } from '../home-routing.enum';

export const STEPS: readonly HomeRoutingEnum[] = [
  HomeRoutingEnum.Step1,
  HomeRoutingEnum.Step2,
  HomeRoutingEnum.Final,
] as const;
