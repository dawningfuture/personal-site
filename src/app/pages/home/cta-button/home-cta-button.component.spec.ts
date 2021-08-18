import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { HomeCtaButtonComponent } from 'src/app/pages/home/cta-button/home-cta-button.component';
import { HomePageModule } from 'src/app/pages/home/home-page.module';

describe('HomeCtaButtonComponent', () => {
  let component: HomeCtaButtonComponent;
  let fixture: ComponentFixture<HomeCtaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, HomePageModule],
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
