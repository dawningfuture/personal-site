import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitializationIndicatorComponent } from './initialization-indicator.component';

describe('InitializationIndicatorComponent', () => {
  let component: InitializationIndicatorComponent;
  let fixture: ComponentFixture<InitializationIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
