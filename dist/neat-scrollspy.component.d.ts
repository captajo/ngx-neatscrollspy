import { ChangeDetectorRef, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NestScrollspyService } from './neat-scrollspy.service';
export interface NeatScrollspyOptions {
    id?: string;
}
export interface HighLightOptions {
    type: string;
    highlightColor?: string;
    defaultColor?: string;
    highlightTextColor?: string;
}
export interface SelectionOrder {
    type: string;
}
export interface alignOptions {
    type: string;
}
export declare class NeatScrollspyTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
    private ref;
    private elRef;
    private nestscrollspyservice;
    neatScrollspyOptions: NeatScrollspyOptions;
    highlightOptions?: HighLightOptions;
    selectionOrder?: SelectionOrder;
    alignOption?: alignOptions;
    currentScrollPosition: number;
    items: any[];
    itemsHash: any;
    itemsToHighlight: Array<string>;
    defaultOptions: NeatScrollspyOptions;
    defaultHighLight: HighLightOptions;
    defaultSelection: SelectionOrder;
    defaultAlign: alignOptions;
    changeStream$: any;
    scrollStream$: any;
    el: HTMLElement;
    currentPreviewHeader: any;
    previousPreviewHeader: any;
    lastScrollTop: number;
    autoAlignHeader: string[];
    scrollEventFunction: any;
    constructor(ref: ChangeDetectorRef, elRef: ElementRef, nestscrollspyservice: NestScrollspyService);
    ngOnInit(): void;
    addSpacing(position: any): string;
    update(): void;
    highlightItemInView(): void;
    highlightItem(el: any): void;
    deactivateHighlightItem(el: any): void;
    calculateAlignment(current: any, previous: any): 1 | 0 | -1;
    scrollTo(el: any): void;
    clearHighlightedField(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
