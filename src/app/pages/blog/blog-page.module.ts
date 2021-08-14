import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogPageRoutingModule } from 'src/app/pages/blog/blog-page-routing.module';
import { BlogPageComponent } from 'src/app/pages/blog/blog-page.component';
import { BlogPostPreviewListComponent } from 'src/app/pages/blog/components/post-preview-list/blog-post-preview-list.component';
import { BlogPostPreviewComponent } from 'src/app/pages/blog/components/post-preview/blog-post-preview.component';
import { BlogPostComponent } from 'src/app/pages/blog/components/post/blog-post.component';
import { BlogStoreModule } from 'src/app/pages/blog/store/blog-store.module';

/**
 * NOTE: These imports have been extracted into an exported
 * `const` Array so that they can be imported in tests
 */
export const blogPageImports = [
  CommonModule,
  BlogPageRoutingModule,
  BlogStoreModule,
];

@NgModule({
  declarations: [
    BlogPageComponent,
    BlogPostPreviewListComponent,
    BlogPostPreviewComponent,
    BlogPostComponent,
  ],
  imports: blogPageImports,
})
export class BlogPageModule {}
