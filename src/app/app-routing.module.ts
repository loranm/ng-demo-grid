import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesRoutingEnum } from './features-routing.enum';

const routes: Routes = [
  {
    path: FeaturesRoutingEnum.Home,
    loadChildren: () =>
      import('./features/home/home.module').then((module) => module.HomeModule),
  },
  { path: '', redirectTo: FeaturesRoutingEnum.Home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
