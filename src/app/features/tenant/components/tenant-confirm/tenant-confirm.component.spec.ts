import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantConfirmComponent } from './tenant-confirm.component';

describe('TenantConfirmComponent', () => {
  let component: TenantConfirmComponent;
  let fixture: ComponentFixture<TenantConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantConfirmComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
