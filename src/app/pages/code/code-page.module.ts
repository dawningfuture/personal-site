import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from './code-page.component';

@NgModule({
  declarations: [CodePageComponent],
  imports: [CommonModule, CodePageRoutingModule],
})
export class CodePageModule {}
