import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { SalespersonService } from '../../services/salesperson.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[];
  constructor(private salespersonService: SalespersonService) { }

  ngOnInit() {
    this.salespersonService.getCustomers().subscribe(customers => {
      this.customers = customers
    })
  }

}
