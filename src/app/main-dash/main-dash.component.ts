import { Component, OnInit } from '@angular/core';
import {QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {
  cards = [
    { title: 'Burgers', cols: 2, rows: 1, id : 'brg' },
    { title: 'Galettes/Crèpes', cols: 2, rows: 1, id: 'glt' },
    { title: 'Pizzas', cols: 2, rows: 1, id: 'pzz' }
  ];

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];

  constructor (private qls: QuickLunchService) {}

  ngOnInit(): void {
  this.burgers = this.qls.getBurgers();
  this.pizzas = this.qls.getPizzas();
  this.galettes = this.qls.getGalettes();
  }
}
