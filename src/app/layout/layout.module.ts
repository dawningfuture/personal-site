import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SidenavModule } from '../shared/sidenav/sidenav.module';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, LayoutHeaderComponent],
  imports: [CommonModule, RouterModule, SidenavModule, MatToolbarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
