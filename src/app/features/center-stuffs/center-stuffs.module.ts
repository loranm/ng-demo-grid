import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterStuffsComponent } from './center-stuffs/center-stuffs/center-stuffs.component';
import { CenterStuffsRoutingModule } from './center-stuffs-routing.module';

@NgModule({
  declarations: [CenterStuffsComponent],
  imports: [CommonModule, CenterStuffsRoutingModule],
})
export class CenterStuffsModule {}
