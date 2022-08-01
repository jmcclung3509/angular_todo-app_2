import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  editable = false;
  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(text: any) {
    if (!text) return;
    this.editable = false;
    this.item.text = text;
  }

}
