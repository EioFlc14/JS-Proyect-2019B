import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserSpecialtyRestService {

  url = environment.url + '/specialty_users__user_specialties';

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
  }


  getAllDoctorsSpecialty() {
    const urlGet = this.url;
    return this._httpClient.get(urlGet);
  }

  searchDoctorsSpecialty(id: number) {
    //console.log('id',id);
    const urlSearch = this.url + '?user_specialties=' + id;
    return this._httpClient.get(urlSearch);
  }

}

