import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    selector:'leftmenu',
    templateUrl: './leftmenu.component.html',
    styleUrls: ['./leftmenu.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class LeftMenuComponent implements OnInit {

    constructor(public router:Router){

    }
    ngOnInit(){
        
    }
    
}
