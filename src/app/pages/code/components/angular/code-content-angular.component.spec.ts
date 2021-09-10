import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeContentAngularComponent } from './code-content-angular.component';

describe('CodeContentAngularComponent', () => {
  let component: CodeContentAngularComponent;
  let fixture: ComponentFixture<CodeContentAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodeContentAngularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeContentAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
