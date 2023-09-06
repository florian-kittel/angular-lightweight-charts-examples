import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { ChartService } from '../chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
  standalone: true,
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartcontainer')
  chartContainer!: ElementRef;

  constructor(private chartService: ChartService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.chartContainer);
    if (this.chartContainer) {
      this.createChart();
    }
  }

  createChart() {
    const chart = this.chartService.createChart(this.chartContainer.nativeElement, {
      width: 400,
      height: 300,
    });

    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 },
      { time: '2019-04-17', value: 96.63 },
      { time: '2019-04-18', value: 76.64 },
      { time: '2019-04-19', value: 81.89 },
      { time: '2019-04-20', value: 74.43 },
    ]);
  }
}
