import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  PieChart: any;

  constructor() { }

  ngOnInit() {
    this.generarPieChart();
  }

  generarPieChart(){
    // pie chart:
    //https://canvasjs.com/html5-javascript-pie-chart/
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ["Vencidos", "Próximos a vencer", "Pendientes"],
        datasets: [{
          label: 'of Votes',
          data: [11, 3, 5],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          
          ],
          borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          
          ],
          borderWidth: 1.5
        }]
      }, 
      options: {
        title:{
          text:"Turnos",
          display:true
        },
        scales: {
          yAxes: [{
            ticks: {
                beginAtZero:true
            }
          }]
        }
      }
    });
  } // pieChart

}
