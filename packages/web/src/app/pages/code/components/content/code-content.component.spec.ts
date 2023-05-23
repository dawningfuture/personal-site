import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { CodePageModule } from 'src/app/pages/code/code-page.module';
import { CodeContentComponent } from 'src/app/pages/code/components/content/code-content.component';

describe('CodeContentComponent', () => {
  let component: CodeContentComponent;
  let fixture: ComponentFixture<CodeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, CodePageModule],
      declarations: [CodeContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
