import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }
  email = '';
  role:number;

  // API For SignUp
onSignup( name: string,email: string, password: string) {
   return  this.http.post('http://192.168.13.63:8888/api/t3/createUser',
    ({ email : email , name: name, password: password}));
  }

  // API For Login
onLogin(email: string) {
    return this.http.get('http://192.168.13.63:8888/api/t3/getUser/' + email);
  }

  // API To Get All Movies
onMovie(){
  return this.http.get('http://192.168.13.63:8888/api/t3/getAllMovies');
}

// API To Get All Tv Series
onTv(){
  return this.http.get('http://192.168.13.63:8888/api/t3/getAllTv');
}

isLoggedIn() {
    return this.email === '' ? false : true ;
  }

  // API to Add Movie
onAddmovie(name,genres,url,description){
  console.log(name,genres,url);
    return this.http.post('http://192.168.13.63:8888/api/t3/insertMovie/',{movieName:name , genres: genres, m_img:url,description: description});
  }

  // API To Add Tv Series  
onAddtv(name,genres,url,description){
    return this.http.post('http://192.168.13.63:8888/api/t3/insertTv/',{tvName:name , genres: genres,  tv_img:url,description: description});
  }

// API To Delete Movie
onDeletemovie(name){
    return this.http.delete('http://192.168.13.63:8888/api/t3/deleteMovie/'+name);
  }

// API To Delete Tv series
onDeletetv(name){
    return this.http.delete('http://192.168.13.63:8888/api/t3/deleteTv/'+name);
  }
}


