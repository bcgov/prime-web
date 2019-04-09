import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { EnrollmentStateService } from '@prime-enrollment/modules/enrollment/services/enrollment-state.service';

@Injectable({
  providedIn: 'root'
})
export class StepperGuard implements CanActivate {
  constructor(private stateSvc: EnrollmentStateService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const nextUrl = `/enrollment/${next.url[0].path}`;
    const index = this.stateSvc.findIndex(nextUrl) - 1;
    const valid = this.stateSvc.isIndexValid(index);
    return true;
  }
}
