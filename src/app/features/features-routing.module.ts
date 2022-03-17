import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesRoutingEnum } from './features-routing.enum';

const routes: Routes = [
  {
    path: FeaturesRoutingEnum.Steps,
    loadChildren: async () =>
      (await import('./steps/steps.module')).StepsModule,
  },
  {
    path: FeaturesRoutingEnum.Center,
    loadChildren: async () =>
      (await import('./center-stuffs/center-stuffs.module')).CenterStuffsModule,
  },
  {
    path: FeaturesRoutingEnum.Move,
    loadChildren: async () =>
      (await import('./move-blocks/move-blocks.module')).MoveBlocksModule,
  },
  {
    path: FeaturesRoutingEnum.Sizing,
    loadChildren: async () =>
      (await import('./sizing-blocks/sizing-blocks.module')).SizingBlocksModule,
  },
  {
    path: FeaturesRoutingEnum.Sandbox,
    loadChildren: async () =>
      (await import('./little-sandbox/little-sandbox.module'))
        .LitleSandboxModule,
  },
  {
    path: FeaturesRoutingEnum.Cardio,
    loadChildren: async () =>
      (await import('./cardio/cardio.module')).CardioModule,
  },
  {
    path: '',
    redirectTo: FeaturesRoutingEnum.Steps,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
