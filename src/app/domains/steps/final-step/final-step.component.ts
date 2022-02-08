import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';
import { StepAsset } from '@models/step-asset';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalStepComponent {
  assets$!: Observable<StepAsset>;

  constructor(private readonly route: ActivatedRoute) {
    this.assets$ = this.route.data.pipe(map((data) => data.assets));
  }
}

@NgModule({
  imports: [CommonModule, CardModule, StepLayoutModule],
  declarations: [FinalStepComponent],
  exports: [FinalStepComponent],
})
export class FinalStepModule {}
