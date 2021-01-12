import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NgxVirtualScrollModule } from '@ngx-virtual-scroll/ngx-virtual-scroll.module';
import { TextItemsComponent } from './text-items/text-items.component';
import { CustomItemsComponent } from './custom-items/custom-items.component';

@NgModule({
  declarations: [TextItemsComponent, CustomItemsComponent],
  imports: [SharedModule, NgxVirtualScrollModule],
  exports: [TextItemsComponent, CustomItemsComponent],
})
export class VirtualScrollModule {}
