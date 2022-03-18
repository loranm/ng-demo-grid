import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BlockGeneratorService } from '@commons/utils/block-generator.service';
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

  constructor(private readonly blockService: BlockGeneratorService) {
    this.blocks = this.blockService.generate();
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
