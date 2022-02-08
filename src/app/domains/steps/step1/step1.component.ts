import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  OnInit,
} from '@angular/core';
import { CardModule } from '@commons/card/card.component';
import { StepAssetsService } from '@commons/services/step-assets.service';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';

@Component({
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component implements OnInit {
  constructor(private readonly assetsService: StepAssetsService) {}
  assets$ = this.assetsService.asset$;

  ngOnInit(): void {
    this.assetsService.setSelectedAsset('step-1');
  }
}

@NgModule({
  imports: [CommonModule, StepLayoutModule, CardModule],
  declarations: [Step1Component],
  exports: [Step1Component],
})
export class Step1Module {}
