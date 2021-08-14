import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/pages/blog/models/blog-post.model';
import { selectPosts } from 'src/app/pages/blog/store/selectors/blog.selectors';

@Component({
  selector: 'ps-blog-post-preview-list',
  templateUrl: './blog-post-preview-list.component.html',
  styleUrls: ['./blog-post-preview-list.component.scss'],
})
export class BlogPostPreviewListComponent implements OnInit {
  readonly posts$: Observable<BlogPost[]>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectPosts);
  }

  ngOnInit(): void {}
}
