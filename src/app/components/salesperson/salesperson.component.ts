import { Component, OnInit } from '@angular/core';
import { Salesperson } from 'src/app/models/Salesperson';
import { StoreManagerService } from '../../services/store-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesperson',
  templateUrl: './salesperson.component.html',
  styleUrls: ['./salesperson.component.css']
})
export class SalespersonComponent implements OnInit {
  salespersons:Salesperson[];
  store_id:String;
  constructor(
    private storeManagerService: StoreManagerService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.storeManagerService.getSalespersons().subscribe(salespersons => {
      this.salespersons = salespersons
    })
  }
  
}
