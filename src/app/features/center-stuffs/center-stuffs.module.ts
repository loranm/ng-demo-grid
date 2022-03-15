import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterStuffsComponent } from './center-stuffs/center-stuffs/center-stuffs.component';
import { CenterStuffsRoutingModule } from './center-stuffs-routing.module';
import { SeparatorModule } from '@commons/separator/separator.component';
import { SharedModule } from '@shared/shared.module';
import { DoneToggleModule } from '@commons/done-toggle/done-toggle/done-toggle.component';

@NgModule({
  declarations: [CenterStuffsComponent],
  imports: [
    CommonModule,
    CenterStuffsRoutingModule,
    SeparatorModule,
    SharedModule,
    DoneToggleModule,
  ],
})
export class CenterStuffsModule {}
