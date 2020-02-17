import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MedicalCheckRestService {

  url = environment.url + '/medicalCheck';

  constructor(
    private  _httpClient: HttpClient,
  ){}

  getAllMedicalChecks(){
    const urlGet = this.url;
    return this._httpClient.get(urlGet);
  }

  search(id:number){
    const urlSearch = this.url + '?id=' + id;
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

  searchByDoctorEncharged(id:number){
    const url = this.url + '?doctorEncharged=' + id;
    return this._httpClient.get(url);
  }

  searchByPatientMedicalHistory(id:number){
    const url = this.url + '?patientMedicalHistory=' + id;
    return this._httpClient.get(url);
  }


}
