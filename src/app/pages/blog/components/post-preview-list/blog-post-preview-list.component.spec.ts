import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { BlogPageModule } from 'src/app/pages/blog/blog-page.module';
import { BlogPostPreviewListComponent } from './blog-post-preview-list.component';

describe('BlogPostPreviewListComponent', () => {
  let component: BlogPostPreviewListComponent;
  let fixture: ComponentFixture<BlogPostPreviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, BlogPageModule],
      declarations: [BlogPostPreviewListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
