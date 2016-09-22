import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView  = 'home';

  propertyMenuClicked (){
    this.currentView = 'property';    
  }
  homeMenuClicked (){
    this.currentView = 'home';
  }
}
