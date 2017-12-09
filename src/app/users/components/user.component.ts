import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class UserComponent implements OnInit {

    myControl: FormControl = new FormControl();
    
      options = [
        'One',
        'Two',
        'Three'
      ];
    
      filteredOptions: Observable<string[]>;
    
       ngOnInit() {
          this.filteredOptions = this.myControl.valueChanges
             .startWith(null)
             .map(val => val ? this.filter(val) : this.options.slice());
       }
    
        filter(val: string): string[] {
          return this.options.filter(option =>
            option.toLowerCase().indexOf(val.toLowerCase()) === 0);
       }
    
    
}
