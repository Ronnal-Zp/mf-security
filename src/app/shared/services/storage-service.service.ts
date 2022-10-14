import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ResponseUserLogin } from '../../interfaces/user-login';
import { EncryptService } from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  key!: string;


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


  arrKeys: string[] = [];
  getToken(){
    for (let i = 0; i < localStorage.length; i++) {
      
      this.key = localStorage.key(i) ?? '';

      const keyDescrypt = this._encryptService.decrypt(this.key);
      this.arrKeys = keyDescrypt.toString().split(',');

      if(this.arrKeys[0] == "token")
        return this.arrKeys[1];
      
    } 
  }

}
