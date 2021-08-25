import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageContentContainerComponent } from 'src/app/page/content-container/page-content-container.component';

describe('PageContentContainerComponent', () => {
  let component: PageContentContainerComponent;
  let fixture: ComponentFixture<PageContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageContentContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
