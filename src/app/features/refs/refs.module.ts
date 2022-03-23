import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefsComponent } from './refs/refs/refs.component';
import { RefsRoutingModule } from './refs-routing.module';
import { StepHeaderModule } from '@commons/step-header/step-header.component';

@NgModule({
  declarations: [RefsComponent],
  imports: [CommonModule, RefsRoutingModule, StepHeaderModule],
})
export class RefsModule {}
