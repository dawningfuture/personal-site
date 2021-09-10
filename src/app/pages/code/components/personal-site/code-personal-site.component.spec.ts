import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodePersonalSiteComponent } from './code-personal-site.component';

describe('CodePersonalSiteComponent', () => {
  let component: CodePersonalSiteComponent;
  let fixture: ComponentFixture<CodePersonalSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
