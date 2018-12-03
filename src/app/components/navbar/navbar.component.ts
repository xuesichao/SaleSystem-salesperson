import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SalespersonService } from '../../services/salesperson.service';
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
    private salespersonService: SalespersonService
  ) {

  }

  ngOnInit() {
    this.salespersons_id = window.localStorage.getItem('salespersons_id');
    if (this.salespersons_id != null) {
      console.log('user exists');
      this.isLoggedIn = true;
      this.loggedInUser = 'username';
      // this.salespersonService.getSalespersons(this.salespersons_id).subscribe(salespersons => {
      //   this.isLoggedIn = true;
      //   this.loggedInUser = salespersons['name'];
      //   this.router.navigate(['/doctor']);
      // });
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['']);
    }
  }
  onLogoutClick() {
    window.localStorage.removeItem('salespersons_id');
    window.localStorage.removeItem('job_title');
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success', timeout: 1500
    });
    this.router.navigate(['']);
  }
}
