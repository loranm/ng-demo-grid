import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizingBlocksComponent } from './sizing-blocks/sizing-blocks/sizing-blocks.component';
import { SizingBlocksRoutingModule } from './sizing-blocks-routing.module';
import { BlockModule } from '@commons/block/block.component';
import { SeparatorModule } from '@commons/separator/separator.component';

@NgModule({
  declarations: [SizingBlocksComponent],
  imports: [
    CommonModule,
    SizingBlocksRoutingModule,
    BlockModule,
    SeparatorModule,
  ],
})
export class SizingBlocksModule {}
