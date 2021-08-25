import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageContentContainerComponent } from 'src/app/page/content-container/page-content-container.component';
import { PagePanelComponent } from 'src/app/page/panel/page-panel.component';

@NgModule({
  declarations: [PageContentContainerComponent, PagePanelComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [PageContentContainerComponent, PagePanelComponent],
})
export class PageModule {}
