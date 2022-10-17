import * as CryptoJS from 'crypto-js';
// var CryptoJS = require("crypto-js");

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

  private _KEY = environment.SECRET_KEY

  public encrypt(message: string){
    return CryptoJS.AES.encrypt(message, this._KEY).toString();
  }

  public decrypt(msgEncrypt: string){
    let msgDencrypt = CryptoJS.AES.decrypt(msgEncrypt, this._KEY);
    let txt = msgDencrypt.toString(CryptoJS.enc.Utf8);

    return txt;
  }

}
