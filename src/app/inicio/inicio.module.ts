import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InicioRoutingModule } from './inicio-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CamaraComponent } from './camara/camara.component';


@NgModule({
  declarations: [InicioComponent, CamaraComponent],
  imports: [
    InicioRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class InicioModule { }
