import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
//import { Estudiante } from "../../model/estudiante";
//import { EstudianteService }from "../../shared/estudiante.service";
import { SensorRFID } from "../../model/rfidsensor";
import { SensorRFIDService }from "../../shared/rfidsensor.service";
import { LedService }from "../../shared/leds.service";
import { clear } from "tns-core-modules/application-settings";
import { Usuario } from "../../model/usuario";

@Component({
  selector: 'ns-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions,
    private sonserRFIDService: SensorRFIDService,
    private ledService: LedService) {  }
    rfidsensors: Array<SensorRFID>;
    color:string = "";
    state:string = "";

  ngOnInit(): void {
    this.sonserRFIDService.getSensorRFIDs()
    .subscribe( (result:any) =>{
      console.log(result);    
      this.rfidsensors= result.rfidsensors;      
    }, (error) =>{
      this.alert(error.error.message);
    });
  }

  encenderled(){
    console.log("color:"+this.color+this.state)
    this.ledService.prenderled(this.color,parseInt(this.state,10));
    
  }

  salir()
  {
    clear();
    this.routerExtensions.navigate(["/login"],{clearHistory: true});
  }

  camara()
  {
    clear();
    this.routerExtensions.navigate(["/inicio/camara"],{clearHistory: true});
  }

  alert(message:string)
  {
    return alert({
      title: "Ejemplo Login",
      okButtonText: "OK",
      message: message});
  }

}
