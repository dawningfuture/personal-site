import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeroModule } from 'src/app/hero/hero.module';
import { ConnectPageRoutingModule } from 'src/app/page/pages/connect/connect-page-routing.module';
import { ConnectPageComponent } from 'src/app/page/pages/connect/connect-page.component';
import { ConnectContentComponent } from 'src/app/page/pages/connect/content/connect-content.component';
import { ConnectFormComponent } from 'src/app/page/pages/connect/form/connect-form.component';
import { ConnectHeroComponent } from 'src/app/page/pages/connect/hero/connect-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ConnectPageComponent,
    ConnectHeroComponent,
    ConnectContentComponent,
    ConnectFormComponent,
  ],
  imports: [
    CommonModule,
    ConnectPageRoutingModule,
    FlexLayoutModule,
    HeroModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    SharedModule,
  ],
})
export class ConnectPageModule {}
