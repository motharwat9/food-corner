import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent {

  @Input()
  label!:string;

  @Input()
  bgColor = 'white';

  constructor() {}
}
