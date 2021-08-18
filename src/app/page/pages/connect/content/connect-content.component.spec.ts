import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { ConnectPageModule } from 'src/app/page/pages/connect/connect-page.module';
import { ConnectContentComponent } from 'src/app/page/pages/connect/content/connect-content.component';

describe('ConnectContentComponent', () => {
  let component: ConnectContentComponent;
  let fixture: ComponentFixture<ConnectContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ConnectPageModule],
      declarations: [ConnectContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
