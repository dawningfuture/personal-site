import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from './code-page.component';
import { CodeHeroComponent } from './hero/code-hero.component';

/**
 * NOTE (July 30, 2021): These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const codePageImports = [FlexLayoutModule];

@NgModule({
  declarations: [CodePageComponent, CodeHeroComponent],
  imports: [CommonModule, CodePageRoutingModule, ...codePageImports],
})
export class CodePageModule {}
