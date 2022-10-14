import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LoginService } from '../../services/login.service';
import { User, Company, Profile, Option } from '../../interfaces/user-login';
import { EncryptService } from '../../shared/services/encrypt.service';
import { StorageService } from '../../shared/services/storage-service.service';



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

  matcher = new MyErrorStateMatcher();
  fields: FormlyFieldConfig[] = [];


  private _user!: User;
  private _profile!: Profile;
  private _company!: Company;
  private _options!: Option[];
  private _token!: string;


  formGroup!: FormGroup; 

  constructor(
    private loginService: LoginService,
    private encryptService: EncryptService,
    private storageService: StorageService,
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.builder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  onSubmitV2(){

    this.loginService.SignIn(this.formGroup.value).subscribe((res) => { 

      this.storageService.setData(res.data)

  
    })

    
  }


  onSubmit(e: any){
    e.preventDefault();
    
    this.loginService.SignIn(this.formGroup.value).subscribe((res) => { 
      this.storageService.setData(res.data)
    })
    
    //Prueba token
    this.storageService.getToken();
    
  }
}
