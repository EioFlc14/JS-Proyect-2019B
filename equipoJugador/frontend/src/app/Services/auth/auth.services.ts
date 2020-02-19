import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  estaLogeado = false;
  dataSesion = {
    "id": 1,
    "nombre": 'Edison',
    "apellido": 'Sanango',
    "username": '12345',
    "password": '123',
    "rol": 'administrador'
  };


  constructor(private readonly httpClient: HttpClient) {
  }

  login(username: string, password: string) {

    const url = environment.url + `/usuario?username=${username}&password=${password}`;
    return this.httpClient.get(url);
  }



}
