import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { dancePageImports } from 'src/app/pages/dance/dance-page.module';
import { DanceHeroComponent } from 'src/app/pages/dance/hero/dance-hero.component';
import { DanceVideoComponent } from 'src/app/pages/dance/video/dance-video.component';
import { DancePageComponent } from './dance-page.component';

describe('DancePageComponent', () => {
  let component: DancePageComponent;
  let fixture: ComponentFixture<DancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...dancePageImports],
      declarations: [
        DancePageComponent,
        DanceHeroComponent,
        DanceVideoComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
