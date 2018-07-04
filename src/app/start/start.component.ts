import { Card } from './../models/card';
import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  cardList: Card[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardList = this.cardService.generateCard();
  }

  checkFirstDeck(): Card[] {
    const firstSet = [];
    let i = 0;
    while (i + 3 <= 21) {
      firstSet.push(this.cardList[i].value);
      i += 3;
    }
    return firstSet;
  }

  checkSecondDeck(): Card[] {
    const secondDeck = [];
    let i = 1;
    while (i + 3 <= 21) {
      console.log(this.cardList[i].value);
      secondDeck.push(this.cardList[i].value);
      i += 3;
    }
    return secondDeck;
  }

  checkThirdDeck(): Card[] {
    const thirdDeck = [];
    let i = 2;
    while (i + 3 <= 21) {
      console.log(this.cardList[i].value);
      thirdDeck.push(this.cardList[i].value);
      i += 3;
    }
    return thirdDeck;
  }

  updateCardList(cardList: Card[]) {
    this.cardList = cardList;
  }
}
