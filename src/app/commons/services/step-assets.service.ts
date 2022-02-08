import { Injectable } from '@angular/core';
import { SNIPPETS } from '@shared/data/snippets/step1';
import { HomeRoutingEnum } from '@features/home/home-routing.enum';
import { SNIPPETS_STEP2 } from '@shared/data/snippets/step2';

import { CARDBACKGROUNDCOLORS } from '@models/card-classes';
import { Observable, of } from 'rxjs';
import { SNIPPETS_FINAL } from '@shared/data/snippets/final';
import { StepAsset } from '@models/step-asset';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { map } from 'rxjs/operators';

export type StepId = 'step-1' | 'step-2' | 'final';

export const ASSETS: readonly StepAsset[] = [
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
  assets$: Observable<readonly StepAsset[]> = of(ASSETS);

  getAssets(route: HomeRoutingEnum): Observable<StepAsset> {
    return this.assets$.pipe(
      map((assets) => assets.find((a) => a.route === route) as StepAsset)
    );
  }
}
