import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlockGeneratorService } from '@commons/utils/block-generator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './minmax.component.html',
  styleUrls: ['./minmax.component.scss', './minmax-done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinmaxComponent {
  blocks = ['Hello', 'Ola!', 'Bonjour !', 'Hallo!'];
  isDone$ = new BehaviorSubject(false);

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
