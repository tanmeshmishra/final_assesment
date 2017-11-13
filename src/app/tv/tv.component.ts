import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {ExitService} from '../exit.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private service: AuthenticationService, private exitService: ExitService) { }
  public Tv: any =[];
  ngOnInit() {
    this.service.onTv().subscribe(res=>{this.Tv=JSON.parse(res.text()); console.log(res);})
  }

}
