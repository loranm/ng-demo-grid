import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cario',
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.scss', './cardio-done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardioComponent {
  blocks: number[];
  isDone$ = new BehaviorSubject(false);
  constructor() {
    this.blocks = this.getBlocks(15);
  }

  getBlocks(blocks = 10): number[] {
    return Array(blocks);
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
