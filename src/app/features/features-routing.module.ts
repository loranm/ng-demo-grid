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
