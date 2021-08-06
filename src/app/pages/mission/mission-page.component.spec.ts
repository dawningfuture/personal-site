import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { MissionHeroComponent } from 'src/app/pages/mission/hero/mission-hero.component';
import { missionPageImports } from 'src/app/pages/mission/mission-page.module';
import { MissionPageComponent } from './mission-page.component';

describe('MissionPageComponent', () => {
  let component: MissionPageComponent;
  let fixture: ComponentFixture<MissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...missionPageImports],
      declarations: [MissionPageComponent, MissionHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
