import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/modules/shared/interfaces/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  foods: Food[] = [];
  tags: string[] = [];
  uniqueTags: string[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllFoods();
  }

  loadAllFoods() {
    this.foodService.getAllFoods().subscribe((res) => {
      this.foods = res;

      this.extractTagsFromFoods();

      this.activatedRoute.params.subscribe((params) => {
        this.filterFoods(params);
      });
    });
  }

  private extractTagsFromFoods() {
    this.tags = this.foods.reduce((allTags, food)=> allTags.concat(food.tags),[] as string[]);
    this.uniqueTags = [...new Set(this.tags)];
  }

  private filterFoods(params: any) {
      const searchTrem = params['searchTerm'];
      const TagName = params['tags'];

      if (searchTrem) {
        this.filterFoodsByName(searchTrem);
      } else if (TagName) {
        this.filterFoodsByTags(TagName);
      }
  }

  filterFoodsByName(searchTrem: string) {
    if (searchTrem) {
      this.foods = this.foods.filter( (food)=> food.name.toLowerCase().includes(searchTrem.toLowerCase()));
    }
  }

  filterFoodsByTags(tagParams: string) {
    if (tagParams === 'All') {
      this.router.navigate(['/foods']);
    } else {
      this.foods = this.foods.filter( (food)=> food.tags.includes(tagParams));
    }
  }
}
