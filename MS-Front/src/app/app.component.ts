import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MS-Front';
  constructor(private http: HttpClient) {  }

  click() {
   // @ts-ignore
    return this.http.get('http://localhost:8080/api/v1/customers').subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        console.log(response);
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
        alert(error);
      },
      () => {                                   //Complete callback
        console.log('Request completed')
      })

  }

  ngOnInit(): void {
  }
}
