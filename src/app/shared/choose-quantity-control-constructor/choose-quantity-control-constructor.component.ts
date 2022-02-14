import { Component, Input, OnInit, Self } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl, ValidationErrors, ValidatorFn
} from '@angular/forms';

export function positifOrZero(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity,
        },
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-choose-quantity-control-constructor',
  templateUrl: './choose-quantity-control-constructor.component.html',
  styleUrls: ['./choose-quantity-control-constructor.component.scss'],
})
export class ChooseQuantityControlConstructorComponent
  implements OnInit, ControlValueAccessor
{
  quantity = 0;

  @Input()
  increment: number = 0;

  onChange = (quantity: number) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  constructor(@Self() private ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    const control: AbstractControl | null = this.ngControl.control;
    console.log(
      'control',
      this.ngControl,
      this.ngControl.control,
      control,
      this.ngControl.validator
    );
    if (control) {
      let validators = control.validator
        ? [control.validator, ...[positifOrZero()]]
        : [positifOrZero()];
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
  }
  writeValue(obj: any): void {
    this.quantity = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
