import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RecoveryPasswordComponent } from './authentication/recovery-password/recovery-password.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: "security/login",
    component: LoginComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: "security/recovery-password",
    component: RecoveryPasswordComponent
  },
  {
    path: "",
    redirectTo: "/security/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
