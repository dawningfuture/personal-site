import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancePageComponent } from './dance-page.component';

describe('DancePageComponent', () => {
  let component: DancePageComponent;
  let fixture: ComponentFixture<DancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DancePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
