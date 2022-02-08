import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from '@commons/card/card.component';
import { StepLayoutModule } from '@commons/step-layout/step-layout.component';
import { StepAsset } from '@models/step-asset';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {
  assets$!: Observable<StepAsset>;

  constructor(private readonly route: ActivatedRoute) {
    this.assets$ = this.route.data.pipe(map((data) => data.assets));
  }
}

@NgModule({
  imports: [CommonModule, StepLayoutModule, CardModule],
  declarations: [Step1Component],
  exports: [Step1Component],
})
export class Step1Module {}
