import { Component, OnInit, ViewEncapsulation, ViewChild,Input } from '@angular/core';
@Component({
    selector: 'tool-tip-cast',
    template: `<div class="tool-tip">
    <div class="tool-header">
        <span class="tip-title">Week {{rowData.wmWeek}}</span>
        <span>({{rowData.startDate}} - {{rowData.endDate}})</span>
    </div>
    <div class="tool-body">
        <div class="row">
            <div class="col-md-4">
                <div class="tip-hc-count">
                    <span>Total HC</span>
                    <span class="hc-value">{{rowData.totalHC}}</span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="tip-hc-count">
                    <span>Total HC</span>
                    <span class="hc-value">{{rowData.totalHC}}</span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="tip-hc-count">
                    <span>Total HC</span>
                    <span class="hc-value">{{rowData.totalHC}}</span>
                </div>
            </div>
        </div>
        <div class="tip-summery">
            <div class="summer-title">Total HC comparison:</div>
            <div class="summery-details">Week {{rowData.wmWeek}} v.s. Week {{rowData.wmWeek - 1}}: <span class="up">22</span></div>
            <div class="summery-details">Week {{rowData.wmWeek}} in FY18 v.s. Week {{rowData.wmWeek - 1}} in FY17: <span class="down">8</span></div>
        </div>
    </div>
    
    </div>`,
    styleUrls: ['./tooltip.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ToolTipCast implements OnInit {
    @Input() rowData;
    ngOnInit(){
        console.log(this.rowData);
    }
}

