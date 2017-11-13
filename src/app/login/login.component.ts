import { Component, OnInit } from '@angular/core';
import { Router} from'@angular/router';
import { ExitService } from '../exit.service';
import {AuthenticationService} from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   user: any = [];
   app;
   token: any; 
   data;
   userDetails: Object;
   userInfo: boolean = false;

  constructor(private router: Router, private service: ExitService , private loginService: AuthenticationService ) {
    
  }
  ngOnInit() {
  }

login(email: string, password: string) {
  this.loginService.onLogin(email)
  .subscribe(res => {
    this.user = JSON.parse(res.text());
    if (this.user == null) {
      console.log('Error occurred');
      alert('Error occurred ');
    } else if (this.user.password === password) {
      this.service.email=this.user.email;
      this.router.navigate(['/user']);
      //this.service.email = this.user.email;
      this.loginService.role = this.user.role;
      this.service.exit = false;
      console.log(this.loginService.role);
            return this.service.exit;
    } else {
      console.log('Error occurred');
      alert('Error occurred');
    }
});
}
}
