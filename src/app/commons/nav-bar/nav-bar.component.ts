import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingEnum } from '@features/home/home-routing.enum';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  @Input() nextPageRoute!: HomeRoutingEnum;
  @Input() previousPageRoute!: HomeRoutingEnum;
}

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarModule {}
