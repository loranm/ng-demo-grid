import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepPickerComponent } from '@features/steps/steps-component/step-picker/step-picker.component';
import { AlignCenterComponent } from './steps-component/align-center/align-center.component';
import { CardioComponent } from './steps-component/cardio/cardio/cardio.component';
import { MoveBlocksComponent } from './steps-component/move-blocks/move-blocks.component';
import { CenterStuffsComponent } from './steps-component/center-stuffs/center-stuffs.component';
import { MinmaxComponent } from './steps-component/minmax/minmax.component';
import { SizingBlocksComponent } from './steps-component/sizing-blocks/sizing-blocks.component';
import { StepsComponent } from './steps-component/steps/steps.component';
import { StepsRoutingEnum } from './steps-routing.enum';

const routes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [
      {
        path: StepsRoutingEnum.Selector,
        component: StepPickerComponent,
      },
      {
        path: StepsRoutingEnum.Center,
        component: CenterStuffsComponent,
      },
      {
        path: StepsRoutingEnum.Sizing,
        component: SizingBlocksComponent,
      },
      {
        path: StepsRoutingEnum.Move,
        component: MoveBlocksComponent,
      },
      {
        path: StepsRoutingEnum.Cardio,
        component: CardioComponent,
      },
      {
        path: StepsRoutingEnum.AlignCenter,
        component: AlignCenterComponent,
      },
      {
        path: StepsRoutingEnum.MinMax,
        component: MinmaxComponent,
      },
      {
        path: '',
        redirectTo: StepsRoutingEnum.Selector,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsRoutingModule {}
