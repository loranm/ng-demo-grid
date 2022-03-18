import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { TitleFromRouteService } from '@commons/services/title-from-route.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleResolver implements Resolve<string | void> {
  constructor(private readonly titleFromRoute: TitleFromRouteService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<string | void> {
    return of(this.titleFromRoute.getTitle(route));
  }
}
