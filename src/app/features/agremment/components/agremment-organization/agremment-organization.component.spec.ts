import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgremmentOrganizationComponent } from './agremment-organization.component';

describe('AgremmentOrganizationComponent', () => {
  let component: AgremmentOrganizationComponent;
  let fixture: ComponentFixture<AgremmentOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgremmentOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgremmentOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
