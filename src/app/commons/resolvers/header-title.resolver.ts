import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeaderTitleService } from './header-title.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleResolver implements Resolve<string | void> {
  constructor(private readonly headerTitleFromRoute: HeaderTitleService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<string | void> {
    return of(this.headerTitleFromRoute.getTitle(route));
  }
}
