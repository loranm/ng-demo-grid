import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingBlocksComponent } from './sizing-blocks/sizing-blocks/sizing-blocks.component';
import { SizingBlocksRoutingModule } from './sizing-blocks-routing.module';
import { BlockModule } from '@commons/block/block.component';
import { SeparatorModule } from '@commons/separator/separator.component';
import { DoneToggleModule } from '@commons/done-toggle/done-toggle/done-toggle.component';

@NgModule({
  declarations: [SizingBlocksComponent],
  imports: [
    CommonModule,
    SizingBlocksRoutingModule,
    BlockModule,
    SeparatorModule,
    DoneToggleModule,
  ],
})
export class SizingBlocksModule {}
