import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DetalleCarritoService {

  url = environment.url + '/detCarrito';

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

  buscar(id){
    const url = this.url + '?cabeceraCarrito=' + id;
    return this._httpClient.get(url);
  }

  eliminar(id){
    const url = this.url + '/' + id;
    return this._httpClient.delete(url);
  }

}
