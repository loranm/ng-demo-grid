import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from 'src/app/domains/steps/step1/step1.component';
import { HomeRoutingEnum } from './home-routing.enum';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: HomeRoutingEnum.Step1,
        component: Step1Component,
      },
      { path: '', redirectTo: HomeRoutingEnum.Step1, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
