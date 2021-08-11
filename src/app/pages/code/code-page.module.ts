import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroModule } from 'src/app/hero/hero.module';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from './code-page.component';
import { CodeHeroComponent } from './hero/code-hero.component';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const codePageImports = [FlexLayoutModule, HeroModule];

@NgModule({
  declarations: [CodePageComponent, CodeHeroComponent],
  imports: [CommonModule, CodePageRoutingModule, ...codePageImports],
})
export class CodePageModule {}
