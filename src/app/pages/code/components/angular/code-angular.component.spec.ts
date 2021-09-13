import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { CodePageModule } from 'src/app/pages/code/code-page.module';
import { CodeAngularComponent } from './code-angular.component';

describe('CodeAngularComponent', () => {
  let component: CodeAngularComponent;
  let fixture: ComponentFixture<CodeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, CodePageModule],
      declarations: [CodeAngularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
