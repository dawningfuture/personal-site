import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DanceContentComponent } from './dance-content.component';

describe('DanceContentComponent', () => {
  let component: DanceContentComponent;
  let fixture: ComponentFixture<DanceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanceContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
