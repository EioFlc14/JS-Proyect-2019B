import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CabeceraCarritoService {

  url = environment.url + '/cabCarrito';

  constructor(
    private readonly _httpClient: HttpClient,
  ){}


  crear(data: any) : Observable<any> {
    return this._httpClient.
    post<any>(
      this.url,
      data
    );
  }

  actualizar(id: number, data) : Observable<any> {
    console.log('id a ingresar:', id);
    const url = this.url + '/' + id;
    return this._httpClient.patch(url, data);

  }

  buscar(id){
    const url = this.url + '?id=' + id;
    return this._httpClient.get(url);
  }

  getAll(){
    const url = this.url + '?sort=id DESC&limit=100';
    return this._httpClient.get(url);
  }

  eliminar(id){
    const url = this.url + '/' + id;
    return this._httpClient.delete(url);
  }

}
