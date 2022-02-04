import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-separator',
  template: '<ng-content></ng-content>',
  styleUrls: ['./separator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorComponent {
  @HostBinding('class.separator') separator = true;
}

@NgModule({
  declarations: [SeparatorComponent],
  exports: [SeparatorComponent],
})
export class SeparatorModule {}
