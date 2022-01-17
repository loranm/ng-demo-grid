import { Snippet } from 'src/app/models/snippet';

export const SNIPPETS: readonly Snippet[] = [
  {
    label: 'Testimonials HTML',
    code: `
    <section role="region" class="testimonials">
      <ul class="testimonials__list">
        <li *ngFor="let testimonial of TESTIMONIALS; let index = index">
          <app-card
            [testimonial]="testimonial"
            [className]="classArray[index]"
          ></app-card>
        </li>
      </ul>
    </section>`,
  },
  {
    label: 'Testimonial HTML',
    code: `
    <article class="testimonial flow" [ngClass]="className" [class.quote]="testimonial.withDecoration">
      <div class="flex">
        <div>
          <img
            class="testimonial__image"
            [src]="testimonial.imgSrc"
            [attr.alt]="testimonial.altText"
          />
        </div>
        <div>
          <h2 class="testimonial__name">{{ testimonial.name }}</h2>
          <p class="testimonial__position">{{ testimonial.position }}</p>
        </div>
      </div>
      <p class="testimonial__excerpt">
        {{ testimonial.excerpt }}
      </p>
      <q class="testimonial__quote">{{ testimonial.quote }}</q>
   </article>`,
  },
  {
    label: 'Testimonial CSS',
    code: `.testimonial {
      font-size: var(--fs-400);
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 2.5rem 3.75rem 3rem -3rem var(--clr-secondary-400);
      margin-block: var(--margin);

      &__name {
        font-size: var(--fs-400);
        font-weight: var(--fw-400);
        line-height: 1;
      }

      &__position {
        font-size: var(--fs-300);
        opacity: 0.5;
      }

      &__image {
        width: 1.75rem;
        aspect-ratio: 1;
        border-radius: 50%;
      }

      &__excerpt {
        font-size: var(--fs-500);
        line-height: 1.2;
      }

      &__quote {
        opacity: 0.7;
      }
    }
    `,
  },
] as const;
