import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CARDBACKGROUNDCOLORS } from '@shared/data/colors';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { BehaviorSubject } from 'rxjs';
import { SNIPPETS } from '@features/steps/steps-component/testimonials/snippets';

@Component({
  templateUrl: './testimonials.component.html',
  styleUrls: [
    './testimonials.component.scss',
    './testimonials-done.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  readonly snippets = SNIPPETS;
  readonly TESTIMONIALS = TESTIMONIALS;
  readonly classArray = CARDBACKGROUNDCOLORS;

  isDone$ = new BehaviorSubject<boolean>(false);

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
