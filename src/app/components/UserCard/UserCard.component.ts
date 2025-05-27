import { Component, input } from '@angular/core';
import { RandomUserType } from '../../interface/RandonUserInterface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './UserCard.component.html',
  styleUrl: './UserCard.component.css',
})

export class UserCardComponent {
  usuarios = input.required<RandomUserType[]>()
}
