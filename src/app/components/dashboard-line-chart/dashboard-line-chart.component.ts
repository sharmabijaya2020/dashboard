import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';

// import Annotation from 'chartjs-plugin-annotation';

// import * as ChartAnnotation from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-dashboard-line-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard-line-chart.component.html',
  styleUrl: './dashboard-line-chart.component.css'
})
export class DashboardLineChartComponent {

  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '',
      'Oct 18, 23',
      'Oct 19, 23',
      'Oct 20, 23',
      'Oct 21, 23',
      'Oct 22, 23',
      'Oct 23, 23',
      'Oct 24, 23',
      'Oct 25, 23',
      'Oct 26, 23',
      'Oct 27, 23',
      'Oct 28, 23',
      'Oct 29, 23',
      'Oct 30, 23',
      'Nov 01, 23',
      'Nov 02, 23',
      'Nov 03, 23',
      'Nov 03, 23',
      'Nov 04, 23',
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
      'Nov 22, 23'


    ],
    datasets: [
      {
        data: [ 90, 95, 87, 96, 97, 98, 93,95,97,98,99,90, 95, 89, 96, 97, 98, 93,95,97,98,99,90, 95, 87, 96, 97, 98, 93,95,97,98,99,90, 95, 89, 96, 97, 98, 93,95,97,98,99 ],
        label: 'Quote vs NBS VS Bill Match % Trend',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
      },
      {
        data: [ 97, 87, 90, 87, 94, 97, 98,94,94,95,96,98, 93, 96, 93, 95, 87, 88,98,93,95,91,83, 87, 90, 87, 94, 97, 98,94,94,95,96,98, 93, 96, 93, 95, 87, 88,98,93,95,91 ],
        label: '',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
       }
      //,
      // {
      //   data: [ 81, 84, 98, 89, 94, 95, 97,98,93,94,96,98, 92, 89, 99, 93, 94, 99,92,99,93,97 ],
      //   label: '',
      //   pointBackgroundColor: 'rgba(77,83,96,1)',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(77,83,96,1)',
      // }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }

}
