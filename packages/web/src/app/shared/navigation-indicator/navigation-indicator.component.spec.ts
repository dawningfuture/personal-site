import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { NavigationIndicatorComponent } from 'src/app/shared/navigation-indicator/navigation-indicator.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('NavigationIndicatorComponent', () => {
  let component: NavigationIndicatorComponent;
  let fixture: ComponentFixture<NavigationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, SharedModule],
      declarations: [NavigationIndicatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
