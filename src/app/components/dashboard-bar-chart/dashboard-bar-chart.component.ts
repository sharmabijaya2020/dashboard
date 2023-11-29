import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-dashboard-bar-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard-bar-chart.component.html',
  styleUrl: './dashboard-bar-chart.component.css'
})
export class DashboardBarChartComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '',
    'Nov 05, 23',
    'Nov 06, 23',
    'Nov 07, 23',
    'Nov 08, 23',
    'Nov 09, 23',
    'Nov 10, 23',
    'Nov 11, 23',
    'Nov 12, 23',
    'Nov 13, 23',
    'Nov 14, 23',
    'Nov 15, 23',
    'Nov 16, 23',
    'Nov 17, 23',
    'Nov 18, 23',
    'Nov 19, 23',
    'Nov 20, 23',
    'Nov 21, 23',
    'Nov 22, 23' ],
    datasets: [
      { data: [ 90, 95, 87, 96, 97, 98, 93,95,97,98,99,90, 95, 89, 96, 97, 98, 93,95,97,98,99 ], label: 'Quote to Bill Match' },
      { data: [ 83, 87, 90, 87, 94, 97, 98,94,94,95,96,98, 93, 96, 93, 95, 87, 88,98,93,95,91], label: 'Quote to NBS Match' },
      { data: [ 86, 97, 93, 87, 84, 92, 93,97,93,97,95,92, 98, 93, 95, 98, 97, 98,88,97,92,95], label: 'Quote to NBS Match' }

    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }
}
