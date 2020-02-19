import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  url = environment.url + '/equipo';

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

  buscar(id: number){
    const urlSearch = this.url + '?id=' + id;
    return this._httpClient.get(urlSearch);
  }

  getAll(){
    return this._httpClient
      .get(this.url);
  }

  actualizar(id: number, data): Observable<any>{
    const url = this.url + '/' + id;
    return this._httpClient.put(
      url,
      data
    );
  }

  eliminar(id: number){
    const url = this.url + '/' + id;
    return this._httpClient.delete(url);
  }

}
