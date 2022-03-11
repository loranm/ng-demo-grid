import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './move-blocks.component.html',
  styleUrls: ['./move-blocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoveBlocksComponent {
  blocks: number[];

  constructor() {
    this.blocks = this.getBlocks();
  }

  getBlocks(blocks = 10): number[] {
    return Array(blocks);
  }
}
