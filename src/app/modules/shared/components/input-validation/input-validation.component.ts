import { Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

const VALIDATORS_MESSAGES:any = {
  required:'Should not be empty',
  minlength:'must be larger than 12',
  email:'not valid ex:"aa@gmail.com"',
  pattern: ' dosent match pattern',
  UnmatchedPassword: 'does not match password',
  nameMatchedPassword: 'not complex , must password not smaller than name',
}


@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit ,OnChanges {

  @Input()
  constrol!:AbstractControl;

  @Input()
  label!:string;
  // @Input()
  // showErrorWhen:boolean = true;

  errorMessages: string[] = [];

  constructor() {


  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkError()
  }
  ngOnInit(): void {
    this.constrol.statusChanges.subscribe(()=>{
      this.checkError()
    })
    this.constrol.valueChanges.subscribe(()=>{
      this.checkError()
    })
  } 


  checkError() {
    const errors =this.constrol.errors
    if(!errors){
      this.errorMessages = []
      return;
    }
    const errorKays=Object.keys(errors);
    this.errorMessages = errorKays.map((kay)=> VALIDATORS_MESSAGES[kay])
  }
}
