import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomePageRoutingModule } from 'src/app/pages/home/home-page-routing.module';
import { HomePageComponent } from './home-page.component';

export const homePageImports = [FlexLayoutModule];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, ...homePageImports],
})
export class HomePageModule {}
