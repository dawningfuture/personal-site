import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { CodePageModule } from 'src/app/pages/code/code-page.module';
import { CodePersonalSiteComponent } from './code-personal-site.component';

describe('CodePersonalSiteComponent', () => {
  let component: CodePersonalSiteComponent;
  let fixture: ComponentFixture<CodePersonalSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, CodePageModule],
      declarations: [CodePersonalSiteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePersonalSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
