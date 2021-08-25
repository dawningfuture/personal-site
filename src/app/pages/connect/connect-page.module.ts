import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeroModule } from 'src/app/hero/hero.module';
import { PageModule } from 'src/app/page/page.module';
import { ConnectContentComponent } from 'src/app/pages/connect/components/content/connect-content.component';
import { ConnectFormComponent } from 'src/app/pages/connect/components/form/connect-form.component';
import { ConnectHeroComponent } from 'src/app/pages/connect/components/hero/connect-hero.component';
import { ConnectPageRoutingModule } from 'src/app/pages/connect/connect-page-routing.module';
import { ConnectPageComponent } from 'src/app/pages/connect/connect-page.component';
import { ConnectPageService } from 'src/app/pages/connect/services/connect-page.service';
import { ConnectPageStoreModule } from 'src/app/pages/connect/store/connect-page-store.module';

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
    HeroModule,
    PageModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
  ],
})
export class ConnectPageModule {}
