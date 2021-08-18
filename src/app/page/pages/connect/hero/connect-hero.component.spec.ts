import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { ConnectPageModule } from 'src/app/page/pages/connect/connect-page.module';
import { ConnectHeroComponent } from 'src/app/page/pages/connect/hero/connect-hero.component';

describe('ConnectHeroComponent', () => {
  let component: ConnectHeroComponent;
  let fixture: ComponentFixture<ConnectHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ConnectPageModule],
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
