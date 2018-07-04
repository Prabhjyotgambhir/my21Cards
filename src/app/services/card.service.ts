import { Injectable } from '@angular/core';
import { Card } from './../models/card';

@Injectable()
export class CardService {
  public cardList: Card[] = [];
  constructor() { }

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
    return this.cardList;
    }

}
