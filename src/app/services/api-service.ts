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

  //register
  registerAPI(reqBody:any){
    return this.http.post(`${this.serverURL}/register`,reqBody)
  }

  //login
  loginAPI(reqBody:any){
    return this.http.post(`${this.serverURL}/login`,reqBody)
  }

}
