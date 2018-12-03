import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Salesperson } from '../../models/salesperson';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  salespersons: Salesperson[];
  salesperson_id: string;
  @ViewChild('loginForm') form: any;
  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.salesperson_id = window.localStorage.getItem('salesperson_id');
    if (this.salesperson_id != null) {
      //判断去哪里
      this.router.navigate(['']);
    }
  }

  // onSubmit({ value, valid }: { value: Salesperson, valid: boolean }) {
  //   if (!valid) {
  //     this.flashMessage.show('Please fill out the login form correctly', {
  //       cssClass: 'alert-danger', tmeout: 1500
  //     });
  //   } else {
  //     this.loginService.login(value as Salesperson).subscribe(salespersons => {
  //       this.salespersons = salespersons;
  //       if (this.salesperson_id) {
  //         window.localStorage.setItem('salesperson_id', this.salesperson_id);
  //         this.flashMessage.show('Login successfully', {
  //           cssClass: 'alert-success', tmeout: 1500
  //         });
  //         this.router.navigate(['']);
  //         return location.reload();
  //       }
  //       this.flashMessage.show('Username or Password is wrong', {
  //         cssClass: 'alert-danger', tmeout: 1500
  //       });
  //     });
  //   }
  // }
}
