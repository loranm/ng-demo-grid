import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-done-toggle',
  templateUrl: './done-toggle.component.html',
  styleUrls: ['./done-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoneToggleComponent {
  @Output() toggleChange = new EventEmitter<void>();
  @Input() id = 'id';
  @Input() isChecked!: boolean;

  onToggleChange() {
    this.toggleChange.emit();
  }
}

@NgModule({
  imports: [SharedModule],
  declarations: [DoneToggleComponent],
  exports: [DoneToggleComponent],
})
export class DoneToggleModule {}
