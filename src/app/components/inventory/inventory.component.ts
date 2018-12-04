import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { RegionManagerService } from '../../services/region-manager.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories:Inventory[];
  constructor(private regionManagerService: RegionManagerService) { }

  ngOnInit() {
    this.regionManagerService.getInventories().subscribe(inventories => {
      this.inventories = inventories
    })
  }

}
