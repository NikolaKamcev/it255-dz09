import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  public room_types: any[];
  public addRoomForm = new FormGroup({
    roomname: new FormControl(),
    tv: new FormControl(),
    beds: new FormControl(),
    room_type: new FormControl()
  });
  constructor(private _router: Router, private _http: Http) { }

  ngOnInit() {
    
  }

  public addRoom() {
    // tslint:disable-next-line:max-line-length
    const data = 'roomName=' + this.addRoomForm.value.roomname + '&hasTV=' + this.addRoomForm.value.tv + '&beds=' + this.addRoomForm.value.beds;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.post('http://localhost:8080/php/addroom.php', data, {headers: headers}).subscribe((result) => {
    }, (error) => {
      this._router.navigateByUrl('home');
    });
  }

}
