import { Component, OnInit } from '@angular/core';
import { Trade } from '../trade.model';

@Component({
  selector: 'app-trade-entry',
  templateUrl: './trade-entry.component.html',
  styleUrls: ['./trade-entry.component.scss']
})
export class TradeEntryComponent implements OnInit {

  trade: Trade = {
    tradeId: '',

    product: '',

    quantity: 0,

    tradeType: '',

    lender: '',

    rate: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
