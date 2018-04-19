import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['../app.component.css'],
  
})

export class LandingComponent {
  title = 'Landing';
  
  public items: Array<string>;
  public results : Object;

  constructor(private http: HttpClient) {
    this.items = ["item1", "item2", "item3"];   
  }

  public open(event, item) {
    alert('Open ' + item);
  }

  ngOnInit():void{
    console.log('on page load');
    this.results = {};
    //const url = "https://nodejs-api-web.herokuapp.com/api/role";
    const url = "http://maps.googleapis.com/maps/api/geocode/json?address=bangalore";
    this.http.get(url)
    .map((res: Response) => this.results['res']=res)//it will execute only success response
    .subscribe(    
      data => {
        // Read the result field from the JSON response.
        this.results['data'] = data;
        console.log(this.results);
      },
      // Errors will call this callback instead:
      err => {
        console.log('Something went wrong!');
        this.results['err'] = err;
        console.log(this.results);
      }
    );
  }

}
