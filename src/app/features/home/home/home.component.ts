import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HomeRoutingEnum } from '../home-routing.enum';
import { filter, map } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { STEPS } from './steps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  sub: Subscription;
  currentRoute$ = new BehaviorSubject<any>(undefined);
  readonly steps = STEPS;

  nextRoute$ = this.currentRoute$.pipe(
    map((currentRoute) => this.steps[this.getNextIndex(currentRoute)])
  );

  previousRoute$ = this.currentRoute$.pipe(
    map((currentRoute) => this.steps[this.getPreviousIndex(currentRoute)])
  );

  constructor(private readonly router: Router) {
    this.sub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe({
        next: (event) => {
          this.currentRoute$.next(this.parseRoute(event));
        },
      });
  }

  private parseRoute(event: NavigationEnd): any {
    return this.router.parseUrl(event.urlAfterRedirects).root.children.primary
      .segments[1].path;
  }

  private getNextIndex(currentRoute: HomeRoutingEnum) {
    const index = this.steps.findIndex((step) => step === currentRoute);
    return index + 1 >= this.steps.length ? 0 : index + 1;
  }

  private getPreviousIndex(currentRoute: HomeRoutingEnum) {
    const index = this.steps.findIndex((step) => step === currentRoute);
    return index - 1 <= 0 ? 0 : index - 1;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
