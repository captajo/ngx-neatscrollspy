import { Directive, ElementRef, AfterViewInit, Input, OnInit, OnDestroy } from '@angular/core';

import { NestScrollspyService } from './neat-scrollspy.service';

export interface NeatScrollSpyOptions {
    id?: string;
    selector?: string;
}

@Directive({ selector: '[neatScrollSpy]' })
export class NeatScrollspyDirective implements AfterViewInit, OnInit, OnDestroy {
    @Input('neatScrollSpy') public options: NeatScrollSpyOptions;

    public el: HTMLElement;
    public previousEl: any;
    public change$: any;

    public defaultOptions: NeatScrollSpyOptions = {
        id: 'neatSpyId',
        selector: 'neatHook'
    }

    constructor(
        private elRef: ElementRef,
        private nestscrollspyservice: NestScrollspyService
    ) {
        this.el = elRef.nativeElement;
    }

    ngOnInit() {
        if(!this.options) {
            this.options = {};
        }

        if(!this.options.selector) {
            return console.warn('NeatScrollspy required a selector to work');
        }

        this.options = Object.assign(this.defaultOptions, this.options);
        
    }

    ngAfterViewInit() {
        this.change$ = setInterval(() => { 
            if(this.previousEl != this.el.getElementsByClassName(this.options.selector)) {
                this.nestscrollspyservice.setIndex(this.options.id, this.el.getElementsByClassName(this.options.selector));
                this.previousEl = this.el.getElementsByClassName(this.options.selector);
            }
        }, 1000);
    }

    ngOnDestroy() {
        clearInterval(this.change$);
    }
}