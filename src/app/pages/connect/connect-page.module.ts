import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeroModule } from 'src/app/hero/hero.module';
import { ConnectPageRoutingModule } from 'src/app/pages/connect/connect-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectPageComponent } from './connect-page.component';
import { ConnectContentComponent } from './content/connect-content.component';
import { ConnectFormComponent } from './form/connect-form.component';
import { ConnectHeroComponent } from './hero/connect-hero.component';

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
