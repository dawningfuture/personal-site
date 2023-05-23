import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { CodePageModule } from 'src/app/pages/code/code-page.module';
import { CodeComingSoonComponent } from './code-coming-soon.component';

describe('CodeComingSoonComponent', () => {
  let component: CodeComingSoonComponent;
  let fixture: ComponentFixture<CodeComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, CodePageModule],
      declarations: [CodeComingSoonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
