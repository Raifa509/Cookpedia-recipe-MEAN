import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';
import { Router } from '@angular/router';
import { log } from 'console';


@Component({
  selector: 'app-recipes',
  imports: [Header,Footer],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
allRecipes:any=[]
cuisineArray:any=[]
mealTypeArray:any=[]
dummyAllRecipes:any=[]

  api=inject(ApiService)
  router=inject(Router)

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe(
      {
        next:(res:any)=>{
          // console.log(res);
          this.allRecipes=res
          this.dummyAllRecipes=res
          this.allRecipes.forEach((item:any)=>{
            !this.cuisineArray.includes(item.cuisine) && this.cuisineArray.push(item.cuisine)
          })
          // console.log(this.cuisineArray);
          
          const dummyArray=this.allRecipes.map((item:any)=>item.mealType).flat(Infinity)
          // console.log(dummyArray);
          dummyArray.forEach((item:any)=>{
            !this.mealTypeArray.includes(item) && this.mealTypeArray.push(item)
          })
          // console.log(this.mealTypeArray);
          
        }
      }
    )
  }

  //filter 
  filterRecipe(key:string,value:string){
    this.allRecipes=this.dummyAllRecipes.filter((item:any)=>item[key]==value)
  }
  //navigate to view page
  navigateView(recipeId:string){
    if(sessionStorage.getItem("token"))
    {
     this.router.navigateByUrl(`/recipes/${recipeId}/view`)
    }else{
      alert("Please login to get full access to our Recipe Collection!!!")
    }
  }
}
