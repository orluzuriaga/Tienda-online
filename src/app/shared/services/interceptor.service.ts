import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize, tap } from 'rxjs/operators'
import { ProgressIndicatorService } from './progress-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private service:ProgressIndicatorService) { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
           .pipe(
            tap(value => this.service.show()),
            delay(3000),
            finalize(()=> this.service.hide()),

           );


  }




}
