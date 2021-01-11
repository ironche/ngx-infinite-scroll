import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'infs-custom-items',
  templateUrl: './custom-items.component.html',
  styleUrls: ['./custom-items.component.scss'],
})
export class CustomItemsComponent {
  data = [];
  dataCounter = 0;
  isLoading = false;

  loadData(): void {
    if (!this.isLoading) {
      this.isLoading = true;

      timer(2000).subscribe(() => {
        this.fetchData(100);
        this.isLoading = false;
      });
    }
  }

  private fetchData(count: number): void {
    for (let i = 0; i < count; i++) {
      this.data.push({
        name: `Item ${this.dataCounter++}`,
        description: 'Lorem ipsum dolor sit amet',
        image: 'assignment_ind',
      });
    }
  }
}
