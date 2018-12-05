import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare var window: any;

@Injectable()
export class RealtimeServiceProvider {
    public receivedSubject = new Subject<any>();
    public receivedUpdate = new Subject<any>();
    constructor() {
    
    }
    broadcastData(message) {
        this.receivedSubject.next(message);
    }
    broadcastUpdate(message) {
        this.receivedUpdate.next(message);
    }
}
