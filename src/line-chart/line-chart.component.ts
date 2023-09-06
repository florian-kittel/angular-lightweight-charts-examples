import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

import { Prices } from '../prices';
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

  @Input() prices!: Prices[];

  constructor(private chartService: ChartService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const chart = this.chartService.createChart(
      this.chartContainer.nativeElement,
      {
        width: this.chartContainer.nativeElement.clientWidth,
        height: 400,
      }
    );

    const lineSeries = chart.addLineSeries();
    lineSeries.setData(this.prices);

    chart.timeScale().fitContent();
  }
}
