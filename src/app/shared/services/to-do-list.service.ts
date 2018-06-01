import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  listUpdated = new Subject<Item[]>();

  private items: Item[] = [
    new Item('test item 1', new Date(), 'lorem ipsum text one'),
    new Item('test item 2', new Date(), 'lorem ipsum text two'),
    new Item('test item 3', new Date(), 'lorem ipsum text three')
  ];

  getItems() {
    return this.items.slice();
  }

  getItem(index: number) {
    return this.items.slice()[index];
  }

  addItem(item: Item) {
    this.items.push(item);
    this.listUpdated.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.listUpdated.next(this.items.slice());

  }

  constructor() { }
}
