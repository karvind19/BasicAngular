// import { Injectable, Injector, InjectionToken, Inject } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry, timeout } from 'rxjs/operators';
// import { v4 as uuid } from 'uuid';
// import { EEXIST } from 'constants';

// export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

// /**
//  * Implements HTTP_INTERCEPTOR in order to handle error
//  * while making any http request to any REST API service.
//  */
// @Injectable({
//   providedIn: 'root'
// })
// export class APIInterceptorService implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const timeoutValue = Number(request.headers.get('timeout')) || this.defaultTimeout;

//     /** Generate UID to trace a single request thread. */
//     const UID = uuid();

//     /** Adding generated UID to request header to trace sigle request thread. */
//     const requestWithHeader = request.clone({
//       setHeaders: { CID: UID }
//     });

//     return next.handle(requestWithHeader).pipe(
//       timeout(timeoutValue),
//       catchError(this.handleError)
//     );
//   }

//   /**
//    *
//    * @param defaultTimeout Provide default timeout duration.
//    */
//   constructor(@Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number) { }

//   /**
//    * Method to Handle error while making get request to Rest API.
//    * @param err Variable to hold httpErrorResponse.
//    */
//   private handleError(err: HttpErrorResponse) {
//        return throwError(err.error);
//   }
// }
