import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageContentContainerComponent } from 'src/app/page/content-container/page-content-container.component';
import { PagePanelComponent } from 'src/app/page/panel/page-panel.component';
import { PageCaptchaComponent } from './captcha/page-captcha.component';

@NgModule({
  declarations: [
    PageContentContainerComponent,
    PagePanelComponent,
    PageCaptchaComponent,
  ],
  imports: [CommonModule, FlexLayoutModule],
  exports: [
    PageContentContainerComponent,
    PagePanelComponent,
    PageCaptchaComponent,
  ],
})
export class PageModule {}
