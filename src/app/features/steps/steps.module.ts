import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps-component/steps/steps.component';
import { StepsRoutingModule } from './steps-routing.module';
import { BlockModule } from '@commons/block/block.component';
import { SeparatorModule } from '@commons/separator/separator.component';
import { LinkButtonModule } from '@commons/link-button/link-button.component';

@NgModule({
  declarations: [StepsComponent],
  imports: [
    CommonModule,
    StepsRoutingModule,
    LinkButtonModule,
    SeparatorModule,
  ],
})
export class StepsModule {}
