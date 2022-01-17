import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
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
  @Input() nextPageRoute!: HomeRoutingEnum | null;
  @Input() previousPageRoute!: HomeRoutingEnum | null;
}

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarModule {}
