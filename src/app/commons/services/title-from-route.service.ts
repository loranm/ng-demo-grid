import { Injectable } from '@angular/core';
import { STEPS } from '@features/steps/steps-component/steps/steps';

@Injectable({
  providedIn: 'root',
})
export class TitleFromRouteService {
  steps = STEPS;

  getTitle(route: any): string {
    const title =
      this.steps.find((step) => step.path.endsWith(route.routeConfig.path))
        ?.label ?? 'Passez votre CSS aux Grilles';
    return title;
  }
}
