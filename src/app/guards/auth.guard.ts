import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate():boolean{
    return true;
    // if (window.localStorage.getItem('docID') == null) {
    //   return false;
    // } else {
    //   return true;
    //  };
  }
}