import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { MissionPageModule } from 'src/app/pages/mission/mission-page.module';
import { MissionContentComponent } from './mission-content.component';

describe('MissionContentComponent', () => {
  let component: MissionContentComponent;
  let fixture: ComponentFixture<MissionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, MissionPageModule],
      declarations: [MissionContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
