import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { filter, } from 'rxjs/operators';
import { from } from 'rxjs';
import 'rxjs/add/observable/from';
@Injectable({
    providedIn: 'root'
})
export class ActionsService {

    observable: Observable<any>;
    observer: Observer<any>;
    listeners: any;
    eventsSubject: any;
    events: Observable<unknown>;
    constructor() {
        this.listeners = {};
        this.eventsSubject = new Subject();

        this.events = from(this.eventsSubject);

        this.events.subscribe(
            (event: any) => {
                if (this.listeners[event.name]) {
                    for (let listener of this.listeners[event.name]) {
                        listener(...event.args);
                    }
                }
            });
    }

    on(name: any, listener: any) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
    }

    off(name: any, listener: any) {
        this.listeners[name] = this.listeners[name].filter((x: any) => x != listener);
    }

    broadcast(name: any, ...args: any) {
        this.eventsSubject.next({
            name,
            args
        });
    }
}
