import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LoginService } from '../../services/login.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  formGroup: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = [];



  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.loginService.getData().subscribe((res) => { 
        let user = res.data.user
        let profile = res.data.profile
        let company = res.data.company
        let options = res.data.options
        let token = res.data.token

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('company', JSON.stringify(company));
        localStorage.setItem('options', JSON.stringify(options));
        localStorage.setItem('token', token);
      
    })
  }

}
