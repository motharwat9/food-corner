import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Food } from '../../shared/interfaces/food';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAllFoods():Observable<Food[]>{
    return this.http.get<Food[]>(`${environment.APIURL}/foods`).pipe(
      retry(2)
    )
  }
  getFoodById(foodId:number):Observable<Food>{
    return this.http.get<Food>(`${environment.APIURL}/foods/${foodId}`).pipe(
      retry(2)
    )
  }
}
