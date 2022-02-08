import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsResolver } from '@commons/services/assets-resolver.resolver';
import { FinalStepComponent } from '@domains/steps/final-step/final-step.component';
import { Step2Component } from '@domains/steps/step2/step2.component';
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
        resolve: { assets: AssetsResolver },
      },
      {
        path: HomeRoutingEnum.Step2,
        component: Step2Component,
        resolve: { assets: AssetsResolver },
      },
      {
        path: HomeRoutingEnum.Final,
        component: FinalStepComponent,
        resolve: { assets: AssetsResolver },
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
