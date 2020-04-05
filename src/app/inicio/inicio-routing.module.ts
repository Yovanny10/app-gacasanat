import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CamaraComponent } from './camara/camara.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "camara", component: CamaraComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class InicioRoutingModule { }
