import { Snippet } from '@models/snippet';

export const SNIPPETS: readonly Snippet[] = [
  {
    label: 'Testimonials HTML',
    code: `
    <section class="testimonials">
    <app-done-toggle
      class="testimonials__toggle"
      (toggleChange)="toggleChange()"
      id="toggle-label"
      [isChecked]="(isDone$ | async) || false"
    >
      <h2 id="toggle-label">Voir le résultat</h2>
    </app-done-toggle>

    <ul role="list" class="testimonials__list" [class.done]="isDone$ | async">
      <li
        class="testimonials__list__item"
        *ngFor="let testimonial of TESTIMONIALS; let i = index"
        [id]="'testimonial_' + (i + 1)"
      >
        <app-card
          [testimonial]="testimonial"
          [className]="classArray[i]"
        ></app-card>
      </li>
    </ul>
  </section>`,
  },
  {
    label: 'Testimonial CSS',
    code: `
    &.template-areas-demo {
      &__list {
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
          "testimonial1 testimonial1 testimonial2 testimonial5"
          "testimonial3  testimonial4 testimonial4  testimonial5";

        > .template-areas-demo__list__item {
          &#testimonial_1 {
            grid-area: testimonial1;
          }
          &#testimonial_2 {
            grid-area: testimonial2;
          }
          &#testimonial_3 {
            grid-area: testimonial3;
          }
          &#testimonial_4 {
            grid-area: testimonial4;
          }
          &#testimonial_5 {
            grid-area: testimonial5;
          }
        }
      }
    }
    `,
  },
] as const;
