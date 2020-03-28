import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private serverUrl = "https://api-gacasa.herokuapp.com/";
  constructor(private http:HttpClient) { }

  getEstudiantes()
  {    
    let headers = this.crearRequestHeader();
    return this.http.get(this.serverUrl+"api/estudiantes",{headers});
  }

  private crearRequestHeader(){
    let headers = new HttpHeaders({
      "Authorization": "token "+getString("token"),
      "Content-Type" : "application/json"
    });
    return headers;
  }

}
