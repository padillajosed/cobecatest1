import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Casa{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];

  constructor(private http:HttpClient){
  }
  casas:Casa[] = [
    {value:'casa1', viewValue:'Gryffindor'},
    {value:'casa2', viewValue:'Slytherin'},
    {value:'casa3', viewValue:'Ravenclaw'},
    {value:'casa4', viewValue:'Hufflepuff'},
  ];

  ngOnInit(){
    this.http.get('http://hp-api.herokuapp.com/api/characters')
    .subscribe((data: any) => {this.data = data;})
  }  
}
