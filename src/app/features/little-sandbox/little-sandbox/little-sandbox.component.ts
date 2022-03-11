import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-little-sandbox',
  templateUrl: './little-sandbox.component.html',
  styleUrls: ['./little-sandbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LittleSandboxComponent {
  paleBlueDot = 'assets/images/sandbox/Pale_Blue_Dot.png';
  carlSagan = 'assets/images/sandbox/Carl_Sagan_-_1980.jpg';
}
