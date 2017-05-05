import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

// https://www.youtube.com/watch?v=xYv9lsrV0s4
// husk at add ReactiveFormsModule i app.Module import 

function passwordMatcher (c:AbstractControl){
  return c.get('password').valid === c.get("confirm").valid
  ?null:{'nomatch':true};
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      first: '',
      last: '',
      account: this.fb.group({
        username: '',
        password: ['',Validators.required],
        confirm: ['',Validators.required],
      }, {validator:passwordMatcher}),

      newsletter: ''
    })
    this.form.patchValue({
      first: 'Johan'
    })
  }

  ngOnInit() {

  }

}
