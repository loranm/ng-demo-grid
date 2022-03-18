import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './center-stuffs.component.html',
  styleUrls: [
    './center-stuffs.component.scss',
    './center-stuffs-done.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterStuffsComponent {
  isDone$ = new BehaviorSubject(false);
  readonly bee = 'assets/bee.svg';

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
