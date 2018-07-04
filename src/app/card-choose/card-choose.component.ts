import { CardService } from './../services/card.service';
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
  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit() {
    this.cardList = this.cardService.generateCard();
  }

  startMagic() {
    this.router.navigate(['start']);
  }
  }
