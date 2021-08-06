import { ComponentFixture, TestBed } from '@angular/core/testing';
import { appImports } from 'src/app/app.module';
import { sharedImports } from 'src/app/shared/shared.module';
import { VersionComponent } from './version.component';

describe('VersionComponent', () => {
  let component: VersionComponent;
  let fixture: ComponentFixture<VersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...appImports, ...sharedImports],
      declarations: [VersionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
