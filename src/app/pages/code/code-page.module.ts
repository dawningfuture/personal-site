import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from './code-page.component';
import { CodeHeroComponent } from './hero/code-hero.component';

export const codePageImports = [FlexLayoutModule];

@NgModule({
  declarations: [CodePageComponent, CodeHeroComponent],
  imports: [CommonModule, CodePageRoutingModule, ...codePageImports],
})
export class CodePageModule {}
