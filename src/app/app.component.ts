import { Component, inject, signal } from '@angular/core';
import { UserCardComponent } from './components/UserCard/UserCard.component';
import { RandonUserServiceService } from './service/randon-user-service.service';
import { PaginacionComponent } from './components/Paginacion/Paginacion.component';
import { CardDisplayComponent } from "./components/card-display/card-display.component";

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, PaginacionComponent, CardDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  RandonUserService = inject(RandonUserServiceService)

  TipoDeVista = signal<string>('listado')



}
