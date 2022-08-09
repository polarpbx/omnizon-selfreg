import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgremmentConfirmComponent } from './agremment-confirm.component';

describe('AgremmentConfirmComponent', () => {
  let component: AgremmentConfirmComponent;
  let fixture: ComponentFixture<AgremmentConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgremmentConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgremmentConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
