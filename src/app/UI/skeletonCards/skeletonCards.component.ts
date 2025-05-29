import { Component } from '@angular/core';
import { SkeletonComponent } from "../skeleton/skeleton.component";

@Component({
  selector: 'app-skeleton-cards',
  imports: [SkeletonComponent],
  templateUrl: './skeletonCards.component.html',
  styleUrl: './skeletonCards.component.css',
})
export class SkeletonCardsComponent { }
