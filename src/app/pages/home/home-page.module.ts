import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { HomePageRoutingModule } from 'src/app/pages/home/home-page-routing.module';
import { HomeCtaButtonComponent } from './cta-button/home-cta-button.component';
import { HomeHeroComponent } from './hero/home-hero.component';
import { HomePageComponent } from './home-page.component';

export const homePageImports = [FlexLayoutModule, MatButtonModule];

@NgModule({
  declarations: [HomePageComponent, HomeHeroComponent, HomeCtaButtonComponent],
  imports: [CommonModule, HomePageRoutingModule, ...homePageImports],
})
export class HomePageModule {}
