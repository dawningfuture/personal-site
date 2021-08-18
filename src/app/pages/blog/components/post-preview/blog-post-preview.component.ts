import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/pages/blog/models/blog-post.model';
import { selectPost } from 'src/app/pages/blog/store/selectors/blog.selectors';

@Component({
  selector: 'ps-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',
  styleUrls: ['./blog-post-preview.component.scss'],
})
export class BlogPostPreviewComponent implements OnInit {
  @Input() postId!: string;

  post$!: Observable<BlogPost | undefined>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post$ = this.store.select(selectPost(this.postId));
  }

  onClick(): void {
    this.router.navigate(['posts', this.postId], {
      relativeTo: this.route,
    });
  }
}
