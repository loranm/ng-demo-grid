import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveBlocksComponent } from './move-blocks/move-blocks/move-blocks.component';
import { MoveBlocksRoutingModule } from './move-blocks-routing.module';
import { BlockModule } from '@commons/block/block.component';
import { SeparatorModule } from '@commons/separator/separator.component';
import { DoneToggleModule } from '@commons/done-toggle/done-toggle/done-toggle.component';

@NgModule({
  declarations: [MoveBlocksComponent],
  imports: [
    CommonModule,
    MoveBlocksRoutingModule,
    BlockModule,
    SeparatorModule,
    DoneToggleModule,
  ],
})
export class MoveBlocksModule {}
