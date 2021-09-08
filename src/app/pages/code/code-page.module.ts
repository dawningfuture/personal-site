import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { HeroModule } from 'src/app/hero/hero.module';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';
import { CodeContentComponent } from 'src/app/pages/code/components/content/code-content.component';
import { CodeHeroComponent } from 'src/app/pages/code/components/hero/code-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CodePageComponent, CodeHeroComponent, CodeContentComponent],
  imports: [
    CommonModule,
    CodePageRoutingModule,
    FlexLayoutModule,
    HeroModule,
    SharedModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class CodePageModule {}
