import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserRoleRestService {

  url = environment.url + '/role_users__user_roles';

  constructor(
    private readonly _httpClient: HttpClient,
  ){}


  getAllPatients(){
    const urlGetAllPatients = this.url + '?role_users=3';
    return this._httpClient.get(urlGetAllPatients);
  }

  getAllDoctors(){
    const urlGetAllDoctors = this.url + '?role_users=2';
    return this._httpClient.get(urlGetAllDoctors);
  }

  delete(id:number){
    const urlDelete = this.url + '/' + id;
    return this._httpClient.delete(urlDelete);
  }

}
