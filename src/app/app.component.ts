import { Component, inject } from '@angular/core';
import { UserCardComponent } from './components/UserCard/UserCard.component';
import { RandonUserServiceService } from './service/randon-user-service.service';

@Component({
  selector: 'app-root',
   imports: [UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  RandonUserService = inject(RandonUserServiceService)

}
