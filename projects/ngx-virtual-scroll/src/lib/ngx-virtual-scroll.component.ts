import { AfterViewInit, Component, ContentChild, ElementRef, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'virtual-scroll',
  templateUrl: './ngx-virtual-scroll.component.html',
  styleUrls: ['./ngx-virtual-scroll.component.scss'],
})
export class NgxVirtualScrollComponent implements AfterViewInit {
  @ViewChild('scrollable') scrollable: ElementRef;
  @ContentChild('virtualScrollItem') itemTemplate: TemplateRef<HTMLElement>;

  @Input() data = [];
  @Input() rowHeight: number;
  renderedData = [];
  scrollableOffset = 0;

  get totalScrollableHeight(): number {
    return this.data.length * this.rowHeight;
  }

  ngAfterViewInit(): void {
    this.showItems(0);
  }

  @HostListener('scroll') onScroll(): void {
    const scrollTop = this.scrollable.nativeElement.parentNode.scrollTop;
    this.showItems(scrollTop);
  }

  private showItems(scrollTop: number): void {
    const itemCount = this.data.length;
    const rowHeight = this.rowHeight;
    const viewportHeight = this.scrollable.nativeElement.parentNode.clientHeight;
    const firstDataIndex = Math.max(0, Math.floor(scrollTop / rowHeight));
    const visibleDataCount = Math.min(itemCount - firstDataIndex, Math.ceil(viewportHeight / rowHeight));

    this.scrollableOffset = firstDataIndex * rowHeight;
    this.setDataToRender(firstDataIndex, visibleDataCount);
  }

  private setDataToRender(fromIndex: number, count: number): void {
    this.renderedData.length = 0;
    for (let i = 0; i < count; i++) {
      this.renderedData.push(this.data[fromIndex + i]);
    }
  }
}
