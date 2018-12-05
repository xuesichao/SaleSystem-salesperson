import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RegionManagerService } from '../../services/region-manager.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  inventory_id: string;
  inventorys: Inventory[];
  constructor(
    private flashMessage: FlashMessagesService, private regionManagerService: RegionManagerService
  ) { }

  ngOnInit() {
    this.inventory_id = window.sessionStorage.getItem('inventory_id');
    this.regionManagerService.getInventory(this.inventory_id).subscribe(inventorys => {
      this.inventorys = inventorys
    })
  }
  onSubmit({ value, valid }: { value: Inventory, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      console.log(this.inventorys[0]);
      this.regionManagerService.updateInventory(this.inventory_id, this.inventorys[0]).subscribe();
      this.flashMessage.show('Inventory updated', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
