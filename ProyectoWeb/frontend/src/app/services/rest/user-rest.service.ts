import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {RutaManageDoctorComponent} from "../../rutas/ruta-manage-doctor/ruta-manage-doctor.component";

@Injectable({
  providedIn: 'root'
})

export class UserRestService {

  url = environment.url + '/user';

  constructor(
    private  _httpClient: HttpClient,
  ){}

  update(id:number, data) : Observable<any> {
    const urlUpdate = this.url + '/' + id;
    return this._httpClient
      .put(
        urlUpdate,
        data
      );
  }

  create(data: any) : Observable<any> {
    const urlCreate = this.url;
    return this._httpClient
      .post<any>(
        urlCreate,
        data
      );
  }

  delete(id:number){
    const urlDelete = this.url + '/' + id;
    return this._httpClient.delete(urlDelete);
  }


}
