import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ArduinoService {

  url = environment.urlArduino;
  //:1338/pulso

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
  }


  getBloodPressure(){
    const url = this.url + '?sort=id DESC&limit=5';
    return this._httpClient.get(url);
  }

}
