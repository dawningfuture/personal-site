import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAwsComponent } from './code-aws.component';

describe('CodeAwsComponent', () => {
  let component: CodeAwsComponent;
  let fixture: ComponentFixture<CodeAwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeAwsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
