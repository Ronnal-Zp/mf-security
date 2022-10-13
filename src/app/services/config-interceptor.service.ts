import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ConfigInterceptorService implements HttpInterceptor{

  constructor(
    private _router: Router,
    private _toastrService: ToastrService 
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let request = req;

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 400){
          this._toastrService.error(
            err.error.msj ? err.error.msj : 'Credenciales incorrectass',
            "Error"
          );
        }

        if(err.status === 404){
          this._toastrService.info(
            err.error.msj ? err.error.msj : 'Redireccionando...',
            "Aviso"
          );

          // this._router.navigateByUrl('/security/login');
        }


        return throwError( err );
      })
    );




  }
}
