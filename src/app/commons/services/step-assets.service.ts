import { Injectable } from '@angular/core';
import { SNIPPETS } from '@shared/data/snippets/step1';
import { HomeRoutingEnum } from '@features/home/home-routing.enum';
import { SNIPPETS_STEP2 } from '@shared/data/snippets/step2';

import {
  CARDBACKGROUNDCOLORS,
  CardBackgroundColors,
} from '@models/card-classes';
import { Snippet } from '@models/snippet';
import { Testimonial } from '@models/testimonial';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SNIPPETS_FINAL } from '@shared/data/snippets/final';

export type StepId = 'step-1' | 'step-2' | 'final';

export interface StepAsset {
  id: StepId;
  title: string;
  route: HomeRoutingEnum;
  testimonials: readonly Testimonial[];
  colors: readonly CardBackgroundColors[];
  snippets: readonly Snippet[];
}

export const ASSETS = [
  {
    id: 'step-1',
    title: 'Premiere Etape',
    route: HomeRoutingEnum.Step1,
    testimonials: TESTIMONIALS,
    colors: CARDBACKGROUNDCOLORS,
    snippets: SNIPPETS,
  },
  {
    id: 'step-2',
    title: 'Deuxieme Etape',
    route: HomeRoutingEnum.Step2,
    testimonials: TESTIMONIALS,
    colors: CARDBACKGROUNDCOLORS,
    snippets: SNIPPETS_STEP2,
  },
  {
    id: 'final',
    title: 'Etape finale',
    route: HomeRoutingEnum.Final,
    testimonials: TESTIMONIALS,
    colors: CARDBACKGROUNDCOLORS,
    snippets: SNIPPETS_FINAL,
  },
] as const;

@Injectable()
export class StepAssetsService {
  private selectedAssetAction$ = new BehaviorSubject<StepId>('step-1');

  assets$: Observable<readonly StepAsset[]> = of(ASSETS);

  asset$ = combineLatest([this.assets$, this.selectedAssetAction$]).pipe(
    map(([assets, id]) => assets.find((asset) => asset.id === id))
  );

  setSelectedAsset(id: StepId): void {
    this.selectedAssetAction$.next(id);
  }
}
