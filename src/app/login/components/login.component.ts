import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {

    constructor(public router:Router){

    }
    ngOnInit(){
        sessionStorage.isLogin = false;
    }
    login(){
        sessionStorage.isLogin = true;
        this.router.navigate(['/user']);
    }
}
