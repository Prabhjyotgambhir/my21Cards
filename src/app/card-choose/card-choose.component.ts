import { Component, OnInit } from '@angular/core';
import { Card } from './../models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-choose',
  templateUrl: './card-choose.component.html',
  styleUrls: ['./card-choose.component.scss']
})
export class CardChooseComponent implements OnInit {
  cardList: Card[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.generateCard();
  }

  generateCard() {
    for ( let i = 1; i <= 21; i++ ) {
      if ( i < 11) {
        this.cardList.push({
          id: i,
          value: i,
          type: 'spade'
        });
      } else {
        this.cardList.push({
          id: i - 10,
          value: i - 10,
          type: 'heart'
        });
      }
    }
    }

  startMagic() {
    this.router.navigate(['start']);
  }
  }
