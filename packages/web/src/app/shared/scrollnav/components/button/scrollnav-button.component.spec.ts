import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollnavButtonComponent } from './scrollnav-button.component';

describe('ScrollnavButtonComponent', () => {
  let component: ScrollnavButtonComponent;
  let fixture: ComponentFixture<ScrollnavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollnavButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollnavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
