import { Component } from '@angular/core';
import { Item } from "./item"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_todo_app_2';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { text: 'Wash car', done: false },
    { text: 'Buy groceries', done: false },
    { text: 'Walk dog', done: false }
  ]

  get items() {
    if (this.filter === 'all') {
      return this.allItems;

    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done)
  }

  addItem(text: string) {
    this.allItems.unshift({
      text,
      done: false
    })
  }
  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}
