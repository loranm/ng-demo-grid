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
import { HeaderTitleResolver } from '@commons/resolvers/header-title.resolver';

const routes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [
      {
        path: StepsRoutingEnum.Selector,
        component: StepPickerComponent,
        data: { title: '🧑‍🍳 Passez votre CSS aux Grilles 🧑‍🍳' },
      },
      {
        path: StepsRoutingEnum.Center,
        component: CenterStuffsComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Sizing,
        component: SizingBlocksComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Move,
        component: MoveBlocksComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Cardio,
        component: CardioComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.AlignCenter,
        component: AlignCenterComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.MinMax,
        component: MinmaxComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
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
