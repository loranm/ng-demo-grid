import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LittleSandboxComponent } from './little-sandbox/little-sandbox.component';

const routes: Routes = [
  {
    path: '',
    component: LittleSandboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LittleSandboxRoutingModule {}
