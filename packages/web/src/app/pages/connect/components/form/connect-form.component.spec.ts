import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { ConnectFormComponent } from 'src/app/pages/connect/components/form/connect-form.component';
import { ConnectPageModule } from 'src/app/pages/connect/connect-page.module';

describe('ConnectFormComponent', () => {
  let component: ConnectFormComponent;
  let fixture: ComponentFixture<ConnectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ConnectPageModule],
      declarations: [ConnectFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
