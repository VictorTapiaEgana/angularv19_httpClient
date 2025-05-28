import { Component, inject } from '@angular/core';
import { UserCardComponent } from './components/UserCard/UserCard.component';
import { RandonUserServiceService } from './service/randon-user-service.service';
import { PaginacionComponent } from './components/Paginacion/Paginacion.component';

@Component({
  selector: 'app-root',
   imports: [UserCardComponent, PaginacionComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  RandonUserService = inject(RandonUserServiceService)



}
