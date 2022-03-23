import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StepHeaderModule } from '@commons/step-header/step-header.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, StepHeaderModule],
})
export class HomeModule {}
