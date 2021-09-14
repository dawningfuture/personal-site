import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CodePageRoutingModule } from 'src/app/pages/code/code-page-routing.module';
import { CodePageComponent } from 'src/app/pages/code/code-page.component';
import { CodeAngularComponent } from 'src/app/pages/code/components/angular/code-angular.component';
import { CodeAwsComponent } from 'src/app/pages/code/components/aws/code-aws.component';
import { CodeComingSoonComponent } from 'src/app/pages/code/components/coming-soon/code-coming-soon.component';
import { CodeContentComponent } from 'src/app/pages/code/components/content/code-content.component';
import { CodeHeroComponent } from 'src/app/pages/code/components/hero/code-hero.component';
import { CodePersonalSiteComponent } from 'src/app/pages/code/components/personal-site/code-personal-site.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CodePageComponent,
    CodeHeroComponent,
    CodeContentComponent,
    CodePersonalSiteComponent,
    CodeAngularComponent,
    CodeAwsComponent,
    CodeComingSoonComponent,
  ],
  imports: [
    CommonModule,
    CodePageRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class CodePageModule {}
