import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomUserType } from '../../interface/RandonUserInterface';
import { SkeletonComponent } from "../../UI/skeleton/skeleton.component";

@Component({
  selector: 'app-user-card',
  imports: [SkeletonComponent,CommonModule],
  templateUrl: './UserCard.component.html',
  styleUrl: './UserCard.component.css',
})

export class UserCardComponent {

  usuarios = input.required<RandomUserType[]>()

  CargandoDatos=input.required()

}
