import { Component } from '@angular/core';

@Component({
  selector: 'vscr-text-items',
  templateUrl: './text-items.component.html',
  styleUrls: ['./text-items.component.scss'],
})
export class TextItemsComponent {
  data = [];
  dataCounter = 10000;

  constructor() {
    for (let i = 0; i < this.dataCounter; i++) {
      this.data.push(`Item ${i}`);
    }
  }
}
