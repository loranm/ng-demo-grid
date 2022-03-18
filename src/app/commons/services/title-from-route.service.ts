import { Injectable } from '@angular/core';
import { STEPS } from '@shared/data/steps';

@Injectable({
  providedIn: 'root',
})
export class TitleFromRouteService {
  steps = STEPS;

  getTitle(route: any): string | void {
    const title = this.steps.find((step) =>
      step.path.endsWith(route.routeConfig.path)
    )?.label;
    return title;
  }
}
