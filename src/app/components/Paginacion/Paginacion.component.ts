import { Component, signal } from '@angular/core';
import { BotonPrimarioComponent } from '../../UI/boton-primario/boton-primario.component';

@Component({
  selector: 'app-paginacion',
  imports: [BotonPrimarioComponent],
  templateUrl: './Paginacion.component.html',
  styleUrl: './Paginacion.component.css',
})

export class PaginacionComponent {
  IndiceSG = signal(1)
}
