import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleSandboxComponent } from './little-sandbox/little-sandbox.component';
import { LittleSandboxRoutingModule } from './little-sandbox-routing.module';

@NgModule({
  declarations: [LittleSandboxComponent],
  imports: [CommonModule, LittleSandboxRoutingModule],
})
export class LitleSandboxModule {}
