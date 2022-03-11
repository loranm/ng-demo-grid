import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizingBlocksComponent } from './sizing-blocks/sizing-blocks/sizing-blocks.component';

const routes: Routes = [
  {
    path: '',
    component: SizingBlocksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SizingBlocksRoutingModule {}
