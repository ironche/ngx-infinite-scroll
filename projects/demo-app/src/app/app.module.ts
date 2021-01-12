import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { InfiniteScrollModule } from './infinite-scroll/infinite-scroll.module';
import { VirtualScrollModule } from './virtual-scroll/virtual-scroll.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, InfiniteScrollModule, VirtualScrollModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/ng-scroll' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
