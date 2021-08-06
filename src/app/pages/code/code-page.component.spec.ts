import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { codePageImports } from 'src/app/pages/code/code-page.module';
import { CodeHeroComponent } from 'src/app/pages/code/hero/code-hero.component';
import { CodePageComponent } from './code-page.component';

describe('CodePageComponent', () => {
  let component: CodePageComponent;
  let fixture: ComponentFixture<CodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...codePageImports],
      declarations: [CodePageComponent, CodeHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
