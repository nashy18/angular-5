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
  productionLine = [
    { "name": "Production-1", "code": "P1" },
    { "name": "Production-2", "code": "P2" },
    { "name": "Production-3", "code": "P3" },
    { "name": "Production-4", "code": "P4" }
  ]
  netWeight = [
    "10", "20", "30", "40"
  ];
  // brandName = [
  //   "Brand-01", "Brand-02", "Brand-03", "Brand-04"
  // ];
  brandNameData = [
    { "name": "Brand-01", "code": "B1", "productionLineCode": "P1" },
    { "name": "Brand-02", "code": "B2", "productionLineCode": "P1" },
    { "name": "Brand-03", "code": "B3", "productionLineCode": "P2" },
    { "name": "Brand-04", "code": "B4", "productionLineCode": "P4" }
  ];
  productName = [
    "Product-01", "Product-02", "Product-03", "Product-04"
  ]
  public formData: Object;
  public brandName: Array<object>;
  constructor(private http: HttpClient) {
    this.formData = {};
    //this.formData["productionLine"] = "P2";
    //this.brandName = this.brandNameData;
  }

  onSubmit(event, data) {
    console.log(data);
  }

  ngOnInit() {

  }

  productionLineSelected(data) {
    let result = [];
    delete this.formData["brandName"];//for deleting the pre selected value of brand name dropdown
    //creating filter of data based on production line selection, populate btand name dropdown
    this.brandNameData.forEach(item => {
      if (item.productionLineCode == data.code) {
        result.push(item);
      }
    });
    this.brandName = result;
  }
}


