import { Component } from '@angular/core';
import { ToggleDisplay } from '../js/java-script';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'WackDonalds';

  constructor() { }

      ToggleDisplay(){
        var x = document.getElementById("hamburger_items");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
       
      }
}
