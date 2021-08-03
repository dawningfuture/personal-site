import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { homePageImports } from 'src/app/pages/home/home-page.module';
import { HomeCtaButtonComponent } from './home-cta-button.component';

describe('HomeCtaButtonComponent', () => {
  let component: HomeCtaButtonComponent;
  let fixture: ComponentFixture<HomeCtaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...homePageImports],
      declarations: [HomeCtaButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCtaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
