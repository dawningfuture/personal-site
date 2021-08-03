import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionHeroComponent } from './mission-hero.component';

describe('MissionHeroComponent', () => {
  let component: MissionHeroComponent;
  let fixture: ComponentFixture<MissionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
