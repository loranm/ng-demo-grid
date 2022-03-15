import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sizing-blocks',
  templateUrl: './sizing-blocks.component.html',
  styleUrls: [
    './sizing-blocks.component.scss',
    './sizing-blocks-done.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizingBlocksComponent {
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
