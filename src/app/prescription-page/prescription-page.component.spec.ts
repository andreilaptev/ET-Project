import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionPageComponent } from './prescription-page.component';

describe('PrescriptionPageComponent', () => {
  let component: PrescriptionPageComponent;
  let fixture: ComponentFixture<PrescriptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
