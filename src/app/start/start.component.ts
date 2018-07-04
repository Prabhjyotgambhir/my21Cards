import { Router } from '@angular/router';
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
  selectedDeck: number;
  timer = 0;
  magicCard: Card;
  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
    this.cardList = this.cardService.generateCard();
  }

  selectedColumn(deck: number) {
    this.selectedDeck = deck;
  }

  checkFirstDeck(): Card[] {
    const firstSet = [];
    let i = 0;
    while (i < 21) {
      firstSet.push(this.cardList[i]);
      i += 3;
    }
    console.log('firstSet', firstSet);
    return firstSet;
  }

  checkSecondDeck(): Card[] {
    const secondDeck = [];
    let i = 1;
    while (i <= 21) {
      secondDeck.push(this.cardList[i]);
      i += 3;
    }
    return secondDeck;
  }

  checkThirdDeck(): Card[] {
    const thirdDeck = [];
    let i = 2;
    while (i <= 21) {
      thirdDeck.push(this.cardList[i]);
      i += 3;
    }
    return thirdDeck;
  }

  updateCardList(cardList: Card[]) {
    this.cardList = cardList;
  }

  submit() {
    this.selectedDeck = undefined;
    if (this.timer < 2) {
      this.timer++;
      const firstDeck = this.checkFirstDeck();
      const secondDeck = this.checkSecondDeck();
      const thirdDeck = this.checkThirdDeck();
      this.cardList = [];
      if (this.selectedDeck === 1) {
        for (const card of secondDeck) {
          this.cardList.push(card);
        }
        for (const card of firstDeck) {
          this.cardList.push(card);
        }
        for (const card of thirdDeck) {
          this.cardList.push(card);
        }
      } else if (this.selectedDeck === 2) {
        for (const card of firstDeck) {
          this.cardList.push(card);
        }
        for (const card of secondDeck) {
          this.cardList.push(card);
        }
        for (const card of thirdDeck) {
          this.cardList.push(card);
        }
      } else {
        for (const card of firstDeck) {
          this.cardList.push(card);
        }
        for (const card of thirdDeck) {
          this.cardList.push(card);
        }
        for (const card of secondDeck) {
          this.cardList.push(card);
        }
      }
    } else {
      this.magicCard = this.guessCard(this.cardList);
    }
  }

  guessCard(cardList: Card[]) {
    return cardList[this.cardList.length - 11];
  }

  startAgain() {
    this.router.navigate(['/']);
  }
}
