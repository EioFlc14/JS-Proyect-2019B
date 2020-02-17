import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MedicalHistoryRestService {

  url = environment.url + '/medicalHistory';

  constructor(
    private  _httpClient: HttpClient,
  ){}

  getAllMedicalHistories(){
    const urlMedicalHistories = this.url;
    return this._httpClient.get(urlMedicalHistories);
  }

  search(id:number){
    const urlSearch = this.url + '?users=' + id;

    return this._httpClient.get(urlSearch);

  }


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
