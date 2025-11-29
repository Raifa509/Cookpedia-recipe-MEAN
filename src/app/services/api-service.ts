import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http=inject(HttpClient)
  serverURL="http://localhost:3000"

  //getall recipes
  getAllRecipesAPI(){
    return this.http.get(`${this.serverURL}/recipes/all`)
  }
}
