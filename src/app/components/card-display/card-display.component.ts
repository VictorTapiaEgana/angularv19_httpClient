import { Component, input, OnInit, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-card-display',
  imports: [],
  templateUrl: './card-display.component.html',
  styleUrl: './card-display.component.css',
})
export class CardDisplayComponent implements OnInit{

  TipoDeVista = input.required<WritableSignal<string>>()


  ngOnInit(){
    console.log("Vista inicil: ", this.TipoDeVista()())
  }

 }
