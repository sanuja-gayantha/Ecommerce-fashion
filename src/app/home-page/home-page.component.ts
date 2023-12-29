import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { BenifitItemsComponent } from '../benifit-items/benifit-items.component';
import { NewArrivalsComponent } from '../new-arrivals/new-arrivals.component';
import { DealOfTheWeekComponent } from '../deal-of-the-week/deal-of-the-week.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent,
    BenifitItemsComponent,
    NewArrivalsComponent,
    DealOfTheWeekComponent
    
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
