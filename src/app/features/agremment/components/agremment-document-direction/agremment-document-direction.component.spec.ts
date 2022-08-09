import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgremmentDocumentDirectionComponent } from './agremment-document-direction.component';

describe('AgremmentDocumentDirectionComponent', () => {
  let component: AgremmentDocumentDirectionComponent;
  let fixture: ComponentFixture<AgremmentDocumentDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgremmentDocumentDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgremmentDocumentDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
