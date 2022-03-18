import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BlockGeneratorService } from '@commons/utils/block-generator.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-minmax',
  templateUrl: './minmax.component.html',
  styleUrls: ['./minmax.component.scss', './minmax-done.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinmaxComponent {
  blocks: number[];
  isDone$ = new BehaviorSubject(false);

  constructor(private readonly block: BlockGeneratorService) {
    this.blocks = this.block.generate(30);
  }

  toggleChange(): void {
    this.isDone$.next(!this.isDone$.value);
  }
}
