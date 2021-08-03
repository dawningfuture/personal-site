import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SidenavModule } from './sidenav/sidenav.module';

export const layoutImports = [SidenavModule];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, ...layoutImports],
  exports: [LayoutComponent],
})
export class LayoutModule {}
