import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
numberToDisplay='';
  standard = {
    firstName: 'Kylian',
    lastName: 'Mbappé',
    role: 'Accueil',
    award:'',
    phoneNumber:'0825846955'
  }
  sommelier = {
    firstName: 'Olivier',
    lastName: 'Giroud',
    role: 'Sommelier',
    award:'Meilleur ouvrier de france 2017',
    phoneNumber:'0875848451'
  }

  boucher = {
    firstName: 'Antoine',
    lastName: 'Griezmann',
    role: 'Boucher',
    award:'Meilleur ouvrier de france 2018',
    phoneNumber:'0889848735'
  }

  constructor() { }

  ngOnInit() {
  }
 displayBig(telephoneNumber){
console.log(telephoneNumber);
this.numberToDisplay= telephoneNumber;
 }
}
