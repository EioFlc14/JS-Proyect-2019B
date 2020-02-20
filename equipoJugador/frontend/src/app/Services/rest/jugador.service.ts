import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class JugadorService {

  url = environment.url + '/jugador';

  constructor(
    private readonly _httpClient: HttpClient,
  ){}

  buscar(id: number){
    const urlSearch = this.url + '?id=' + id;
    return this._httpClient.get(urlSearch);
  }

  crear(data: any) : Observable<any> {
    return this._httpClient.
    post<any>(
      this.url,
      data
    );
  }

  actualizar(id: number, data): Observable<any>{
    const url = this.url + '/' + id;
    return this._httpClient.put(
      url,
      data
    );
  }


  getAll(){
    return this._httpClient.get(this.url);
  }

  eliminar(id: number){
    const url = this.url + '/' + id;
    return this._httpClient.delete(url);
  }

}
