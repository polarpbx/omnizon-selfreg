import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAccountComponent } from './tenant-account.component';

describe('TenantAccountComponent', () => {
  let component: TenantAccountComponent;
  let fixture: ComponentFixture<TenantAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
