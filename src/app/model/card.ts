export interface card{
    value:number;
    color:string;
    imageUrl:string;
}

export interface cardinhand{
    cardOnHand: card;
    playernumber:number;
}

export class UnoDeck{
  private static COLOR: string[]=["red", "green", "blue", "yellow"];
  private cards: card[] = [];

  constructor(){
    //create the deck
    for (let c = 0; c < UnoDeck.COLOR.length; c++) {
      this.cards.push({
        value: 0,
        color: UnoDeck.COLOR[c],
        imageUrl: "/assets/unocards/c" + c + "_00" + ".png"
      })
  }

  for(let i = 0;i<4;i++){
      this.cards.push({
        value:13,
        color: "wild",
        imageUrl: "/assets/unocards/c4_00.png"
      }),

      this.cards.push({
        value:14,
        color:"wild + 4",
        imageUrl:"/assets/unocards/c4_01.png",
      })
  }

    for (let i = 0; i < 2; i++) {
      for (let c = 0; c < UnoDeck.COLOR.length; c++) {
        for (let j = 1; j < 13; j++) {
          let prefix: string = "0";

          if (j < 10) {
            prefix = prefix + j;
          }
          else
            prefix = j + "";

          this.cards.push({
            value: j + 1,
            color: UnoDeck.COLOR[c],
            imageUrl: "/assets/unocards/c" + c + "_" + prefix + ".png"
          })
        }
      }
    }
    this.shuffle();
  }

  private shuffle(times: number = 5): void {
    // Using Math.round() will give you a non-uniform distribution!

    function getRandomCard(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    for (let i = 0; i < times; i++) {
      for (let j = 0; j < this.cards.length; j++) {

        var p1: number = j;
        var p2: number = getRandomCard(1, this.cards.length-1);
        var t: card = this.cards[p1];
        this.cards[p1] = this.cards[p2];
        this.cards[p2] = t;
      }
    }
  }

  public take(): card {
    return (this.cards.pop());
  }
}


