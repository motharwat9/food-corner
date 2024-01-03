import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Food } from '../../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAllFoods():Observable<Food[]>{
    return this.http.get<Food[]>(`http://localhost:3000/foods`).pipe(
      retry(2)
    )
  }
  getFoodById(foodId:number):Observable<Food>{
    return this.http.get<Food>(`http://localhost:3000/foods/${foodId}`).pipe(
      retry(2)
    )
  }
}
