import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  url = environment.url + '/usuario';

  constructor(
    private readonly _httpClient: HttpClient,
  ){}


  getAll(){
    return this._httpClient.get(this.url);
  }

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
    console.log('data a actualizar:', data);
    const url = this.url + '/' + id;
    return this._httpClient.patch(
      url,
      data
    );
  }

  eliminar(id: number){
    const url = this.url + '/' + id;
    return this._httpClient.delete(url);
  }


}
