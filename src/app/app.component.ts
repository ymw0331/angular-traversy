import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //html tag to embed component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Task Tracker';
}
