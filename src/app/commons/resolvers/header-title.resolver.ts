import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { TitleFromRouteService } from '@commons/services/title-from-route.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleResolver implements Resolve<string> {
  constructor(private readonly titleFromRoute: TitleFromRouteService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> {
    const x = this.titleFromRoute.getTitle(route);

    return of(x);
  }
}
