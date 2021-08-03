import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { HomePageRoutingModule } from 'src/app/pages/home/home-page-routing.module';
import { HomePageComponent } from './home-page.component';

export const homePageImports = [FlexLayoutModule, MatButtonModule];

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, ...homePageImports],
})
export class HomePageModule {}
