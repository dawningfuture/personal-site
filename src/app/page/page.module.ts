import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageContentContainerComponent } from 'src/app/page/content-container/page-content-container.component';

@NgModule({
  declarations: [PageContentContainerComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [PageContentContainerComponent],
})
export class PageModule {}
