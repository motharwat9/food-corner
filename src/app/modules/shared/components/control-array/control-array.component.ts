import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-array',
  templateUrl: './control-array.component.html',
  styleUrls: ['./control-array.component.scss']
})
export class ControlArrayComponent {

  @Input()
  form!:FormGroup

  @Input()
  arrayName!:string;

  @Input()
  control!:AbstractControl;

  @Input()
  label!:string;

  @Input()
  type:'text'|'password'|'email'|'number'='text'
  

  showDelBtn:boolean=false;

  
  constructor(private fb:FormBuilder) {}


  get arrayControl() {
    return this.control as FormArray;
  }

  addAddress(){
    if(this.arrayControl.length >= 1){
      this.showDelBtn=true;
    }
    this.arrayControl.push(this.fb.control('',[Validators.required]))
  }
  deleteFormArray(index:number){
    if(this.arrayControl.length === 2){
      this.showDelBtn=false
    }
    this.arrayControl.removeAt(index)
  }
}
