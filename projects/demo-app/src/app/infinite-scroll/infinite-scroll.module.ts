import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxInfiniteScrollModule } from '@ngx-infinite-scroll/ngx-infinite-scroll.module';
import { TextItemsComponent } from './text-items/text-items.component';
import { CustomItemsComponent } from './custom-items/custom-items.component';

@NgModule({
  declarations: [TextItemsComponent, CustomItemsComponent],
  imports: [SharedModule, NgxInfiniteScrollModule],
  exports: [TextItemsComponent, CustomItemsComponent],
})
export class InfiniteScrollModule {}
