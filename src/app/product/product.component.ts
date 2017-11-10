import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ExitService} from '../exit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  movieInfo: any = [];
  selectedItems: any = [];
  total = 0;
  constructor(private service: AuthenticationService, private exitService: ExitService) {
    this.movieInfo = [{
      m_img: 'https://i.ytimg.com/vi/E54K0Ei-8HM/movieposter.jpg',
      movieId: 1.0,
      movieName: 'Suicide Squad.',
      genres: 'Action' ,
      description: 'A secret government agency recruits imprisoned supervillains to execute high-risk, black-ops missions in exchange for clemency.'
    }
      ,
    {
      m_img: 'http://www.kamera.co.uk/wp-content/uploads/2017/05/lalaland.jpg',
      movieId: 2.0,
      movieName: 'La La Land',
      genres: 'Romantic',
      description: 'A jazz pianist falls for an aspiring actress in Los Angeles.'
    }
      ,
    {
      m_img: 'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Dictator_Poster.jpg',
      movieId: 3.0,
      movieName: 'The Dictator',
      genres: 'Comedy',
      description: 'The creators and star of Borat bring you the jaw-dropping comedy about what happens when the world’s worst dictator comes to America.'
    },
    {
      m_img: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Annabelle-poster.jpg',
      movieId: 4.0,
      movieName: 'Annabelle (2014)',
      genres:'Horor',
      description: ' Based on the doll from The Conjuring, John has found the perfect gift for his,a rare vintage doll. But Mia’s delight with Annabelle doesn’t last long.'
    }
    ];
   }

  ngOnInit() {
  }
  addToCart(name: String, price: Number, img: String, description: String) {
    
    this.service.onAddToCart( this.exitService.email,name, price, img, description).subscribe(res=>{alert("Added successfully")});

   
  }


  


}
