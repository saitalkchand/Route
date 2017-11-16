import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class UserComponent implements OnInit {

    constructor(public router:Router){

    }
    ngOnInit(){
        
    }
    
}
