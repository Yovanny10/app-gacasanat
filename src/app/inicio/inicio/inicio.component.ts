import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Estudiante } from "../../model/estudiante";
import { EstudianteService }from "../../shared/estudiante.service";
import { clear } from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions,
    private estudianteService: EstudianteService) { }
    estudiantes: Array<Estudiante>;

  ngOnInit(): void {
    this.estudianteService.getEstudiantes()
    .subscribe( (result:any) =>{
      console.log(result);    
      this.estudiantes= result.estudiantes;      
    }, (error) =>{
      this.alert(error.error.message);
    });
  }

  salir()
  {
    clear();
    this.routerExtensions.navigate(["/login"],{clearHistory: true});
  }

  alert(message:string)
  {
    return alert({
      title: "Ejemplo Login",
      okButtonText: "OK",
      message: message});
  }

}
