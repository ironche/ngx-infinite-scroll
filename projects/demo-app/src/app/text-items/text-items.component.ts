import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'infs-text-items',
  templateUrl: './text-items.component.html',
  styleUrls: ['./text-items.component.scss'],
})
export class TextItemsComponent {
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
      this.data.push(`Item ${this.dataCounter++}`);
    }
  }
}
