import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardioComponent } from './cardio/cario/cardio.component';
import { CardioRoutingModule } from './cardio-routing.module';
import { SeparatorModule } from '@commons/separator/separator.component';
import { DoneToggleModule } from '@commons/done-toggle/done-toggle/done-toggle.component';
import { BlockModule } from '@commons/block/block.component';

@NgModule({
  declarations: [CardioComponent],
  imports: [
    CommonModule,
    CardioRoutingModule,
    SeparatorModule,
    DoneToggleModule,
    BlockModule,
  ],
})
export class CardioModule {}
