import { Component } from '@angular/core';
import { GroceryListItemComponent } from './grocery-list-item/grocery-list-item.component';
import { Grocery } from '../shared/types';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [GroceryListItemComponent],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss',
})
export class GroceryListComponent {
  //properties 👇
  groceriesToBuy: Grocery[] = [
    { name: 'Apples', quantity: 5, isBought: false },
    { name: 'Bananas', quantity: 6, isBought: false },
    { name: 'Oranges', quantity: 7, isBought: false },
  ];

  markAsBought(groceryName: string) {
    const groceryToBuy = this.groceriesToBuy.find(
      (grocery) => grocery.name === groceryName
    );
    if (groceryToBuy) {
      groceryToBuy.isBought = true;
    }
  }

  markAsNotBought(groceryName: string) {
    const groceryToBuy = this.groceriesToBuy.find(
      (grocery) => grocery.name === groceryName
    );
    if (groceryToBuy) {
      groceryToBuy.isBought = false;
    }
  }
}
