import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrecriptionComponent } from './create-precription.component';

describe('CreatePrecriptionComponent', () => {
  let component: CreatePrecriptionComponent;
  let fixture: ComponentFixture<CreatePrecriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrecriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
