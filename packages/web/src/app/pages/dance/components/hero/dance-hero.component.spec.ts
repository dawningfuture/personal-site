import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { DanceHeroComponent } from 'src/app/pages/dance/components/hero/dance-hero.component';
import { DancePageModule } from 'src/app/pages/dance/dance-page.module';

describe('DanceHeroComponent', () => {
  let component: DanceHeroComponent;
  let fixture: ComponentFixture<DanceHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, DancePageModule],
      declarations: [DanceHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
