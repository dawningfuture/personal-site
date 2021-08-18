import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { CodePageModule } from 'src/app/page/pages/code/code-page.module';
import { CodeHeroComponent } from 'src/app/page/pages/code/hero/code-hero.component';

describe('CodeHeroComponent', () => {
  let component: CodeHeroComponent;
  let fixture: ComponentFixture<CodeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, CodePageModule],
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
