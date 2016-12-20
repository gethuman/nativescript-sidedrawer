import { Color } from 'color';
import { ImageSource } from 'image-source';
export interface TnsSideDrawerItem {
    title: string;
    androidIcon?: string;
    iosIcon?: string;
}
export declare type TnsSideDrawerOptionsListener = (index: number) => void;
export interface TnsSideDrawerOptions {
    templates: Array<TnsSideDrawerItem>;
    textColor?: Color;
    headerBackgroundColor?: Color;
    backgroundColor?: Color;
    logoImage?: ImageSource;
    title?: string;
    subtitle?: string;
    listener: TnsSideDrawerOptionsListener;
    context?: any;
}
export declare class TnsSideDrawerCommonClass {
    protected static isBuilt: boolean;
    protected templates: Array<TnsSideDrawerItem>;
    protected textColor: Color;
    protected headerBackgroundColor: Color;
    protected backgroundColor: Color;
    protected logoImage: ImageSource;
    protected title: string;
    protected subtitle: string;
    protected listener: TnsSideDrawerOptionsListener;
    protected context: any;
    build(opts: TnsSideDrawerOptions): boolean;
}
