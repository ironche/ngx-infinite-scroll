import { Component } from '@angular/core';

@Component({
  selector: 'vscr-custom-items',
  templateUrl: './custom-items.component.html',
  styleUrls: ['./custom-items.component.scss'],
})
export class CustomItemsComponent {
  data = [];
  dataCounter = 10000;

  constructor() {
    for (let i = 0; i < this.dataCounter; i++) {
      this.data.push({
        name: `Item ${i}`,
        description: 'Lorem ipsum dolor sit amet',
        image: 'assignment_ind',
      });
    }
  }
}
