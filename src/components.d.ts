/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RwCenter {
        "type": string;
    }
    interface RwCol {
    }
    interface RwContainer {
        "color": string;
        "height": string;
        "rounded": boolean;
        "type": string;
        "width": string;
    }
    interface RwElevatedButton {
        "custom": boolean;
        "text": string;
        "type": string;
    }
    interface RwFlatButton {
        "custom": boolean;
        "text": string;
        "type": string;
    }
    interface RwOutlinedButton {
        "custom": boolean;
        "text": string;
        "type": string;
    }
    interface RwPadding {
        "padding": string;
    }
    interface RwRow {
        "centered": boolean;
        "rtl": boolean;
        "stretch": boolean;
    }
}
export interface RwElevatedButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRwElevatedButtonElement;
}
export interface RwFlatButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRwFlatButtonElement;
}
export interface RwOutlinedButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRwOutlinedButtonElement;
}
declare global {
    interface HTMLRwCenterElement extends Components.RwCenter, HTMLStencilElement {
    }
    var HTMLRwCenterElement: {
        prototype: HTMLRwCenterElement;
        new (): HTMLRwCenterElement;
    };
    interface HTMLRwColElement extends Components.RwCol, HTMLStencilElement {
    }
    var HTMLRwColElement: {
        prototype: HTMLRwColElement;
        new (): HTMLRwColElement;
    };
    interface HTMLRwContainerElement extends Components.RwContainer, HTMLStencilElement {
    }
    var HTMLRwContainerElement: {
        prototype: HTMLRwContainerElement;
        new (): HTMLRwContainerElement;
    };
    interface HTMLRwElevatedButtonElement extends Components.RwElevatedButton, HTMLStencilElement {
    }
    var HTMLRwElevatedButtonElement: {
        prototype: HTMLRwElevatedButtonElement;
        new (): HTMLRwElevatedButtonElement;
    };
    interface HTMLRwFlatButtonElement extends Components.RwFlatButton, HTMLStencilElement {
    }
    var HTMLRwFlatButtonElement: {
        prototype: HTMLRwFlatButtonElement;
        new (): HTMLRwFlatButtonElement;
    };
    interface HTMLRwOutlinedButtonElement extends Components.RwOutlinedButton, HTMLStencilElement {
    }
    var HTMLRwOutlinedButtonElement: {
        prototype: HTMLRwOutlinedButtonElement;
        new (): HTMLRwOutlinedButtonElement;
    };
    interface HTMLRwPaddingElement extends Components.RwPadding, HTMLStencilElement {
    }
    var HTMLRwPaddingElement: {
        prototype: HTMLRwPaddingElement;
        new (): HTMLRwPaddingElement;
    };
    interface HTMLRwRowElement extends Components.RwRow, HTMLStencilElement {
    }
    var HTMLRwRowElement: {
        prototype: HTMLRwRowElement;
        new (): HTMLRwRowElement;
    };
    interface HTMLElementTagNameMap {
        "rw-center": HTMLRwCenterElement;
        "rw-col": HTMLRwColElement;
        "rw-container": HTMLRwContainerElement;
        "rw-elevated-button": HTMLRwElevatedButtonElement;
        "rw-flat-button": HTMLRwFlatButtonElement;
        "rw-outlined-button": HTMLRwOutlinedButtonElement;
        "rw-padding": HTMLRwPaddingElement;
        "rw-row": HTMLRwRowElement;
    }
}
declare namespace LocalJSX {
    interface RwCenter {
        "type"?: string;
    }
    interface RwCol {
    }
    interface RwContainer {
        "color"?: string;
        "height"?: string;
        "rounded"?: boolean;
        "type"?: string;
        "width"?: string;
    }
    interface RwElevatedButton {
        "custom"?: boolean;
        "onButtonclick"?: (event: RwElevatedButtonCustomEvent<any>) => void;
        "text"?: string;
        "type"?: string;
    }
    interface RwFlatButton {
        "custom"?: boolean;
        "onButtonclick"?: (event: RwFlatButtonCustomEvent<any>) => void;
        "text"?: string;
        "type"?: string;
    }
    interface RwOutlinedButton {
        "custom"?: boolean;
        "onButtonclick"?: (event: RwOutlinedButtonCustomEvent<any>) => void;
        "text"?: string;
        "type"?: string;
    }
    interface RwPadding {
        "padding"?: string;
    }
    interface RwRow {
        "centered"?: boolean;
        "rtl"?: boolean;
        "stretch"?: boolean;
    }
    interface IntrinsicElements {
        "rw-center": RwCenter;
        "rw-col": RwCol;
        "rw-container": RwContainer;
        "rw-elevated-button": RwElevatedButton;
        "rw-flat-button": RwFlatButton;
        "rw-outlined-button": RwOutlinedButton;
        "rw-padding": RwPadding;
        "rw-row": RwRow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rw-center": LocalJSX.RwCenter & JSXBase.HTMLAttributes<HTMLRwCenterElement>;
            "rw-col": LocalJSX.RwCol & JSXBase.HTMLAttributes<HTMLRwColElement>;
            "rw-container": LocalJSX.RwContainer & JSXBase.HTMLAttributes<HTMLRwContainerElement>;
            "rw-elevated-button": LocalJSX.RwElevatedButton & JSXBase.HTMLAttributes<HTMLRwElevatedButtonElement>;
            "rw-flat-button": LocalJSX.RwFlatButton & JSXBase.HTMLAttributes<HTMLRwFlatButtonElement>;
            "rw-outlined-button": LocalJSX.RwOutlinedButton & JSXBase.HTMLAttributes<HTMLRwOutlinedButtonElement>;
            "rw-padding": LocalJSX.RwPadding & JSXBase.HTMLAttributes<HTMLRwPaddingElement>;
            "rw-row": LocalJSX.RwRow & JSXBase.HTMLAttributes<HTMLRwRowElement>;
        }
    }
}
