import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeHeroComponent } from './code-hero.component';

describe('CodeHeroComponent', () => {
  let component: CodeHeroComponent;
  let fixture: ComponentFixture<CodeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
