import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { BlogPageModule } from 'src/app/pages/blog/blog-page.module';
import { BlogPageComponent } from './blog-page.component';

describe('BlogPageComponent', () => {
  let component: BlogPageComponent;
  let fixture: ComponentFixture<BlogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, BlogPageModule],
      declarations: [BlogPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
