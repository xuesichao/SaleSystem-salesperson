import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { SalespersonService } from '../../services/salesperson.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(private salespersonService: SalespersonService) { }
  ngOnInit() {
    this.salespersonService.getProducts().subscribe(products => {
      this.products = products
    })
  }

}
