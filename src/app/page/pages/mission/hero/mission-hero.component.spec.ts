import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { MissionHeroComponent } from 'src/app/page/pages/mission/hero/mission-hero.component';
import { MissionPageModule } from 'src/app/page/pages/mission/mission-page.module';

describe('MissionHeroComponent', () => {
  let component: MissionHeroComponent;
  let fixture: ComponentFixture<MissionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, MissionPageModule],
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
