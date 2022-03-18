import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { STEPS } from './steps';

@Component({
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  steps = STEPS;
  title!: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        switchMap(() =>
          this.route.firstChild ? this.route.firstChild.data : this.route.data
        ),
        map((data) => {
          console.log(
            '🚀 ~ file: steps.component.ts ~ line 34 ~ StepsComponent ~ map ~ data',
            data
          );

          return data.title;
        })
      )
      .subscribe((value) => (this.title = value));
  }
}
