import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeroModule } from 'src/app/hero/hero.module';
import { PageModule } from 'src/app/page/page.module';
import { ConnectPageRoutingModule } from 'src/app/pages/connect/connect-page-routing.module';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';
import { ConnectContentComponent } from 'src/app/pages/connect/content/connect-content.component';
import { ConnectFormComponent } from 'src/app/pages/connect/form/connect-form.component';
import { ConnectHeroComponent } from 'src/app/pages/connect/hero/connect-hero.component';
import { ConnectService } from 'src/app/pages/connect/services/connect.service';

@NgModule({
  declarations: [
    ConnectPageComponent,
    ConnectHeroComponent,
    ConnectContentComponent,
    ConnectFormComponent,
  ],
  providers: [ConnectService],
  imports: [
    CommonModule,
    ConnectPageRoutingModule,
    FlexLayoutModule,
    HeroModule,
    PageModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
})
export class ConnectPageModule {}
