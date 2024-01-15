import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  
  @Input()
  label!:string;

  @Input()
  type: 'text' | 'number' | 'email' |'password' = 'text'

  @Input()
  control!:AbstractControl


  hidePassword:boolean=true;
  
  @Input()
  showButton:boolean = false;


  // @Input()
  // showErrorWhen =true;
  
  get formControl(){
    return this.control as FormControl
  }
}
