import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Grocery } from '../../shared/types';

@Component({
  selector: 'app-grocery-list-item',
  standalone: true,
  imports: [],
  templateUrl: './grocery-list-item.component.html',
  styleUrl: './grocery-list-item.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GroceryListItemComponent {
  //👇 inputs given by the parent component (GroceryListComponent)
  @Input({ required: true }) grocery: Grocery = {
    name: '',
    quantity: 0,
    isBought: false,
  };

  //👇 events that allow the parent component to listen for events emitted by the child
  @Output() buy = new EventEmitter<string>();
  @Output() putBack = new EventEmitter<string>();

  isModalOpen = false;

  //👇 the component's methods (things it can do)
  buyGrocery() {
    this.buy.emit(this.grocery.name);
    this.isModalOpen = false;
  }

  putBackGrocery() {
    this.putBack.emit(this.grocery.name);
  }
}
