import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroModule } from 'src/app/hero/hero.module';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';
import { CodeHeroComponent } from 'src/app/pages/code/hero/code-hero.component';

@NgModule({
  declarations: [CodePageComponent, CodeHeroComponent],
  imports: [CommonModule, CodePageRoutingModule, FlexLayoutModule, HeroModule],
})
export class CodePageModule {}
