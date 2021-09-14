import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidenavButtonComponent } from 'src/app/sidenav/components/button/sidenav-button.component';
import { SidenavDrawerComponent } from 'src/app/sidenav/components/drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from 'src/app/sidenav/components/link/sidenav-link.component';
import { SidenavVersionComponent } from 'src/app/sidenav/components/version/sidenav-version.component';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { SidenavStoreModule } from 'src/app/sidenav/store/sidenav-store.module';

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
    SidenavStoreModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatRippleModule,
    FlexLayoutModule,
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
