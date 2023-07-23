import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollnavComponent } from './scrollnav.component';

describe('ScrollnavComponent', () => {
  let component: ScrollnavComponent;
  let fixture: ComponentFixture<ScrollnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
