import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgremmentOrganizationSecondComponent } from './agremment-organization-second.component';

describe('AgremmentOrganizationSecondComponent', () => {
  let component: AgremmentOrganizationSecondComponent;
  let fixture: ComponentFixture<AgremmentOrganizationSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgremmentOrganizationSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgremmentOrganizationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
