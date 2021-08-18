import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidenavButtonComponent } from 'src/app/sidenav/button/sidenav-button.component';
import { SidenavDrawerComponent } from 'src/app/sidenav/drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from 'src/app/sidenav/link/sidenav-link.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { SidenavVersionComponent } from 'src/app/sidenav/version/sidenav-version.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavDrawerComponent,
    SidenavButtonComponent,
    SidenavLinkComponent,
    SidenavVersionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    SharedModule,
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
