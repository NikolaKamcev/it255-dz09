import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  public room_types: any[];
  public addHotelForm = new FormGroup({
    hotelname: new FormControl(),
    adress: new FormControl(),
    telephone: new FormControl(),
  });
  constructor(private _router: Router, private _http: Http) { }

  ngOnInit() {
    
  }

  public addHotel() {
    // tslint:disable-next-line:max-line-length
    const data = 'hotelName=' + this.addHotelForm.value.hotelname + '&Adress=' + this.addHotelForm.value.adress + '&telephone=' + this.addHotelForm.value.telephone;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.post('http://localhost:8080/php/addhotel.php', data, {headers: headers}).subscribe((result) => {
    }, (error) => {
      this._router.navigateByUrl('home');
    });
  }

}
