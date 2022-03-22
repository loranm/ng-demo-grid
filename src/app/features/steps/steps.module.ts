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
  TestimonialsResponsiveComponent,
} from '@features/steps/steps-component';
import { CardModule } from '@commons/card/card.component';
import { CodeModule } from '@commons/code/code.component';
import { SharedModule } from '@shared/shared.module';

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
    TestimonialsResponsiveComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StepsRoutingModule,
    LinkButtonModule,
    DoneToggleModule,
    BlockModule,
    StepHeaderModule,
    CardModule,
    CodeModule,
  ],
})
export class StepsModule {}
