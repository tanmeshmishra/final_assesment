import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }
  email = '';
  onSignup( name: string,email: string, password: string) {
   return  this.http.post('http://localhost:8888/api/t3/createUser',
    ({ email : email , name: name, password: password}));
  }

  onLogin(email: string) {
    return this.http.get('http://localhost:8888/api/t3/getUser/' + email);
  }


  isLoggedIn() {
    return this.email === '' ? false : true ;
  }
 

}
