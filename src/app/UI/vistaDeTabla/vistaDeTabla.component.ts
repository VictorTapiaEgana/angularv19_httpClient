import { Component, input } from '@angular/core';
import { RandomUserType } from '../../interface/RandonUserInterface';

@Component({
  selector: 'app-vista-de-tabla',
  imports: [],
  templateUrl: './vistaDeTabla.component.html',
  styleUrl: './vistaDeTabla.component.css',
})

export class VistaDeTablaComponent {

  usuarios= input.required<RandomUserType[]>()

}
