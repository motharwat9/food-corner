import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent {

  @Input()
  type:'submit'|'button' = 'submit';

  @Input()
  text!:string

  @Input()
  bgColor = '#e72929';

  @Input()
  color = 'white';

  @Input()
  fontSizeRem = 1.3;

  @Input()
  widthRem = 8;
  
  @Input()
  form!:FormGroup;

  // @Output()
  // onClick = new EventEmitter();
}
