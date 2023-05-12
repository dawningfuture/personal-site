import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { SidenavLinkComponent } from 'src/app/sidenav/components/link/sidenav-link.component';
import { SidenavModule } from 'src/app/sidenav/sidenav.module';

describe('SidenavLinkComponent', () => {
  let component: SidenavLinkComponent;
  let fixture: ComponentFixture<SidenavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, SidenavModule],
      declarations: [SidenavLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
