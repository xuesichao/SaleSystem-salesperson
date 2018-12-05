import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { StoreManagerService } from '../../services/store-manager.service';
import { Salesperson } from '../../models/Salesperson';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  salespersons_id: string;
  salespersons: Salesperson[];
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private storeManagerService: StoreManagerService
  ) {

  }

  ngOnInit() {
    this.salespersons_id = window.localStorage.getItem('salesperson_id');
    if (this.salespersons_id != null) {
      this.isLoggedIn = true;
      this.storeManagerService.getSalesperson(this.salespersons_id).subscribe(salespersons => {
        this.isLoggedIn = true;
        this.loggedInUser = salespersons[0]['name'];
        // this.router.navigate(['/doctor']);
      });
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['']);
    }
  }
  onLogoutClick() {
    window.localStorage.removeItem('salesperson_id');
    window.localStorage.removeItem('job_title');
    window.localStorage.removeItem('store_id');
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success', timeout: 1500
    });
    this.router.navigate(['']);
  }
}
