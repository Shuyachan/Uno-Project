import { Component, OnInit, Input } from '@angular/core';
import {card, UnoDeck} from '../model/card'

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {



  @Input() hand: card[];
  @Input() toggle: boolean;

  constructor() { }

  ngOnInit() {


  }

}
