import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-recipes',
  imports: [Header,Footer],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
allRecipes:any=[]
  api=inject(ApiService)

  ngOnInit(){
    this.getAllRecipes()
  }

  getAllRecipes(){
    this.api.getAllRecipesAPI().subscribe(
      {
        next:(res:any)=>{
          console.log(res);
          this.allRecipes=res
          
        }
      }
    )
  }
}
