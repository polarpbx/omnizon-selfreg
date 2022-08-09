import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgremmentDocumentDirectionPointerComponent } from './agremment-document-direction-pointer.component';

describe('AgremmentDocumentDirectionPointerComponent', () => {
  let component: AgremmentDocumentDirectionPointerComponent;
  let fixture: ComponentFixture<AgremmentDocumentDirectionPointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgremmentDocumentDirectionPointerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgremmentDocumentDirectionPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
