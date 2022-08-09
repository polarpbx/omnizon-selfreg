import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantOrganizationComponent } from './tenant-organization.component';

describe('TenantOrganizationComponent', () => {
  let component: TenantOrganizationComponent;
  let fixture: ComponentFixture<TenantOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
