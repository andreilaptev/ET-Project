import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTipsComponent } from './make-tips.component';

describe('MakeTipsComponent', () => {
  let component: MakeTipsComponent;
  let fixture: ComponentFixture<MakeTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
