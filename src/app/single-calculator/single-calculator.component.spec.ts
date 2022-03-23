import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCalculatorComponent } from './single-calculator.component';

describe('SingleCalculatorComponent', () => {
  let component: SingleCalculatorComponent;
  let fixture: ComponentFixture<SingleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
