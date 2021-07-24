import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidenavButtonComponent } from './sidenav-button/sidenav-button.component';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
