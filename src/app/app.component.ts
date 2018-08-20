import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public ime: any = [];

  public isAuth: boolean;

  title = 'app';

  constructor(private _http: Http, private _router: Router) { }

  public ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }

    this.getName();
  }

  public logOut() {
    localStorage.removeItem('token');
    this.isAuth = false;
    location.reload();
  }

  public getName(){
    var headers = new Headers(); 
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));

    this._http.get('http://localhost:8080/php/getIme.php?token='+localStorage.getItem('token'), {headers:headers}).subscribe( data => {
          this.ime = JSON.parse(data["_body"]).username;
           console.log(this.ime);
      //    console.log(this.ime['username'],this.ime['firstname']);
  }
  , err => {
    alert("neuspeh");
  });

  }

}
