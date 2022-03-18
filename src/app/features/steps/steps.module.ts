import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps-component/steps/steps.component';
import { StepsRoutingModule } from './steps-routing.module';
import { BlockModule } from '@commons/block/block.component';
import { SeparatorModule } from '@commons/separator/separator.component';
import { LinkButtonModule } from '@commons/link-button/link-button.component';
import { StepPickerComponent } from './steps-component/step-picker/step-picker.component';
import { SharedModule } from '@shared/shared.module';
import { DoneToggleModule } from '@commons/done-toggle/done-toggle/done-toggle.component';
import { CenterStuffsComponent } from './steps-component/center-stuffs/center-stuffs.component';
import { SizingBlocksComponent } from './steps-component/sizing-blocks/sizing-blocks.component';
import { MoveBlocksComponent } from './steps-component/move-blocks/move-blocks.component';
import { CardioComponent } from './steps-component/cardio/cardio/cardio.component';
import { AlignCenterComponent } from './steps-component/align-center/align-center.component';
import { MinmaxComponent } from './steps-component/minmax/minmax.component';

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
  ],
  imports: [
    CommonModule,
    StepsRoutingModule,
    LinkButtonModule,
    SeparatorModule,
    SharedModule,
    DoneToggleModule,
    BlockModule,
    SeparatorModule,
  ],
})
export class StepsModule {}
