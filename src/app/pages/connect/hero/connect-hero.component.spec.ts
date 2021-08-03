import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectHeroComponent } from './connect-hero.component';

describe('ConnectHeroComponent', () => {
  let component: ConnectHeroComponent;
  let fixture: ComponentFixture<ConnectHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
