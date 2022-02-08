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
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalStepComponent implements OnInit {
  constructor(private assetsService: StepAssetsService) {}
  asset$ = this.assetsService.asset$;
  ngOnInit(): void {
    this.assetsService.setSelectedAsset('final');
  }
}

@NgModule({
  imports: [CommonModule, CardModule, StepLayoutModule],
  declarations: [FinalStepComponent],
  exports: [FinalStepComponent],
})
export class FinalStepModule {}
