import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTipsComponent } from './see-tips.component';

describe('SeeTipsComponent', () => {
  let component: SeeTipsComponent;
  let fixture: ComponentFixture<SeeTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
