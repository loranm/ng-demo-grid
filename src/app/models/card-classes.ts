export enum CardBackgroundColors {
  Primary400 = 'bg-primary-400',
  Secondary400 = 'bg-secondary-400',
  Secondary500 = 'bg-secondary-500',
  Neutral100 = 'bg-neutral-100',
}

export const CARDBACKGROUNDCOLORS: readonly CardBackgroundColors[] = [
  CardBackgroundColors.Primary400,
  CardBackgroundColors.Secondary400,
  CardBackgroundColors.Neutral100,
  CardBackgroundColors.Secondary500,
  CardBackgroundColors.Neutral100,
] as const;
