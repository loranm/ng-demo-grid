import { Injectable } from '@angular/core';
import { STEPS } from '@shared/data/steps';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  steps = STEPS;

  getTitle(route: any): string | void {
    return this.steps.find((step) => step.path.endsWith(route.routeConfig.path))
      ?.label;
  }
}
