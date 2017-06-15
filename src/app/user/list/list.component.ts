import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items = [0, 1, 2, 3, 4, 5];

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(): void {
    this.items.push(this.items.length);
  }

}
