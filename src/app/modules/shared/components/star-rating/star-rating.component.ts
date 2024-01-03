import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input()
  stars:number=0;
  @Input()
  size:number=1;
  constructor(){}

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }
  getStarImage(current:number) :string{
    const previuosHalf = current - 0.5;
    const imageName = this.stars >= current? 'star-full':this.stars >= previuosHalf? 'star-half':'star-empty';
    return `/assets/stars/${imageName}.svg`;
  }
}
