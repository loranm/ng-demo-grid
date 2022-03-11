import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterStuffsComponent } from './center-stuffs/center-stuffs/center-stuffs.component';

const routes: Routes = [
  {
    path: '',
    component: CenterStuffsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenterStuffsRoutingModule {}
