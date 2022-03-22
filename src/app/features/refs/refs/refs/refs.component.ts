import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './refs.component.html',
  styleUrls: ['./refs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
