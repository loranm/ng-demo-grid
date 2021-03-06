import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {}

@NgModule({
  declarations: [BlockComponent],
  exports: [BlockComponent],
})
export class BlockModule {}
