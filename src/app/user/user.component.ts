import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  itemCode = [
    "Item-01", "Item-02", "Item-03", "Item-04"
  ];
  public formData: Object;

  constructor(private http: HttpClient) {
    this.formData={};
  }

  ngOnInit() {

  }
}


