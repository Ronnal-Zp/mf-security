import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RecoveryPasswordComponent } from './authentication/recovery-password/recovery-password.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ConfigInterceptorService } from "./services/config-interceptor.service";
import { ToastrModule } from "ngx-toastr";
import { SharedMaterialModule } from './shared/shared-material/shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ConfigInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
