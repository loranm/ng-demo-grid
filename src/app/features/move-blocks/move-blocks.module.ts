import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveBlocksComponent } from './move-blocks/move-blocks/move-blocks.component';
import { MoveBlocksRoutingModule } from './move-blocks-routing.module';
import { BlockModule } from '@commons/block/block.component';
import { SeparatorModule } from '@commons/separator/separator.component';

@NgModule({
  declarations: [MoveBlocksComponent],
  imports: [
    CommonModule,
    MoveBlocksRoutingModule,
    BlockModule,
    SeparatorModule,
  ],
})
export class MoveBlocksModule {}
