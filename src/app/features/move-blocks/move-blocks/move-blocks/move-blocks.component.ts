import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './move-blocks.component.html',
  styleUrls: [
    './move-blocks.component.scss',
    './move-blocks-done.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoveBlocksComponent {
  blocks: number[];
  isDone$ = new BehaviorSubject(false);

  constructor() {
    this.blocks = this.getBlocks();
  }

  getBlocks(blocks = 10): number[] {
    return Array(blocks);
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
