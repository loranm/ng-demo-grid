import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';
import { StepAsset } from '@models/step-asset';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step2Component {
  assets$!: Observable<StepAsset>;

  constructor(private readonly route: ActivatedRoute) {
    this.assets$ = this.route.data.pipe(map((data) => data.assets));
  }
}

@NgModule({
  imports: [CommonModule, StepLayoutModule, CardModule],
  declarations: [Step2Component],
  exports: [Step2Component],
})
export class Step2Module {}
