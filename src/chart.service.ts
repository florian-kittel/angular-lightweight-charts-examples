import { Injectable } from '@angular/core';

import { createChart } from 'lightweight-charts';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  createChart = createChart;

}