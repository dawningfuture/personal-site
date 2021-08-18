import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { MissionPageComponent } from 'src/app/page/pages/mission/mission-page.component';
import { MissionPageModule } from 'src/app/page/pages/mission/mission-page.module';

describe('MissionPageComponent', () => {
  let component: MissionPageComponent;
  let fixture: ComponentFixture<MissionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, MissionPageModule],
      declarations: [MissionPageComponent],
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
