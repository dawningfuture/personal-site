import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavBlogLinkComponent } from './sidenav-blog-link.component';

describe('SidenavBlogLinkComponent', () => {
  let component: SidenavBlogLinkComponent;
  let fixture: ComponentFixture<SidenavBlogLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavBlogLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavBlogLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
