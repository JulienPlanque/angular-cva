import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuantityControlConstructorComponent } from './choose-quantity-control-constructor.component';

describe('ChooseQuantityControlConstructorComponent', () => {
  let component: ChooseQuantityControlConstructorComponent;
  let fixture: ComponentFixture<ChooseQuantityControlConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseQuantityControlConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseQuantityControlConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
