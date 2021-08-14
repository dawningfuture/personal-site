import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { SidenavDrawerComponent } from 'src/app/sidenav/components/drawer/sidenav-drawer.component';
import { SidenavLinkComponent } from 'src/app/sidenav/components/link/sidenav-link.component';
import { sidenavImports } from 'src/app/sidenav/sidenav.module';

describe('SidenavDrawerComponent', () => {
  let component: SidenavDrawerComponent;
  let fixture: ComponentFixture<SidenavDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...sidenavImports],
      declarations: [SidenavDrawerComponent, SidenavLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
