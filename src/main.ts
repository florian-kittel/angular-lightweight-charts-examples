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
    <p>Made with Angular</p>
    <app-line-chart></app-line-chart>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
