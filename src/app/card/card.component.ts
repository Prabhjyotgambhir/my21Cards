import { Card } from './../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() cardDetail: Card;
  constructor() { }

  ngOnInit() {
  }

}
