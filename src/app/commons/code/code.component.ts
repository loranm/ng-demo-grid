import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { SeparatorModule } from '@commons/separator/separator.component';
import { Snippet } from '@models/snippet';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  @Input() snippets!: readonly Snippet[];
}

@NgModule({
  imports: [CommonModule, SeparatorModule, SharedModule],
  declarations: [CodeComponent],
  exports: [CodeComponent],
})
export class CodeModule {}
