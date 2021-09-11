import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ConnectContentComponent } from 'src/app/pages/connect/components/content/connect-content.component';
import { ConnectFormComponent } from 'src/app/pages/connect/components/form/connect-form.component';
import { ConnectHeroComponent } from 'src/app/pages/connect/components/hero/connect-hero.component';
import { ConnectPageRoutingModule } from 'src/app/pages/connect/connect-page-routing.module';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';
import { ConnectPageService } from 'src/app/pages/connect/services/connect-page.service';
import { ConnectPageStoreModule } from 'src/app/pages/connect/store/connect-page-store.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ConnectPageComponent,
    ConnectHeroComponent,
    ConnectContentComponent,
    ConnectFormComponent,
  ],
  providers: [ConnectPageService],
  imports: [
    CommonModule,
    ConnectPageRoutingModule,
    ConnectPageStoreModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
})
export class ConnectPageModule {}
