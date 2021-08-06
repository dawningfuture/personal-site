import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { missionPageImports } from 'src/app/pages/mission/mission-page.module';
import { MissionHeroComponent } from './mission-hero.component';

describe('MissionHeroComponent', () => {
  let component: MissionHeroComponent;
  let fixture: ComponentFixture<MissionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...missionPageImports],
      declarations: [MissionHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
