import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeEmergencyComponent } from './see-emergency.component';

describe('SeeEmergencyComponent', () => {
  let component: SeeEmergencyComponent;
  let fixture: ComponentFixture<SeeEmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeEmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
