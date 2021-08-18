import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { InitializationIndicatorComponent } from 'src/app/shared/initialization-indicator/initialization-indicator.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('InitializationIndicatorComponent', () => {
  let component: InitializationIndicatorComponent;
  let fixture: ComponentFixture<InitializationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, SharedModule],
      declarations: [InitializationIndicatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitializationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
