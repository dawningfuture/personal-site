import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DanceVideoComponent } from './dance-video.component';

describe('DanceVideoComponent', () => {
  let component: DanceVideoComponent;
  let fixture: ComponentFixture<DanceVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanceVideoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
