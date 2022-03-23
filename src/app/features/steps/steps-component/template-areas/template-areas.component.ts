import { Component } from '@angular/core';
import { CARDBACKGROUNDCOLORS } from '@shared/data/colors';
import { TESTIMONIALS } from '@shared/data/testimonials';
import { BehaviorSubject } from 'rxjs';
import { SNIPPETS } from '../testimonials/snippets';

@Component({
  selector: 'app-template-areas',
  templateUrl: './template-areas.component.html',
  styleUrls: [
    './template-areas.component.scss',
    './template-areas-done.component.scss',
  ],
})
export class TemplateAreasComponent {
  readonly snippets = SNIPPETS;
  readonly TESTIMONIALS = TESTIMONIALS;
  readonly classArray = CARDBACKGROUNDCOLORS;

  isDone$ = new BehaviorSubject<boolean>(false);

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
