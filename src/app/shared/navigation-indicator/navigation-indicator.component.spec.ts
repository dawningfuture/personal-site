import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { sharedImports } from 'src/app/shared/shared.module';
import { NavigationIndicatorComponent } from './navigation-indicator.component';

describe('NavigationIndicatorComponent', () => {
  let component: NavigationIndicatorComponent;
  let fixture: ComponentFixture<NavigationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...sharedImports],
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
