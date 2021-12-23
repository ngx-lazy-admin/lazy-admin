import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  constructor(
    // private route: Routes
  ) { }

  ngOnInit(): void {
    // console.log('chart')
    // console.log(this.route)
  }
}
