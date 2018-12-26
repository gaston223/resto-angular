import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  dogs = [
    { race : 'berger allemand', name : 'Wolfy'},
    { race : 'buldog anglais', name : 'Mac Fly'},
    { race : 'caniche', name : 'Rasta'},
  ];

  temperature = [0, 10, 20, 30];

  constructor() { }

  ngOnInit() {
  }

}
