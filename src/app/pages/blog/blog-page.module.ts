import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BlogPageRoutingModule } from 'src/app/pages/blog/blog-page-routing.module';
import { BlogPageComponent } from 'src/app/pages/blog/blog-page.component';
import { BlogPostPreviewListComponent } from 'src/app/pages/blog/components/post-preview-list/blog-post-preview-list.component';
import { BlogPostPreviewComponent } from 'src/app/pages/blog/components/post-preview/blog-post-preview.component';
import { BlogService } from 'src/app/pages/blog/services/blog.service';
import { BlogStoreModule } from 'src/app/pages/blog/store/blog-store.module';

@NgModule({
  declarations: [
    BlogPageComponent,
    BlogPostPreviewListComponent,
    BlogPostPreviewComponent,
  ],
  providers: [BlogService],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    BlogStoreModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
})
export class BlogPageModule {}
