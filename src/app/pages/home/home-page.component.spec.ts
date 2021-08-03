import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HomeCtaButtonComponent } from 'src/app/pages/home/cta-button/home-cta-button.component';
import { HomeHeroComponent } from 'src/app/pages/home/hero/home-hero.component';
import { homePageImports } from 'src/app/pages/home/home-page.module';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...homePageImports],
      declarations: [
        HomePageComponent,
        HomeHeroComponent,
        HomeCtaButtonComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
