import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DynamicFormService } from './dynamic-form.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.html',
  styleUrls: ['./dynamic-form.scss'],
  providers: [DynamicFormService]
})
export class DynamicFormComponent implements OnInit {
  formData = {};
  formName = ["QMR-14"];
  inputTypes = [
    "Text", "DropDown", "Radio", "TextArea"
  ];
  dataPoints = [
    "Country", "City", "State", "District"
  ];
  required = [true, false];
  public columns: Array<string>;
  public rows: Array<object>;
  public items: Array<object>;
  public showTable: Boolean;
  public formTableRows: Array<number>;
  public finalObj: Object;
  public myData: Object;
  public input: Object;

  constructor(private http: HttpClient) {
    this.columns = ["label", "label2", "label3", "label4"];
    this.rows = [["data11", "data12", "data13", "data14"], ["data21", "data22", "data23", "data24"], ["data31", "data32", "data33", "data134"], ["data41", "data42", "data43", "data44"]];
    this.showTable = false;
    this.formTableRows = [];
    this.finalObj = {};
    this.myData = null;
    this.input = {};
  }
  ngOnInit() {

  }

  onSubmit(event, data, show) {
    if (show) {//Reset button click
      this.showTable = false;
      this.myData = "";
      this.finalObj = {};
      this.formTableRows = [];
      this.input = {};
    }
    else {
      let labels = [];
      for (let key in data) {
        for (let item in data[key]) {
          if (item == "label") {
            labels.push(data[key][item]);
            break;
          }
        }
      }
      let output = {};
      output["labels"]= labels;
      output["QMR-14"] = data;
      this.myData = JSON.stringify(output);
      console.log(data);
    }
  }

  formTable(event, data) {
    this.finalObj = {};
    this.showTable = false;
    this.formTableRows = [];
    this.input = {};
    if (!data.formName) return alert("Please Select Form Name");
    if (!Number(data.rows)) return alert("You can enter only numbers");
    for (let index = 0; index < data.rows; index++) {
      this.formTableRows.push(index);
      this.finalObj["Cell_" + index] = {};
      this.finalObj["Cell_" + index]["required"] = false;
      this.finalObj["Cell_" + index]["readOnly"] = false;
      this.finalObj["Cell_" + index]["label"] = "";
      this.finalObj["Cell_" + index]["inputType"] = "Text";
      this.finalObj["Cell_" + index]["formula"] = "";
      this.finalObj["Cell_" + index]["required"] = false;
    }
    this.showTable = true;
  }

  dataSourceSelected(value) {
    alert(value);
  }

  inputTypeSelected(value) {
    alert(value);
  }

  onFormulaEntered(data, index) {
    this.finalObj["Cell_" + index]["readOnly"] = Boolean(data['Cell_' + index].formula);
  }
}


