import { Component, inject } from '@angular/core';
import { Footer } from "../footer/footer";
import { Header } from '../header/header';
import { ApiService } from '../services/api-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Footer,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //property
  allRecipes: any = []
  api = inject(ApiService)


  //constructor


  //lifecycle methods
  ngOnInit(){
    this.getAllRecipes()
  }


  //userdefined functions
  getAllRecipes() {
    this.api.getAllRecipesAPI().subscribe((res: any) => {
      this.allRecipes = res.slice(0, 6)
      // console.log(this.allRecipes);
    })
  
}
}
