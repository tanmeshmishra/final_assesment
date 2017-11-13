import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:AuthenticationService) { }

  ngOnInit() {
  }
  deleteMovie(name) {
    this.service.onDeletemovie(name).subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Deleted Successfully');
      } else {
        alert('Deletion failed.');
      }
    });
  }

  deleteTv(name) {
    this.service.onDeletetv(name).subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Deleted Successfully');
      } else {
        alert('Deletion failed.');
      }
    });
  }

  insertMovie(name,genres,url,description) {
    console.log(name,genres,url);
    this.service.onAddmovie(name,genres,url,description)
    .subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Inserted Successfully');
      } else {
        alert('Inserting failed.');
      }
    });
  }

  insertTv(name,genres,url,description) {
    this.service.onAddtv(name,genres,url,description)
    .subscribe(res => {
      console.log(res);
      if (JSON.parse(res.text()).success !== false) {
        alert('Inserted Successfully');
      } else {
        alert('Inserting failed.');
      }
    })
    ;
  }


}
