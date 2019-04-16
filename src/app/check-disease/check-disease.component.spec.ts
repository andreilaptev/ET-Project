import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDiseaseComponent } from './check-disease.component';

describe('CheckDiseaseComponent', () => {
  let component: CheckDiseaseComponent;
  let fixture: ComponentFixture<CheckDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
