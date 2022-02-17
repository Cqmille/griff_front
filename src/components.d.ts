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
        "history": RouterHistory;
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface ModMonespace {
    }
    interface PublicNotFound {
    }
    interface PubliqAffressource {
    }
    interface PubliqFooter {
    }
    interface PubliqNav {
        "connected": boolean;
        "history": RouterHistory;
        "test": string;
    }
    interface PubliqRessourceTags {
        "match": any;
    }
    interface UserConnexion {
        "history": RouterHistory;
        "messageExt": string;
    }
    interface UserCreationressource {
    }
    interface UserInscription {
        "history": RouterHistory;
    }
    interface UserInscriptionValid {
        "history": RouterHistory;
    }
    interface UserMonespace {
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
    interface HTMLModMonespaceElement extends Components.ModMonespace, HTMLStencilElement {
    }
    var HTMLModMonespaceElement: {
        prototype: HTMLModMonespaceElement;
        new (): HTMLModMonespaceElement;
    };
    interface HTMLPublicNotFoundElement extends Components.PublicNotFound, HTMLStencilElement {
    }
    var HTMLPublicNotFoundElement: {
        prototype: HTMLPublicNotFoundElement;
        new (): HTMLPublicNotFoundElement;
    };
    interface HTMLPubliqAffressourceElement extends Components.PubliqAffressource, HTMLStencilElement {
    }
    var HTMLPubliqAffressourceElement: {
        prototype: HTMLPubliqAffressourceElement;
        new (): HTMLPubliqAffressourceElement;
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
    interface HTMLPubliqRessourceTagsElement extends Components.PubliqRessourceTags, HTMLStencilElement {
    }
    var HTMLPubliqRessourceTagsElement: {
        prototype: HTMLPubliqRessourceTagsElement;
        new (): HTMLPubliqRessourceTagsElement;
    };
    interface HTMLUserConnexionElement extends Components.UserConnexion, HTMLStencilElement {
    }
    var HTMLUserConnexionElement: {
        prototype: HTMLUserConnexionElement;
        new (): HTMLUserConnexionElement;
    };
    interface HTMLUserCreationressourceElement extends Components.UserCreationressource, HTMLStencilElement {
    }
    var HTMLUserCreationressourceElement: {
        prototype: HTMLUserCreationressourceElement;
        new (): HTMLUserCreationressourceElement;
    };
    interface HTMLUserInscriptionElement extends Components.UserInscription, HTMLStencilElement {
    }
    var HTMLUserInscriptionElement: {
        prototype: HTMLUserInscriptionElement;
        new (): HTMLUserInscriptionElement;
    };
    interface HTMLUserInscriptionValidElement extends Components.UserInscriptionValid, HTMLStencilElement {
    }
    var HTMLUserInscriptionValidElement: {
        prototype: HTMLUserInscriptionValidElement;
        new (): HTMLUserInscriptionValidElement;
    };
    interface HTMLUserMonespaceElement extends Components.UserMonespace, HTMLStencilElement {
    }
    var HTMLUserMonespaceElement: {
        prototype: HTMLUserMonespaceElement;
        new (): HTMLUserMonespaceElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "mod-monespace": HTMLModMonespaceElement;
        "public-not-found": HTMLPublicNotFoundElement;
        "publiq-affressource": HTMLPubliqAffressourceElement;
        "publiq-footer": HTMLPubliqFooterElement;
        "publiq-nav": HTMLPubliqNavElement;
        "publiq-ressource-tags": HTMLPubliqRessourceTagsElement;
        "user-connexion": HTMLUserConnexionElement;
        "user-creationressource": HTMLUserCreationressourceElement;
        "user-inscription": HTMLUserInscriptionElement;
        "user-inscription-valid": HTMLUserInscriptionValidElement;
        "user-monespace": HTMLUserMonespaceElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "history"?: RouterHistory;
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface ModMonespace {
    }
    interface PublicNotFound {
    }
    interface PubliqAffressource {
    }
    interface PubliqFooter {
    }
    interface PubliqNav {
        "connected"?: boolean;
        "history"?: RouterHistory;
        "test"?: string;
    }
    interface PubliqRessourceTags {
        "match"?: any;
    }
    interface UserConnexion {
        "history"?: RouterHistory;
        "messageExt"?: string;
    }
    interface UserCreationressource {
    }
    interface UserInscription {
        "history"?: RouterHistory;
    }
    interface UserInscriptionValid {
        "history"?: RouterHistory;
    }
    interface UserMonespace {
        "history"?: RouterHistory;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "mod-monespace": ModMonespace;
        "public-not-found": PublicNotFound;
        "publiq-affressource": PubliqAffressource;
        "publiq-footer": PubliqFooter;
        "publiq-nav": PubliqNav;
        "publiq-ressource-tags": PubliqRessourceTags;
        "user-connexion": UserConnexion;
        "user-creationressource": UserCreationressource;
        "user-inscription": UserInscription;
        "user-inscription-valid": UserInscriptionValid;
        "user-monespace": UserMonespace;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "mod-monespace": LocalJSX.ModMonespace & JSXBase.HTMLAttributes<HTMLModMonespaceElement>;
            "public-not-found": LocalJSX.PublicNotFound & JSXBase.HTMLAttributes<HTMLPublicNotFoundElement>;
            "publiq-affressource": LocalJSX.PubliqAffressource & JSXBase.HTMLAttributes<HTMLPubliqAffressourceElement>;
            "publiq-footer": LocalJSX.PubliqFooter & JSXBase.HTMLAttributes<HTMLPubliqFooterElement>;
            "publiq-nav": LocalJSX.PubliqNav & JSXBase.HTMLAttributes<HTMLPubliqNavElement>;
            "publiq-ressource-tags": LocalJSX.PubliqRessourceTags & JSXBase.HTMLAttributes<HTMLPubliqRessourceTagsElement>;
            "user-connexion": LocalJSX.UserConnexion & JSXBase.HTMLAttributes<HTMLUserConnexionElement>;
            "user-creationressource": LocalJSX.UserCreationressource & JSXBase.HTMLAttributes<HTMLUserCreationressourceElement>;
            "user-inscription": LocalJSX.UserInscription & JSXBase.HTMLAttributes<HTMLUserInscriptionElement>;
            "user-inscription-valid": LocalJSX.UserInscriptionValid & JSXBase.HTMLAttributes<HTMLUserInscriptionValidElement>;
            "user-monespace": LocalJSX.UserMonespace & JSXBase.HTMLAttributes<HTMLUserMonespaceElement>;
        }
    }
}
