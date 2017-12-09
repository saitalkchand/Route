import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class GraphComponent implements OnInit {
    options: Object;
    options1: Object;
    options2: Object;
    rowData = {
        "fixedHC": 10,
        "variableHC": 20,
        "totalHC": 50,
        "wmWeek": 7,
        "turnOverHc": 0,
        "startDate": "2017-03-17",
        "endDate": "2018-01-19"
      }
    constructor(public router:Router){
        this.options = {
            chart: {
                type: 'column',
                width:800
            },
            title: {
                text: 'Efficiency Optimization by Branch'
            },
            xAxis: {
                categories: [
                    'Seattle HQ',
                    'San Francisco',
                    'Tokyo'
                ]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: 'Employees'
                }
            }, {
                title: {
                    text: 'Profit (millions)'
                },
                opposite: true
            }],
            legend: {
                shadow: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Employees',
                color: 'rgba(165,170,217,1)',
                data: [150, 100, 50],
                pointPadding: 0.3,
                pointPlacement: 0
            }, {
                name: 'Employees Optimized',
                color: 'rgba(126,86,134,.9)',
                data: [140, 90, 40],
                pointPadding: 0.4,
                pointPlacement: 0
            }]
        };
        this.options1 = {
            chart: {
                type: 'column',
                width:800
            },
            title: {
                text: 'Efficiency Optimization by Branch'
            },
            xAxis: {
                categories: [
                    'Seattle HQ',
                    'San Francisco',
                    'Tokyo'
                ]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: 'Employees'
                }
            }, {
                title: {
                    text: 'Profit (millions)'
                },
                opposite: true
            }],
            legend: {
                shadow: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Employees',
                color: 'rgba(165,170,217,1)',
                data: [150, 100, 50],
                pointPadding: 0.3,
                pointPlacement: 0
            }, {
                name: 'Employees Optimized',
                color: 'rgba(126,86,134,.9)',
                data: [140, 90, 40],
                pointPadding: 0.4,
                pointPlacement: 0
            }]
        };
        this.options2 = {
            chart: {
                type: 'column',
                width:800
            },
            title: {
                text: 'Efficiency Optimization by Branch'
            },
            xAxis: {
                categories: [
                    'Seattle HQ',
                    'San Francisco',
                    'Tokyo'
                ]
            },
            yAxis: [{
                min: 0,
                title: {
                    text: 'Employees'
                }
            }, {
                title: {
                    text: 'Profit (millions)'
                },
                opposite: true
            }],
            legend: {
                shadow: false
            },
            tooltip: {
                enabled: false
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Employees',
                color: 'rgba(165,170,217,1)',
                data: [150, 100, 50],
                pointPadding: 0.3,
                pointPlacement: 0
            }, {
                name: 'Employees Optimized',
                color: 'rgba(126,86,134,.9)',
                data: [140, 90, 40],
                pointPadding: 0.4,
                pointPlacement: 0
            }]
        };
    }
    ngOnInit(){
        
    }
    
}
