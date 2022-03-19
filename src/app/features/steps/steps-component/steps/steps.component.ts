import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { STEPS } from '@shared/data/steps';

@Component({
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent implements OnDestroy {
  steps = STEPS;
  title!: string;
  sub: Subscription;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.sub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        switchMap(() =>
          this.route.firstChild ? this.route.firstChild.data : this.route.data
        ),
        map(({ title }) => title)
      )
      .subscribe({ next: (value) => (this.title = value) });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
