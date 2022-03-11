import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveBlocksComponent } from './move-blocks/move-blocks/move-blocks.component';

const routes: Routes = [
  {
    path: '',
    component: MoveBlocksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveBlocksRoutingModule {}
