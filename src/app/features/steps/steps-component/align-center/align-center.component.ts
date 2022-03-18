import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlockGeneratorService } from '@commons/utils/block-generator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './align-center.component.html',
  styleUrls: [
    './align-center.component.scss',
    './align-center-done.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlignCenterComponent {
  blocks: number[];
  isDone$ = new BehaviorSubject(false);

  constructor(private readonly blockService: BlockGeneratorService) {
    this.blocks = this.blockService.generate(40);
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
