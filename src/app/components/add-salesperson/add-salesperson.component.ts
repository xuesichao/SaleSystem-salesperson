import { Component, OnInit } from '@angular/core';
import { Salesperson } from 'src/app/models/Salesperson';
import { FlashMessagesService } from 'angular2-flash-messages';
import { StoreManagerService } from '../../services/store-manager.service';

@Component({
  selector: 'app-add-salesperson',
  templateUrl: './add-salesperson.component.html',
  styleUrls: ['./add-salesperson.component.css']
})
export class AddSalespersonComponent implements OnInit {
  salesperson: Salesperson = {
    salesperson_id:'',
    name:'',
    address:'',
    email:'',
    job_title:'',
    store_id:'',
    salary:'',
    password:''

  }
  constructor(
    private flashMessage: FlashMessagesService,
    private storeManagerService: StoreManagerService
  ) { }

  ngOnInit() {
  }
  onSubmit({ value, valid }: { value: Salesperson, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 1500
      });
    } else {
      this.storeManagerService.addSalesperson(value as Salesperson).subscribe();
      this.flashMessage.show('New salesperson added', {
        cssClass: 'alert-success', timeout: 1500
      });
    }
  }
}
