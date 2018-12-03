import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Salesperson } from '../../models/Salesperson';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  salespersons: Salesperson[];
  salespersons_id: string;
  job_title: string;
  @ViewChild('loginForm') form: any;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    // this.salespersons_id = window.localStorage.getItem('salesperson_id');
    // if (this.salespersons_id != null) {
    //   //判断去哪里
    //   this.router.navigate(['']);
    // }
  }
  onSubmit({ value, valid }: { value: Salesperson, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the login form correctly', {
        cssClass: 'alert-danger', tmeout: 1500
      });
    } else {
      this.loginService.login(value as Salesperson).subscribe(salespersons => {
        // this.salespersons_id = salespersons.salespersons_id;
        this.salespersons = salespersons;
        if (this.salespersons.length != 0) {
          this.salespersons_id = this.salespersons[0].salespersons_id;
          this.job_title = this.salespersons[0].job_title;
          window.localStorage.setItem('salespersons_id', this.salespersons_id)
          window.localStorage.setItem('job_title', this.job_title)
          this.flashMessage.show('Login successfully', {
            cssClass: 'alert-success', timeout: 1500
          });
          // this.router.navigate(['']);
          // return location.reload();
        } else {
          this.flashMessage.show('Username or Password is wrong', {
            cssClass: 'alert-danger', timeout: 1500
          });
        }

      });
    }
  }
}
