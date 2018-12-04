import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { SalespersonService } from '../../services/salesperson.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions:Transaction[];
  constructor(private salespersonService: SalespersonService) { }

  ngOnInit() {
    this.salespersonService.getTransactions().subscribe(transactions => {
      this.transactions = transactions
    })
  }

}
