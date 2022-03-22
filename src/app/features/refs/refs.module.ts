import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefsComponent } from './refs/refs/refs.component';
import { RefsRoutingModule } from './refs-routing.module';

@NgModule({
  declarations: [RefsComponent],
  imports: [CommonModule, RefsRoutingModule],
})
export class RefsModule {}
