import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesRoutingEnum } from '@features/features-routing.enum';

const routes: Routes = [
  {
    path: FeaturesRoutingEnum.Steps,
    loadChildren: async () =>
      (await import('./steps/steps.module')).StepsModule,
  },
  {
    path: FeaturesRoutingEnum.Refs,
    loadChildren: async () => (await import('./refs/refs.module')).RefsModule,
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
