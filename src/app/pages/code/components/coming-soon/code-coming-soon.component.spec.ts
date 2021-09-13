import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeComingSoonComponent } from './code-coming-soon.component';

describe('CodeComingSoonComponent', () => {
  let component: CodeComingSoonComponent;
  let fixture: ComponentFixture<CodeComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
