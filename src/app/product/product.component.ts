import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ExitService} from '../exit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public movie: any =[];
  constructor(private service: AuthenticationService, private exitService: ExitService) {
  }

  ngOnInit() {
    this.service.onMovie().subscribe(res=>{this.movie=JSON.parse(res.text())})
  }
  

  


}
