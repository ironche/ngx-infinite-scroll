import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const materialModules = [MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatCardModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [CommonModule, ...materialModules],
})
export class SharedModule {}
