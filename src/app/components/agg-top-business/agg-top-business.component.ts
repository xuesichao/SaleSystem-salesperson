import { Component, OnInit } from '@angular/core';
import { Aggregation } from 'src/app/models/Aggregation';
import { AggregationService } from '../../services/aggregation.service';
@Component({
  selector: 'app-agg-top-business',
  templateUrl: './agg-top-business.component.html',
  styleUrls: ['./agg-top-business.component.css']
})
export class AggTopBusinessComponent implements OnInit {
  aggregations: Aggregation[];
  constructor(
    private aggregationService: AggregationService,
  ) { }

  ngOnInit() {

    this.aggregationService.getTopBusinesses().subscribe(aggregations => {
      this.aggregations = aggregations
    })

  }

}
