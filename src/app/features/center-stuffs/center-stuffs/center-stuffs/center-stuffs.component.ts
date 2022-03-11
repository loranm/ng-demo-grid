import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-center-stuffs',
  templateUrl: './center-stuffs.component.html',
  styleUrls: ['./center-stuffs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterStuffsComponent {
  readonly bee = 'assets/bee.svg';
}
