import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegionManagerService } from '../../services/region-manager.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {
  transaction_id: string;
  transactions: Transaction[];
  constructor(
    private flashMessage: FlashMessagesService, private regionManagerService: RegionManagerService
  ) { }

  ngOnInit() {
    this.transaction_id = window.sessionStorage.getItem('transaction_id');
    this.regionManagerService.getInventory(this.transaction_id).subscribe(transactions => {
      this.transactions = transactions
    })
  }
  onSubmit({ value, valid }: { value: Transaction, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      console.log(this.transactions[0]);
      this.regionManagerService.updateInventory(this.transaction_id, this.transactions[0]).subscribe();
      this.flashMessage.show('Inventory updated', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
