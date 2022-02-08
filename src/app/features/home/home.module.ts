import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'src/app/commons/card/card.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NavBarModule } from '@commons/nav-bar/nav-bar.component';
import { StepAssetsService } from '@commons/services/step-assets.service';
import { AssetsResolver } from '@commons/services/assets-resolver.resolver';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    SharedModule,
    NavBarModule,
  ],
  providers: [StepAssetsService, AssetsResolver],
})
export class HomeModule {}
