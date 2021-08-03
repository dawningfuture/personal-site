import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectHeroComponent } from 'src/app/pages/connect/hero/connect-hero.component';
import { ConnectPageComponent } from './connect-page.component';

describe('ConnectPageComponent', () => {
  let component: ConnectPageComponent;
  let fixture: ComponentFixture<ConnectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectPageComponent, ConnectHeroComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
