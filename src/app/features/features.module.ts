import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from '@features/features-routing.module';
import { StepsModule } from './steps/steps.module';

@NgModule({
  imports: [CommonModule, FeaturesRoutingModule, StepsModule],
})
export class FeaturesModule {}
