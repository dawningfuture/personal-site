import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { dancePageImports } from 'src/app/pages/dance/dance-page.module';
import { DanceVideoComponent } from './dance-video.component';

describe('DanceVideoComponent', () => {
  let component: DanceVideoComponent;
  let fixture: ComponentFixture<DanceVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...dancePageImports],
      declarations: [DanceVideoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
