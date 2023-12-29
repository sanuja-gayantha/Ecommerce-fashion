export interface CardItems {
    itemId: number;
    itemName: string;
    actualPrice: number;
    discountPrice: number;
    imageUrl: string;
    onSale:boolean;
    newArrival?:boolean;
    category:string;
}
