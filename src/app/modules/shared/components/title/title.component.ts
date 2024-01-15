import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input()
  fontSize:number=16;

  @Input()
  margin:number=0;

  @Input()
  title!:string
}
