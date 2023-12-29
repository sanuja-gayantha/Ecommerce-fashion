import { Injectable } from '@angular/core';
import { CardItems } from './card-items';

@Injectable({
  providedIn: 'root'
})
export class CardItemsService {
  // itemId: number;
  // itemName: string;
  // actualPrice: number;
  // discountPrice: number;
  // imageUrl: string;
  // onSale:boolean;
  // newArrival?:boolean,

  cardItemsList: CardItems[] = [
    {
      itemId: 1,
      itemName: 'Classic Trench Coat ',
      actualPrice: 75.00,
      discountPrice: 0,
      imageUrl: 'https://i.ibb.co/hfQX7wS/slide-1.webp',
      onSale: true,
      newArrival: true,
      category: 'women'
    },
    {
      itemId: 2,
      itemName: 'Femme T-Shirt In Stripe ',
      actualPrice: 25.85,
      discountPrice: 23.00,
      imageUrl: 'https://i.ibb.co/bFpbjb3/product-10-jpg.webp',
      onSale: false,
      newArrival: false,
      category: 'women'

    },

    {
      itemId: 3,
      itemName: 'Herschel supply',
      actualPrice: 35.31,
      discountPrice: 33.00,
      imageUrl: 'https://i.ibb.co/Xswg5QJ/product-11-jpg.webp',
      onSale: true,
      newArrival: false,
      category: 'men'

    }
    ,
    {
      itemId: 4,
      itemName: 'T-Shirt with Sleeve',
      actualPrice: 18.49,
      discountPrice: 17.50,
      imageUrl: 'https://i.ibb.co/9TJy82y/product-13-jpg.webp',
      onSale: false,
      newArrival: false,
      category: 'women'

    }
    ,
    {
      itemId: 5,
      itemName: 'Herschel supply',
      actualPrice: 63.15,
      discountPrice: 60.00,
      imageUrl: 'https://i.ibb.co/7KYH6WL/product-12-jpg.webp',
      onSale: true,
      newArrival: false,
      category: 'accessories'

    }
    ,
    {
      itemId: 6,
      itemName: 'Front Pocket Jumper',
      actualPrice: 34.75,
      discountPrice: 33.75,
      imageUrl: 'https://i.ibb.co/YWzksmx/product-05-jpg.webp',
      onSale: true,
      newArrival: false,
      category: 'women'

    },
    {
      itemId: 7,
      itemName: 'Converse All Star Hi Plimsolls ',
      actualPrice: 75.00,
      discountPrice: 69.00,
      imageUrl: 'https://i.ibb.co/2ZHTQqM/product-09-jpg.webp',
      onSale: false,
      newArrival: true,
      category: 'accessories'

    },
    {
      itemId: 8,
      itemName: 'Pieces Metallic Printed ',
      actualPrice: 22.00,
      discountPrice: 18.96,
      imageUrl: 'https://i.ibb.co/Dpf55Cx/product-08-jpg.webp',
      onSale: true,
      newArrival: true,
      category: 'women'

    },
    {
      itemId: 9,
      itemName: 'Esprit Ruffle Shirt',
      actualPrice: 19.50,
      discountPrice: 16.64,
      imageUrl: 'https://i.ibb.co/DKfhQxW/product-01-jpg.webp',
      onSale: true,
      newArrival: false,
      category: 'women'

    },
    {
      itemId: 10,
      itemName: 'Square Neck Back',
      actualPrice: 34.00,
      discountPrice: 29.64,
      imageUrl: 'https://i.ibb.co/9tgGT94/product-16-jpg.webp',
      onSale: false,
      newArrival: true,
      category: 'women'

    },
    {
      itemId: 11,
      itemName: 'Shirt in Stretch Cotton',
      actualPrice: 52.66,
      discountPrice: 47.00,
      imageUrl: 'https://i.ibb.co/8zFYhLF/product-07-jpg.webp',
      onSale: true,
      newArrival: true,
      category: 'women'

    },
    {
      itemId: 12,
      itemName: 'Herschel supply',
      actualPrice: 38.50,
      discountPrice: 35.31,
      imageUrl: 'https://i.ibb.co/ZxXjpQN/product-02-jpg.webp',
      onSale: true,
      newArrival: false,
      category: 'women'

    },
    {
      itemId: 13,
      itemName: 'Only Check Trouser',
      actualPrice: 29.50,
      discountPrice: 25.50,
      imageUrl: 'https://i.ibb.co/f0CNf0x/product-03-jpg.webp',
      onSale: false,
      newArrival: true,
      category: 'men'

    },
    {
      itemId: 14,
      itemName: 'Vintage Inspired Classic',
      actualPrice: 93.20,
      discountPrice: 75.00,
      imageUrl: 'https://i.ibb.co/NxM7yfw/product-06-jpg.webp',
      onSale: true,
      newArrival: true,
      category: 'accessories'

    },
    {
      itemId: 15,
      itemName: 'Mini Silver Mesh Watch',
      actualPrice: 86.85,
      discountPrice: 75.00,
      imageUrl: 'https://i.ibb.co/qYJPGPR/product-15-jpg.webp',
      onSale: true,
      newArrival: true,
      category: 'accessories'

    },
    {
      itemId: 16,
      itemName: 'Pretty Little Thing',
      actualPrice: 54.79,
      discountPrice: 50.00,
      imageUrl: 'https://i.ibb.co/FHQkHXm/product-14-jpg.webp',
      onSale: true,
      newArrival: true,
      category: 'women'

    }
  ];

  constructor() { }

  getCardItems(): CardItems[] {
    return this.cardItemsList;
  }

}
