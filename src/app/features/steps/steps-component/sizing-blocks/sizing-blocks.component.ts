import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlockGeneratorService } from '@commons/utils/block-generator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
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
  constructor(private readonly blockService: BlockGeneratorService) {
    this.blocks = this.blockService.generate();
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
