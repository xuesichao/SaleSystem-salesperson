import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-salesperson',
  templateUrl: './update-salesperson.component.html',
  styleUrls: ['./update-salesperson.component.css']
})
export class UpdateSalespersonComponent implements OnInit {
  salesperson_id:String;
  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
  
  }

}
