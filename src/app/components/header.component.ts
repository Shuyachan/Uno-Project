import { Component, OnInit } from '@angular/core';
import {card, UnoDeck, cardinhand} from "../model/card";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  players:number=2;
  newdeck:UnoDeck= new UnoDeck();
  startgame:boolean=false;
  public trial:cardinhand[]=[];
  numberarray=[];

  constructor() { }

  ngOnInit() {
  }

  addplayer():void{
    if (this.players<7)
    this.players++
  }

  removeplayer():void{
    if(this.players>2)
      this.players--
  }

  handappear():void{
    if(this.trial!=null){
      this.trial.length=0;
      this.numberarray.length=0;
    }

    this.startgame=true;
    for(let y=1;y<=this.players;y++){
      this.numberarray.push(y)
      for (let u=1;u<8;u++){
        this.trial.push({
          playernumber:y,
          cardOnHand: this.newdeck.take(),
        })
      }
    }
  }
}
