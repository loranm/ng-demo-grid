import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkButtonComponent {
  @Input() path!: string;

  get isValid() {
    return Boolean(this.path);
  }
}

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LinkButtonComponent],
  exports: [LinkButtonComponent],
})
export class LinkButtonModule {}
