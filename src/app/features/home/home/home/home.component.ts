import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = "Pour un layout aussi doux et sucré qu'une..";
  waffleSrc = 'assets/images/waffle.png';
}
