import { Component, inject, Input, input, WritableSignal } from '@angular/core';
import { RandonUserServiceService } from '../../service/randon-user-service.service';

@Component({
  selector: 'boton-primario',
  imports: [],
  templateUrl: './boton-primario.component.html',
  styleUrl: './boton-primario.component.css',
})
export class BotonPrimarioComponent {

  RandomService =  inject(RandonUserServiceService)

  indiceSignal = input.required<WritableSignal<number>>();

  label=input.required()
  accion=input.required()

  paginacion(){

    if ((this.indiceSignal()() >= 1)){

        if (this.accion() === "adelante"){

          this.indiceSignal().update(current => current + 1)

        } else {

          if (this.indiceSignal()() > 1){
            this.indiceSignal().update(current => current - 1)
          }

        }

        if (this.indiceSignal()() > 1){
            this.RandomService.CargarUsersFromWeb(this.indiceSignal()())
        }

    }

  }

}
