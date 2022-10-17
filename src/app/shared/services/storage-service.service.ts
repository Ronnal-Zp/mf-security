import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ResponseUserLogin } from '../../interfaces/user-login';
import { EncryptService } from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  key!: string;
  value!: string;
  isToken!: string;
  keyDescrypt!: string;
  valueDescrypt!: string;


  constructor(
    private _encryptService: EncryptService
  ) { }

  setData(data: any){
    let arrData = Object.entries(data)

    arrData.forEach((key, value) => {
        let objValue = JSON.stringify(value);


        let keyEncrypt = this._encryptService.encrypt( String(key) );
        let valueEncrypt = this._encryptService.encrypt( String(objValue) );


        localStorage.setItem( keyEncrypt, valueEncrypt )

    });

  }


  getToken(){

    if(localStorage.length > 0){

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i) ?? '';
        let value = localStorage.getItem(key) ?? '';
        console.log(value);

        const valueDescrypt = this._encryptService.decrypt(value);
        console.log(valueDescrypt);



        // const keyDescrypt = this._encryptService.decrypt(key);
        // this.arrKeys = this.keyDescrypt.toString().split(',');
        // let isToken = this.arrKeys[0];

        // console.log(this.arrKeys);
        // if(isToken === "token")
        //   return this.arrKeys[1];

      }
    }


  }



  clear(){
    localStorage.clear()
  }

}


