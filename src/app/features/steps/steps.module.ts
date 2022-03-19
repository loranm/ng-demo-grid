import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockModule } from '@commons/block/block.component';
import { DoneToggleModule } from '@commons/done-toggle/done-toggle/done-toggle.component';
import { LinkButtonModule } from '@commons/link-button/link-button.component';
import { SeparatorModule } from '@commons/separator/separator.component';
import { StepHeaderModule } from '@commons/step-header/step-header.component';
import { StepsRoutingModule } from '@features/steps/steps-routing.module';
import {
  AlignCenterComponent,
  CardioComponent,
  CenterStuffsComponent,
  MinmaxComponent,
  MoveBlocksComponent,
  SizingBlocksComponent,
  StepPickerComponent,
  StepsComponent,
  Testimonials,
} from '@features/steps/steps-component';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';

@NgModule({
  declarations: [
    StepsComponent,
    StepPickerComponent,
    CenterStuffsComponent,
    SizingBlocksComponent,
    MoveBlocksComponent,
    CardioComponent,
    AlignCenterComponent,
    MinmaxComponent,
    Testimonials,
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    LinkButtonModule,
    DoneToggleModule,
    BlockModule,
    StepHeaderModule,
    CardModule,
    StepLayoutModule,
  ],
})
export class StepsModule {}
