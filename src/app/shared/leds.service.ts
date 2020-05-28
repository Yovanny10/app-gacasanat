import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class LedService {
  private serverUrl = "https://pursiest-persian-4567.dataplicity.io";
  constructor(private http: HttpClient) { }

  prenderled(colorled, onoff) {

    let data = JSON.stringify({
      "state": onoff
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {

    });
    xhr.open("POST", `https://pursiest-persian-4567.dataplicity.io/led/${colorled}/`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e0ecfea2-c1c8-5578-1e7a-eb6ef65667cb");

    xhr.send(data);
    console.log(data);
    //return this.http.post(`https://pursiest-persian-4567.dataplicity.io/led/green/`, data, { headers: this.crearRequestHeader() });
  }


  private crearRequestHeader() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return headers;
  }

}
