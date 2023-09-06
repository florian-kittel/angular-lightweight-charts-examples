import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  HostListener,
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

  @HostListener('window:resize', [])
  onResize() {
    this.resize();
  }

  @Input() prices!: Prices[];

  chart!: any;

  constructor(private chartService: ChartService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    this.chart = this.chartService.createChart(
      this.chartContainer.nativeElement,
      {
        width: this.chartContainer.nativeElement.clientWidth,
        height: 400,
      }
    );

    const lineSeries = this.chart.addLineSeries();
    lineSeries.setData(this.prices);

    this.chart.timeScale().fitContent();
  }

  resize() {
    this.chart.resize(this.chartContainer.nativeElement.clientWidth, 400);
    this.chart.timeScale().fitContent();
  }
}
