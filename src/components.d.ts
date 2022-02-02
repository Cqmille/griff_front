/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface PublicNotFound {
    }
    interface PubliqFooter {
    }
    interface PubliqNav {
    }
    interface UserConnexion {
        "history": RouterHistory;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLPublicNotFoundElement extends Components.PublicNotFound, HTMLStencilElement {
    }
    var HTMLPublicNotFoundElement: {
        prototype: HTMLPublicNotFoundElement;
        new (): HTMLPublicNotFoundElement;
    };
    interface HTMLPubliqFooterElement extends Components.PubliqFooter, HTMLStencilElement {
    }
    var HTMLPubliqFooterElement: {
        prototype: HTMLPubliqFooterElement;
        new (): HTMLPubliqFooterElement;
    };
    interface HTMLPubliqNavElement extends Components.PubliqNav, HTMLStencilElement {
    }
    var HTMLPubliqNavElement: {
        prototype: HTMLPubliqNavElement;
        new (): HTMLPubliqNavElement;
    };
    interface HTMLUserConnexionElement extends Components.UserConnexion, HTMLStencilElement {
    }
    var HTMLUserConnexionElement: {
        prototype: HTMLUserConnexionElement;
        new (): HTMLUserConnexionElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "public-not-found": HTMLPublicNotFoundElement;
        "publiq-footer": HTMLPubliqFooterElement;
        "publiq-nav": HTMLPubliqNavElement;
        "user-connexion": HTMLUserConnexionElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface PublicNotFound {
    }
    interface PubliqFooter {
    }
    interface PubliqNav {
    }
    interface UserConnexion {
        "history"?: RouterHistory;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "public-not-found": PublicNotFound;
        "publiq-footer": PubliqFooter;
        "publiq-nav": PubliqNav;
        "user-connexion": UserConnexion;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "public-not-found": LocalJSX.PublicNotFound & JSXBase.HTMLAttributes<HTMLPublicNotFoundElement>;
            "publiq-footer": LocalJSX.PubliqFooter & JSXBase.HTMLAttributes<HTMLPubliqFooterElement>;
            "publiq-nav": LocalJSX.PubliqNav & JSXBase.HTMLAttributes<HTMLPubliqNavElement>;
            "user-connexion": LocalJSX.UserConnexion & JSXBase.HTMLAttributes<HTMLUserConnexionElement>;
        }
    }
}
