import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { dancePageImports } from 'src/app/pages/dance/dance-page.module';
import { DanceVideoComponent } from 'src/app/pages/dance/video/dance-video.component';
import { DanceHeroComponent } from './dance-hero.component';

describe('DanceHeroComponent', () => {
  let component: DanceHeroComponent;
  let fixture: ComponentFixture<DanceHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...dancePageImports],
      declarations: [DanceHeroComponent, DanceVideoComponent],
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
