import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  estaLogeado = false;

  addDoctor = false;
  updateDoctor = false;
  manageDoctor = false;
  deleteDoctor = false;

  addPatient = false;
  updatePatient = false;
  managePatient = false;
  deletePatient = false;

  addMedicalCheck = false;
  updateMedicalCheck = false;
  manageMedicalCheck = false;
  deleteMedicalCheck = false;

  dataSesion;

  constructor(private readonly _httpClient: HttpClient){
  }

  login (username:string, password:string) {

    const url = environment.url + `/user?userUsername=${username}&userPassword=${password}`;
    return this._httpClient.get(url);
  }

}

