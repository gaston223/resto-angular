import { Component } from '@angular/core';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  cards = [
    { title: 'A la carte', cols: 2, rows: 1 },
    { title: 'Thieb', cols: 2, rows: 1 },
    { title: 'Yassa', cols: 2, rows: 1 },
    { title: 'Burger', cols: 2, rows: 1 }
  ];
}
