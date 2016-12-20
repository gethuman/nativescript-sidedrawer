import { Page } from 'ui/page';
import { TnsSideDrawerOptions, TnsSideDrawerCommonClass } from './nativescript-sidedrawer.common';
export declare class TnsSideDrawerClass extends TnsSideDrawerCommonClass {
    private width;
    private isBusy;
    private origin;
    private isOpen;
    private backdrop;
    private stack;
    build(opts: TnsSideDrawerOptions): any;
    toggle(force?: boolean, duration?: number): void;
    open(): void;
    close(): void;
    private static ignorePan;
    addGesture(page: Page): void;
    removeGesture(page: Page): void;
    private static getAppIcon();
    private static math_clamp(x, a, b);
}
export declare const TnsSideDrawer: TnsSideDrawerClass;
