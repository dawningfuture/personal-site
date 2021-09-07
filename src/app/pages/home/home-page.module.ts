import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { HeroModule } from 'src/app/hero/hero.module';
import { HomeCtaButtonComponent } from 'src/app/pages/home/cta-button/home-cta-button.component';
import { HomeHeroComponent } from 'src/app/pages/home/hero/home-hero.component';
import { HomePageRoutingModule } from 'src/app/pages/home/home-page-routing.module';
import { HomePageComponent } from 'src/app/pages/home/home-page.component';
import { HomePageStoreModule } from 'src/app/pages/home/store/home-page-store.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, HomeHeroComponent, HomeCtaButtonComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HomePageStoreModule,
    FlexLayoutModule,
    MatButtonModule,
    MatRippleModule,
    HeroModule,
    SharedModule,
  ],
})
export class HomePageModule {}
