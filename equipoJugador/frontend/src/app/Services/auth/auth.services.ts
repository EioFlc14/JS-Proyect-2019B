import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  estaLogeado = false;
  esAdministrador = false;
  esUsuario = false;

  dataSesion;


  constructor(private readonly httpClient: HttpClient) {
  }

  login(username: string, password: string) {

    const url = environment.url + `/usuario?username=${username}&password=${password}`;
    return this.httpClient.get(url);
  }



}
