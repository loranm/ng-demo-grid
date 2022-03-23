import { Snippet } from '@models/snippet';

export const SNIPPETS: readonly Snippet[] = [
  {
    label: 'Testimonials HTML',
    code: `
    <section class="testimonials-responsive">
      <app-done-toggle
        class="testimonials-responsive__toggle"
        (toggleChange)="toggleChange()"
        id="toggle-label"
        [isChecked]="(isDone$ | async) || false"
      >
        <h2 id="toggle-label">Voir le résultat</h2>
      </app-done-toggle>

      <ul
        role="list"
        class="testimonials-responsive__list"
        [class.done]="isDone$ | async"
      >
        <li
          class="testimonials-responsive__list__item"
          *ngFor="let testimonial of TESTIMONIALS; let i = index"
          [id]="'testimonial_' + (i + 1)"
        >
          <app-card
            [testimonial]="testimonial"
            [className]="classArray[i]"
          ></app-card>
        </li>
      </ul>
    </section>
   `,
  },
  {
    label: 'Testimonials CSS',
    code: `&.testimonials-responsive {
      display: grid;
      gap: var(--gap);

      &__toggle {
        display: grid;
        justify-content: center;
      }

      &__list {
        display: grid;
        gap: var(--gap);
        grid-template-columns: minmax(0, 1fr);
      }

      @media (min-width: 50rem) {
        &__list {
          grid-template-columns: repeat(4, 1fr);
          > .testimonials-responsive {
            &__list__item {
              &#testimonial_1 {
                grid-column: span 2;
              }
              &#testimonial_4 {
                grid-column: span 2;
              }

              &#testimonial_5 {
                grid-column: 4;
                grid-row: 1 / span 2;
              }
            }
          }
        }
      }
    }    `,
  },
] as const;
