import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sizing-blocks',
  templateUrl: './sizing-blocks.component.html',
  styleUrls: ['./sizing-blocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizingBlocksComponent {
  blocks: number[];
  constructor() {
    this.blocks = this.getBlocks(15);
  }

  getBlocks(blocks = 10): number[] {
    return Array(blocks);
  }
}
