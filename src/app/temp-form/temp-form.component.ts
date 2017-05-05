import { Component, OnInit, Directive } from '@angular/core';
import { AbstractControl,NG_VALIDATORS } from "@angular/forms";

function passwordMatcher (c:AbstractControl){
  console.log("PasswordMatcher 2");
  if(!c.get('password') || !c.get("confirm")) return null;console.log("PasswordMatcher 3");
  return c.get('password').valid === c.get("confirm").valid
  ?null:{'nomatch':true};
}

@Directive({
  selector:'[password-matcher]',
  providers:[
      {provide:NG_VALIDATORS,multi:true, useValue:passwordMatcher}
    ]
})
export class PasswordMatcher implements OnInit  {
    constructor() {
        console.log("PasswordMatcher");
    }

    ngOnInit() {
      
  }
  
}

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {
  name = {first:"Johan"}
  constructor() { }

  ngOnInit() {
  }

}
