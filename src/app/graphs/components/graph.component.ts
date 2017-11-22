import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class GraphComponent implements OnInit {

    constructor(public router:Router){

    }
    ngOnInit(){
        
    }
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true,
        tooltips: {
            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = "<table></table>"
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = "0";
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = "1";
                tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._fontFamily;
                tooltipEl.style.fontSize = tooltipModel.fontSize;
                tooltipEl.style.fontStyle = tooltipModel._fontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.background = '#fff';
            }
        }
      };
      public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
     
      public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
      ];
     
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
     
      public chartHovered(e:any):void {
        console.log(e);
      }
}
