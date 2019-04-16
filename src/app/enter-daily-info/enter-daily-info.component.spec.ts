import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDailyInfoComponent } from './enter-daily-info.component';

describe('EnterDailyInfoComponent', () => {
  let component: EnterDailyInfoComponent;
  let fixture: ComponentFixture<EnterDailyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDailyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDailyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
