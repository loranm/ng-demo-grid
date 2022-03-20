import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepsRoutingEnum } from '@features/steps/steps-routing.enum';
import { HeaderTitleResolver } from '@commons/resolvers/header-title.resolver';
import * as components from '@features/steps/steps-component';

const routes: Routes = [
  {
    path: '',
    component: components.StepsComponent,
    children: [
      {
        path: StepsRoutingEnum.Selector,
        component: components.StepPickerComponent,
        data: { title: '🧑‍🍳 Passez votre CSS aux Grilles 🧑‍🍳' },
      },
      {
        path: StepsRoutingEnum.Center,
        component: components.CenterStuffsComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Sizing,
        component: components.SizingBlocksComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Move,
        component: components.MoveBlocksComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Cardio,
        component: components.CardioComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.AlignCenter,
        component: components.AlignCenterComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.MinMax,
        component: components.MinmaxComponent,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.Testimonials,
        component: components.Testimonials,
        resolve: {
          title: HeaderTitleResolver,
        },
      },
      {
        path: StepsRoutingEnum.TestimonialsResponsive,
        component: components.TestimonialsResponsiveComponent,
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
