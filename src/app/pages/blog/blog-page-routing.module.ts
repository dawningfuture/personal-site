import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from 'src/app/pages/blog/blog-page.component';
import { BlogPostPreviewListComponent } from 'src/app/pages/blog/components/post-preview-list/blog-post-preview-list.component';
import { BlogPostComponent } from 'src/app/pages/blog/components/post/blog-post.component';
import { BlogPostGuard } from 'src/app/pages/blog/services/blog-post.guard';
import { BlogPostsGuard } from 'src/app/pages/blog/services/blog-posts.guard';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
    children: [
      {
        path: '',
        component: BlogPostPreviewListComponent,
        canActivate: [BlogPostsGuard],
      },
      {
        path: 'posts/:postId',
        component: BlogPostComponent,
        canActivate: [BlogPostGuard],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [BlogPostsGuard, BlogPostGuard],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
