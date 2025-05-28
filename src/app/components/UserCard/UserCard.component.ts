import { Component, input, signal } from '@angular/core';
import { RandomUserType } from '../../interface/RandonUserInterface';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './UserCard.component.html',
  styleUrl: './UserCard.component.css',
})

export class UserCardComponent {

  usuarios = input.required<RandomUserType[]>()

  generaraRandom(){
    return (Math.floor(Math.random() * 2 ) + 1 )
  }

  cargarClase(){

    const number = this.generaraRandom();
    // const estilo =''

    // if (number === 1 ) return "absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"
    // if (number === 2 ) return "absolute right-0 m-3 h-3 w-3 rounded-full bg-red-500   ring-2 ring-red-300   ring-offset-2"

    return number === 1
           ? "absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"
           : "absolute right-0 m-3 h-3 w-3 rounded-full bg-red-500   ring-2 ring-red-300   ring-offset-2"



    // return 0

  }

}

