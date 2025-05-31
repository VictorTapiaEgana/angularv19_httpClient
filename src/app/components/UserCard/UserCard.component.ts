import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomUserType } from '../../interface/RandonUserInterface';
import { SkeletonCardsComponent } from "../../UI/skeletonCards/skeletonCards.component";
import { VistaDeTablaComponent } from "../../UI/vistaDeTabla/vistaDeTabla.component";
import { SkeletonTablaComponent } from "../../UI/skeleton-tabla/skeleton-tabla.component";

@Component({
  selector: 'app-user-card',
  imports: [CommonModule, SkeletonCardsComponent, VistaDeTablaComponent, SkeletonTablaComponent],
  templateUrl: './UserCard.component.html',
  styleUrl: './UserCard.component.css',
})

export class UserCardComponent {

  usuarios = input.required<RandomUserType[]>()
  TipoDeVista= input.required<string>()
  CargandoDatos=input.required<boolean>()

}
