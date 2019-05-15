import {
    Component,
    ChangeDetectorRef,
    Injectable,
    Input,
    ElementRef,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ChangeDetectionStrategy
} from '@angular/core';

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

@Injectable()
@Component({
    selector: 'neat-scrollspy-template',
    template: `
    <div #container>
      <ul class="nav78783838738 flex-column menu pl-2">
        <li *ngFor="let item of items; let i = index">
          <a id="{{ neatScrollspyOptions.id }}{{ i }}" (click)="scrollTo(item.el)"><span [innerHTML]="addSpacing(item.position)"></span>{{ item.content }}</a>
        </li>
      </ul>
    </div>
    `,
    styles:[`
        .nav78783838738 {
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
        }
        .nav78783838738 > li {
            position: relative;
            display: block;
        }
        .nav78783838738 > li > a{
            position: relative;
            display: block;
            padding: 10px 15px;
            text-decoration: none;
            cursor: pointer;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            padding: 0px;
            background-color: #FFFFF;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NeatScrollspyTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() public neatScrollspyOptions: NeatScrollspyOptions;
    @Input() public highlightOptions?: HighLightOptions;
    @Input() public selectionOrder?: SelectionOrder;
    @Input() public alignOption?: alignOptions;

    public currentScrollPosition: number;
    public items: any[] = [];
    public itemsHash: any = {};
    public itemsToHighlight: Array<string> = [];

    public defaultOptions: NeatScrollspyOptions = {
        id: 'neatSpyId',
    };

    public defaultHighLight: HighLightOptions = {
        type: 'bold',
        highlightColor: 'blue',
        defaultColor: 'black',
        highlightTextColor: 'white'
    }

    public defaultSelection: SelectionOrder = {
        type: 'first'
    }

    public defaultAlign: alignOptions = {
        type: 'straight'
    };

    public changeStream$: any;
    public scrollStream$: any;

    public el: HTMLElement;

    public currentPreviewHeader: any = null;
    public previousPreviewHeader: any = null;
    public lastScrollTop: number = 0;
    public autoAlignHeader: string[] = ['H1', 'H2', 'H3', 'H4', 'H5'];
    public scrollEventFunction;

    constructor(
        private ref: ChangeDetectorRef,
        private elRef: ElementRef,
        private nestscrollspyservice: NestScrollspyService,
    ) {
        this.el = elRef.nativeElement;
    }

    ngOnInit() {
        if (!this.neatScrollspyOptions) {
            this.neatScrollspyOptions = {};
        }

        this.neatScrollspyOptions = Object.assign(this.defaultOptions, this.neatScrollspyOptions);
        this.highlightOptions = Object.assign(this.defaultHighLight, this.highlightOptions);
        this.selectionOrder = Object.assign(this.defaultSelection, this.selectionOrder);
        this.alignOption = Object.assign(this.defaultAlign, this.alignOption);

        this.changeStream$ = this.nestscrollspyservice.changes$.subscribe((e: any) => {
            if (e.index === this.neatScrollspyOptions.id) {
                if (e.change === 'delete') {
                    this.update();
                } else if (e.change === 'set') {
                    this.update();
                }
            }
        });

        
    }

    addSpacing(position) {
        let space = '';
        for(let i = 0; i < (position * 2); i++) {
            space += '&nbsp; ';
        }
        return space;
    }

    update() {
        this.items = [];
        let items: Array<any> = this.nestscrollspyservice.getIndex(this.neatScrollspyOptions.id);

        if (!items || !items.length) {
            return;
        }

        let previousIndex = 0;
        let currentAlign = 0;
        for (let i = 0; i < items.length; i++) {
            previousIndex = (i == 0)? 0 : (i -1);
            let position = 0;
            if(this.alignOption.type == 'auto') {
                // previousAlign = currentAlign;
                position = this.calculateAlignment(items[i].tagName, items[previousIndex].tagName);
            } else if(this.alignOption.type == 'manual') {
                position = Number((items[i].dataset.align) ? items[i].dataset.align : 0);
            }

            currentAlign = currentAlign + position;
            if(currentAlign < 0) {
                currentAlign = 0;
            }
            this.items.push({
                content: items[i].innerHTML,
                el: items[i],
                position: currentAlign
            });
        }

        setTimeout(() => {
            this.ref.markForCheck();
            window.dispatchEvent(new Event('scroll'));
        }, 500);

    }

    highlightItemInView() {
        let st;
        let direction = '';
        let check = false;

        if (!this.items.length) {
            return;
        }

        this.items.map((item: any, index) => {
            let currentHeader = item.el;
            let rect = currentHeader.getBoundingClientRect();
            st = window.pageYOffset || document.documentElement.scrollTop;

            if (st > this.lastScrollTop) {
                // scroll down
                direction = 'down';
            } else {
                // scroll up
                direction = 'up';
            }

            if (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                if(this.selectionOrder.type == 'first') {
                    if(!check) {
                        this.highlightItem(document.getElementById(this.neatScrollspyOptions.id + index));

                        if (this.currentPreviewHeader !== index) {
                            this.previousPreviewHeader = this.currentPreviewHeader;
                        }
                        this.currentPreviewHeader = index;
                    } else {
                        this.deactivateHighlightItem(document.getElementById(this.neatScrollspyOptions.id + index));
                    }
                } else if(this.selectionOrder.type == 'all') {
                    this.highlightItem(document.getElementById(this.neatScrollspyOptions.id + index));

                    if (this.currentPreviewHeader !== index) {
                        this.previousPreviewHeader = this.currentPreviewHeader;
                    }
                    this.currentPreviewHeader = index;
                }

                check = true;
            } else {
                if (this.currentPreviewHeader !== index) {
                    this.deactivateHighlightItem(document.getElementById(this.neatScrollspyOptions.id + index));
                }

                if ((
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom > (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right > (window.innerWidth || document.documentElement.clientWidth) &&
                    this.currentPreviewHeader == index
                )) {
                    if (this.previousPreviewHeader) {
                        this.highlightItem(document.getElementById(this.neatScrollspyOptions.id + this.previousPreviewHeader));
                    }
                }
            }
        });
    }

    highlightItem(el) {
        if(!el) {
            return;
        }

        if(this.highlightOptions.type == 'bold') {
            el.style.fontWeight = 'bold';
            el.style.color = this.highlightOptions.highlightColor;
        } else if(this.highlightOptions.type == 'background-color') {
            el.style.backgroundColor = this.highlightOptions.highlightColor;
            el.style.color = this.highlightOptions.highlightTextColor;
        }
    }

    deactivateHighlightItem(el) {
        if(!el) {
            return;
        }

        el.removeAttribute('style');
        if(this.highlightOptions.type == 'bold') {
            el.style.color = this.highlightOptions.defaultColor;
        } else if(this.highlightOptions.type == 'background-color') {
            el.style.color = this.highlightOptions.defaultColor;
        }
    }

    calculateAlignment(current, previous) {
        let currentIndex = this.autoAlignHeader.indexOf(current);
        let previousIndex = -1;
        previousIndex = this.autoAlignHeader.indexOf(previous);
        
        // if current item is not identified
        if(currentIndex === -1 || previousIndex === -1) {
            return 0;
        }

        // if previous is not identified
        if(currentIndex > previousIndex) {
            return 1;
        } else if (currentIndex === previousIndex) {
            return 0;
        }
        return -1;
    }

    scrollTo(el) {
        el.scrollIntoView();
        this.clearHighlightedField();
        this.highlightItemInView();
    }

    clearHighlightedField() {
        this.items.map((item: any, index) => {
            this.deactivateHighlightItem(document.getElementById(this.neatScrollspyOptions.id + index));
        });
    }

    ngAfterViewInit() {
        let scrollEventFunction;
        window.addEventListener('scroll', scrollEventFunction = (event) => {
            setTimeout(() => {
                this.highlightItemInView();
            }, 500);
        });

        this.scrollEventFunction = scrollEventFunction;
    }

    ngOnDestroy() {
        let scrollEventFunction = this.scrollEventFunction;
        this.changeStream$.unsubscribe();
        window.removeEventListener('scroll', scrollEventFunction);
    }
}