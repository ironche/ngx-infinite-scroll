import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.scss'],
})
export class NgxInfiniteScrollComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('scrollable') scrollable: ElementRef;
  @ViewChildren('scrollItem') items: QueryList<HTMLLIElement>;
  @ViewChild('sentinelItem') sentinel: ElementRef<HTMLLIElement>;
  @ContentChild('infiniteScrollItem') itemTemplate: TemplateRef<HTMLElement>;
  @ContentChild('infiniteScrollLoading') loadingTemplate: TemplateRef<HTMLElement>;

  @Input() data = [];
  @Input() bottomBuffer = 0;
  @Input() showLoading = false;
  @Output() dataRequest = new EventEmitter();
  private intersectionObserver: IntersectionObserver;

  ngOnInit(): void {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting || entry.intersectionRatio > 0)) {
        this.dataRequest.emit();
      }
    });
  }

  ngOnDestroy(): void {
    this.intersectionObserver.disconnect();
  }

  ngAfterViewInit(): void {
    this.intersectionObserver.observe(this.sentinel.nativeElement);
    this.items.changes.subscribe(() => this.updateSentinelPosition());
  }

  private updateSentinelPosition(): void {
    const sentinelPosition = this.data.length - this.bottomBuffer;

    if (sentinelPosition > 0) {
      const scrollable: HTMLUListElement = this.scrollable.nativeElement;
      scrollable.insertBefore(this.sentinel.nativeElement, scrollable.children[sentinelPosition + 1]);
    }
  }
}
