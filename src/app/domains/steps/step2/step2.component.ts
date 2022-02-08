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
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2Component implements OnInit {
  constructor(private readonly assetsService: StepAssetsService) {}
  assets$ = this.assetsService.asset$;

  ngOnInit(): void {
    this.assetsService.setSelectedAsset('step-2');
  }
}

@NgModule({
  imports: [CommonModule, StepLayoutModule, CardModule],
  declarations: [Step2Component],
  exports: [Step2Component],
})
export class Step2Module {}
