import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Usuario } from "../model/usuario";
import { LoginService } from "../shared/login.service";
import { setString } from "tns-core-modules/application-settings";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  isBusy: boolean = false;
  constructor(private routerExtensions: RouterExtensions, private loginService: LoginService, private page:Page) {
    this.usuario = new Usuario();
    this.usuario.email="yovanny@gmail.com";
    this.usuario.password="1234";
    this.page.actionBarHidden = true;
   }

  ngOnInit(): void {
  }

  ingresar()
  {
    this.isBusy=true; 

    if(!this.usuario.email || !this.usuario.password)
    {
      this.alert("Debe ingresar un correo y una contraseña");
      return;
    }
    this.loginService.autenticar({email: this.usuario.email,password: this.usuario.password})
    .subscribe( (result:any) =>{
      //console.log(result);
      //console.log(JSON.parse(result.toString()).token.access_token);
      setString("token",result.token.access_token);
      this.isBusy=false;
      this.routerExtensions.navigate(["/inicio"],{clearHistory: true});
    }, (error) =>{
      this.alert(error.error.message); 
      this.isBusy=false;     
    });

    
  }

  alert(message:string)
  {
    return alert({
     title: "Ejemplo Login",
     okButtonText: "OK",
     message: message });
  }

  onBusyChanged(args: EventData) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
  }

}
