import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeRoutingEnum } from '../home-routing.enum';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  navigationOrder: HomeRoutingEnum[];

  ngOnInit(): void {
    console.log(this.route.pathFromRoot);
  }

  nextPage() {
    console.log('navigate to next page');
  }

  previousPage() {
    console.log('navigate to previous page');
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationOrder = [HomeRoutingEnum.Step1, HomeRoutingEnum.Step2];
  }
}
