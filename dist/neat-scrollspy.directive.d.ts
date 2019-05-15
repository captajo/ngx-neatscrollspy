import { ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NestScrollspyService } from './neat-scrollspy.service';
export interface NeatScrollSpyOptions {
    id?: string;
    selector?: string;
}
export declare class NeatScrollspyDirective implements AfterViewInit, OnInit {
    private elRef;
    private nestscrollspyservice;
    options: NeatScrollSpyOptions;
    el: HTMLElement;
    defaultOptions: NeatScrollSpyOptions;
    constructor(elRef: ElementRef, nestscrollspyservice: NestScrollspyService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
