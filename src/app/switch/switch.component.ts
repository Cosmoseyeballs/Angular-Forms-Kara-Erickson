import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => SwitchControlComponent) }
  ]
})
export class SwitchControlComponent implements ControlValueAccessor {
    registerOnTouched(fn: any): void {
      console.log('Method not implemented.');
    }
  setDisabledState(isDisabled: boolean): void {
   console.log('Method not implemented.');
  }

  isOn: boolean;
  _onChange: (value: any) => void;



  writeValue(value: any) {
    this.isOn = !!value;
    console.log('writeValue')
  }
  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
    console.log('registerOnChange')
  }




  toggle(isOn: boolean) {
    this.isOn = isOn;
    this._onChange(isOn);
  }

}
