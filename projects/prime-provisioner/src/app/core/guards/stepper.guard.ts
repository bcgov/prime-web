import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { EnrolmentStateService } from '@prime-prov/modules/enrolment/services/enrolment-state.service';

@Injectable({
  providedIn: 'root'
})
export class StepperGuard implements CanActivate {
  constructor(private stateSvc: EnrolmentStateService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const index = this.stateSvc.index;
    const valid = this.stateSvc.validateIndex(index);
    return true;
  }
}
