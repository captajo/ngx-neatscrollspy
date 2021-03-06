import { EventEmitter } from '@angular/core';
export declare class NestScrollspyService {
    changes$: EventEmitter<any>;
    private indexes;
    getIndex(key: string): any;
    setIndex(key: string, index: any): void;
    deleteIndex(key: string): void;
}
