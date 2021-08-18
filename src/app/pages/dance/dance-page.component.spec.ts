import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { DancePageComponent } from 'src/app/pages/dance/dance-page.component';
import { DancePageModule } from 'src/app/pages/dance/dance-page.module';

describe('DancePageComponent', () => {
  let component: DancePageComponent;
  let fixture: ComponentFixture<DancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, DancePageModule],
      declarations: [DancePageComponent],
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
