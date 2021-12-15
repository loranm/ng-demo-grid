import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const usedMatModules = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, usedMatModules],
  exports: [usedMatModules],
})
export class SharedModule {}
