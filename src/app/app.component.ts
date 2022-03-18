import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];

  constructor(private http:HttpClient){
  }

  ngOnInit(){
    this.http.get('http://hp-api.herokuapp.com/api/characters')
    .subscribe((data: any) => {this.data = data;})
  }
}
