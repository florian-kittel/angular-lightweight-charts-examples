import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Prices } from './prices';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LineChartComponent, HttpClientModule],
  template: `
    <h1>Lightweight Charts Examples</h1>
    <p>This is a short demo and playground to use <a href="https://tradingview.github.io/lightweight-charts/" target="_blank">Lightweight Charts™</a> with <a href="https://angular.io/" target="_blank">Angular</a>.</p>
    
    <app-line-chart *ngIf="prices.length" [prices]="prices"> 0"></app-line-chart>
  `,
})
export class App implements OnInit {
  prices: { time: string; value: number }[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Prices[]>('assets/prices.json')
      .subscribe((prices: Prices[]) => {
        this.prices = prices;
      });
  }
}

bootstrapApplication(App);
