import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from 'src/app/pages/blog/blog-page.component';
import { BlogPostsGuard } from 'src/app/pages/blog/services/blog-posts.guard';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
    canActivate: [BlogPostsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [BlogPostsGuard],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
