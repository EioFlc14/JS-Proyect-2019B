import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {

  url = environment.url + '/specialty';

  constructor(
    private readonly _httpClient: HttpClient,
  ) {
  }


  getAllSpecialties() {
    const urlGetAllSpecialties = this.url;
    return this._httpClient.get(urlGetAllSpecialties);
  }

}
