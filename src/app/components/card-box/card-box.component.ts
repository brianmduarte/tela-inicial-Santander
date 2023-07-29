import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  
  constructor(private service: CardsService) {

  }

  accountData: AccountDataModel = {
    name: "BRIAN MUCIO DUARTE",
    account: {
      agency: "1234",
      number: "00.123456-7"
    },
    card: {
      number: "0000"
    }
  };

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData() {
    this.service.getCard().subscribe( data => {
      this.accountData.name = data.name
      this.accountData.account.agency = data.account.agency;
      this.accountData.account.number = data.account.number;
      this.accountData.card.number = data.card.number.split(" ")[3]
    })

  }

}
