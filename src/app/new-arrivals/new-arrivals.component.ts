import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardItemsService } from '../card-items.service';
import { CardItems } from '../card-items';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit {

  allArrivalsList!: Array<CardItems>;
  newArrivalsList!: Array<CardItems>;

  constructor(private cardItemsService: CardItemsService) { }

  ngOnInit(): void {
    this.allArrivalsList = this.cardItemsService.getCardItems();
    // this.allArrivalsList = this.cardItemsService.getCardItems().filter(i => i.newArrival === true);

    // add first 8 items to the list when app initialize
    this.newArrivalsList = this.allArrivalsList.slice(0, 8);
  }

  // filter items by category > women, men, acc.., etc
  firstArrivalsByCategory(category: string | null): void {
    switch (category) {
      case 'women':
        this.newArrivalsList = this.allArrivalsList.filter(i => i.category === 'women').slice(0, 8);
        break;
      case 'men':
        this.newArrivalsList = this.allArrivalsList.filter(i => i.category === 'men').slice(0, 8);
        break;
      case 'accessories':
        this.newArrivalsList = this.allArrivalsList.filter(i => i.category === 'accessories').slice(0, 8);
        break;
      default:
        this.newArrivalsList = this.allArrivalsList.slice(0, 8);
    }
  }




}
