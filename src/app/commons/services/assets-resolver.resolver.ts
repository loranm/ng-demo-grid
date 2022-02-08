import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { HomeRoutingEnum } from '@features/home/home-routing.enum';
import { StepAsset } from '@models/step-asset';
import { empty, Observable } from 'rxjs';
import { StepAssetsService } from './step-assets.service';

@Injectable({
  providedIn: 'root',
})
export class AssetsResolver implements Resolve<StepAsset> {
  constructor(private readonly assetService: StepAssetsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): Observable<StepAsset> {
    if (route?.url?.length > 0) {
      return this.assetService.getAssets(route.url[0].path as HomeRoutingEnum);
    }

    return empty();
  }
}
