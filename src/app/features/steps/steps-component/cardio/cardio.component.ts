import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlockGeneratorService } from '@commons/utils/block-generator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './cardio.component.html',
  styleUrls: ['./cardio.component.scss', './cardio-done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardioComponent {
  blocks: number[];
  isDone$ = new BehaviorSubject(false);

  constructor(private readonly block: BlockGeneratorService) {
    this.blocks = this.block.generate(30);
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
