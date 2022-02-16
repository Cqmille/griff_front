import { r as registerInstance, h } from './index-c37bab2d.js';

const appRootCss = "main{margin-top:70px}";

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("body", null, h("header", null, h("publiq-nav", null)), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }), h("stencil-route", { url: "/connexion", component: "user-connexion" }), h("stencil-route", { url: "/monEspace", component: "user-monespace" }), h("stencil-route", { url: "/newRessource", component: "user-creationressource" }), h("stencil-route", { url: "/afficherRessource", component: "publiq-affressource" }), h("stencil-route", { url: "/tags-ressources/:tags", component: "publiq-ressource-tags" }), h("stencil-route", { component: "public-not-found" }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
