import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CARDBACKGROUNDCOLORS } from '@shared/data/colors';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { BehaviorSubject } from 'rxjs';
import { SNIPPETS } from '@features/steps/steps-component/testimonials-responsive/snippets';

@Component({
  selector: 'app-testimonials-responsive',
  templateUrl: './testimonials-responsive.component.html',
  styleUrls: [
    './testimonials-responsive.component.scss',
    './testimonials-responsive-done.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsResponsiveComponent {
  readonly snippets = SNIPPETS;
  readonly TESTIMONIALS = TESTIMONIALS;
  readonly classArray = CARDBACKGROUNDCOLORS;

  isDone$ = new BehaviorSubject<boolean>(true);

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
