import { TnsSideDrawerOptions, TnsSideDrawerCommonClass } from './nativescript-sidedrawer.common';
export declare class TnsSideDrawerClass extends TnsSideDrawerCommonClass {
    private isBusy;
    private isOpen;
    private drawer;
    build(opts: TnsSideDrawerOptions): any;
    toggle(force?: boolean): void;
    open(): void;
    close(): void;
    addGesture(): void;
    removeGesture(): void;
    private static getAppIcon();
}
export declare const TnsSideDrawer: TnsSideDrawerClass;
