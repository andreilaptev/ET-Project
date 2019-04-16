import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeClinicalInfoComponent } from './see-clinical-info.component';

describe('SeeClinicalInfoComponent', () => {
  let component: SeeClinicalInfoComponent;
  let fixture: ComponentFixture<SeeClinicalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeClinicalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeClinicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
