import { Component, input } from '@angular/core';
import { RandomUserType } from '../../interface/RandonUserInterface';
import { SkeletonComponent } from "../../UI/skeleton/skeleton.component";

@Component({
  selector: 'app-user-card',
  imports: [SkeletonComponent],
  templateUrl: './UserCard.component.html',
  styleUrl: './UserCard.component.css',
})

export class UserCardComponent {

  usuarios = input.required<RandomUserType[]>()


}
