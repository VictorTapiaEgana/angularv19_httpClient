import { Component, input } from '@angular/core';

@Component({
  selector: 'boton-primario',
  imports: [],
  templateUrl: './boton-primario.component.html',
  styleUrl: './boton-primario.component.css',
})
export class BotonPrimarioComponent {

  label=input.required()
}
