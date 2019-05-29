import { ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { NestScrollspyService } from './neat-scrollspy.service';
export interface NeatScrollSpyOptions {
    id?: string;
    selector?: string;
}
export declare class NeatScrollspyDirective implements AfterViewInit, OnInit, OnDestroy {
    private elRef;
    private nestscrollspyservice;
    options: NeatScrollSpyOptions;
    el: HTMLElement;
    previousEl: any;
    change$: any;
    defaultOptions: NeatScrollSpyOptions;
    constructor(elRef: ElementRef, nestscrollspyservice: NestScrollspyService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
