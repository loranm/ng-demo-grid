import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefsComponent } from './refs/refs/refs.component';

const routes: Routes = [
  {
    path: '',
    component: RefsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefsRoutingModule {}
