import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  template: `
    <h1>Lightweight Charts Examples</h1>
    <p>This is a short demo and playground to use <a href="https://tradingview.github.io/lightweight-charts/" target="_blank">Lightweight Charts™</a> with <a href="https://angular.io/" target="_blank">Angular</a>.</p>
    
    <app-line-chart></app-line-chart>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
