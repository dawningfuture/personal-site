import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { HeroModule } from 'src/app/hero/hero.module';
import { HomeCtaButtonComponent } from 'src/app/page/pages/home/cta-button/home-cta-button.component';
import { HomeHeroComponent } from 'src/app/page/pages/home/hero/home-hero.component';
import { HomePageRoutingModule } from 'src/app/page/pages/home/home-page-routing.module';
import { HomePageComponent } from 'src/app/page/pages/home/home-page.component';

@NgModule({
  declarations: [HomePageComponent, HomeHeroComponent, HomeCtaButtonComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    HeroModule,
  ],
})
export class HomePageModule {}
