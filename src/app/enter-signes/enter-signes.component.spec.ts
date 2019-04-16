import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSignesComponent } from './enter-signes.component';

describe('EnterSignesComponent', () => {
  let component: EnterSignesComponent;
  let fixture: ComponentFixture<EnterSignesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterSignesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
