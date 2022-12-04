// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7ZoMj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _addRecipeViewJs = require("./components/add-recipe-view/add-recipe-view.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _bookmarkViewJs = require("./components/nav-bar/bookmark-view/bookmark-view.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _copyrightJs = require("./components/copyright/copyright.js");
var _copyrightJsDefault = parcelHelpers.interopDefault(_copyrightJs);
var _navBarJs = require("./components/nav-bar/nav-bar.js");
var _navBarJsDefault = parcelHelpers.interopDefault(_navBarJs);
var _paginationViewJs = require("./components/result-view/pagination-view/pagination-view.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _recipeViewJs = require("./components/recipe-view/recipe-view.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _resultViewJs = require("./components/result-view/result-view.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _searchBarJs = require("./components/search-bar/search-bar.js");
var _searchBarJsDefault = parcelHelpers.interopDefault(_searchBarJs);
var _logoPng = require("url:../img/logo.png");
var _logoPngDefault = parcelHelpers.interopDefault(_logoPng);
const declarations = [
    (0, _addRecipeViewJsDefault.default),
    (0, _copyrightJsDefault.default),
    (0, _navBarJsDefault.default),
    (0, _recipeViewJsDefault.default),
    (0, _resultViewJsDefault.default),
    (0, _searchBarJsDefault.default)
];
// TODO: how to wait for all the elements to be loaded?
class App extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.declare(declarations);
        this.innerHTML = `
    <div class="container">
      <header class="header">
        <img src="${0, _logoPngDefault.default}" alt="Logo" class="header__logo" />
        <app-search-bar></app-search-bar>
        <app-nav-bar class="nav"></app-nav-bar>
      </header>

      <div class="search-results" id="search-results">
        <app-result-view></app-result-view>
        <app-copy-right></app-copy-right>
      </div>

      <app-recipe-view class="recipe"></app-recipe-view>
    </div>
    <app-add-recipe-view></app-add-recipe-view>
    `;
    }
    declare(declarations) {
        declarations.forEach((declaration)=>{
            let declarationName = "";
            for (const char of declaration.name)if (char.toUpperCase() === char) declarationName += "-" + char.toLowerCase();
            else declarationName += char;
            // console.log(declarationName.slice(1));
            customElements.define(`app-${declarationName.slice(1)}`, declaration);
        });
    }
}
customElements.define("app-root", App);

},{"./components/add-recipe-view/add-recipe-view.js":"kQOlQ","./components/nav-bar/bookmark-view/bookmark-view.js":"3g9B8","./components/copyright/copyright.js":"j4IVx","./components/nav-bar/nav-bar.js":"cx2ih","./components/result-view/pagination-view/pagination-view.js":"4eRvL","./components/recipe-view/recipe-view.js":"gHASO","./components/result-view/result-view.js":"EFEjU","./components/search-bar/search-bar.js":"4R6xY","url:../img/logo.png":"1tVao","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kQOlQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addRecipeModel = require("./add-recipe-model");
var _addRecipeModelDefault = parcelHelpers.interopDefault(_addRecipeModel);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _helpers = require("../../helpers");
var _rxjs = require("rxjs");
class AddRecipeView extends HTMLElement {
    _parentElement;
    _message;
    _window;
    _overlay;
    _btnOpen;
    _btnClose;
    model;
    constructor(){
        super();
        this.setModel((0, _addRecipeModelDefault.default));
    }
    setModel(model) {
        this.model = model;
    }
    connectedCallback() {
        this.innerHTML = `
    <div class="overlay hidden"></div>
    <div class="add-recipe-window hidden">
      <button class="btn--close-modal">&times;</button>
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST123" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST123" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST123" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST123" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>
    </div>
    `;
        this.ready();
    }
    ready() {
        (0, _helpers.waitForElm)(".overlay").then(()=>{
            // waiting for the element from the nav-bar component
            (0, _helpers.waitForElm)(".nav__btn--add-recipe").then(()=>{
                const parentElement = document.querySelector(".upload");
                this._message = "Recipe was successfully uploaded :)";
                this._window = document.querySelector(".add-recipe-window");
                this._overlay = document.querySelector(".overlay");
                this._btnOpen = document.querySelector(".nav__btn--add-recipe");
                this._btnClose = document.querySelector(".btn--close-modal");
                (this.model && parentElement) ?? this.model.setParentElement(parentElement);
                this.addHandlerOpenWindow();
                this.addHandlerCloseWindow();
                this.addHandlerUploadRecipe(parentElement, this.model);
            });
        });
    }
    addHandlerOpenWindow() {
        // console.log('test the add recipe view');
        // console.log('this._btnOpen', this._btnOpen);
        // console.log('this._overlay', this._overlay);
        // console.log('this._window', this._window);
        (0, _rxjs.fromEvent)(this._btnOpen, "click").subscribe(()=>{
            this._overlay.classList.remove("hidden");
            this._window.classList.remove("hidden");
        });
    }
    addHandlerCloseWindow() {
        (0, _rxjs.fromEvent)(this._btnClose, "click").subscribe(()=>{
            this._overlay.classList.add("hidden");
            this._window.classList.add("hidden");
        });
    }
    addHandlerUploadRecipe(parentElement, model) {
        (0, _rxjs.fromEvent)(parentElement, "submit").subscribe((e)=>{
            // 1) stop form from submitting
            e.preventDefault();
            // 2) construct FormData object
            const dataArr = [
                ...new FormData(parentElement)
            ];
            const data = Object.fromEntries(dataArr);
            // 3) upload recipe
            // 3.1) render spinner while waiting for response
            // 3.2) post recipe to server; update current recipe state
            // 3.3) render success message
            // 3.4) update bookmarks view
            model.uploadRecipe(parentElement, data);
            // 4) close the form window
            setTimeout(()=>{
                this._overlay.classList.add("hidden");
                this._window.classList.add("hidden");
                this.connectedCallback(); // restore initial state
            }, 1500);
        });
    }
}
exports.default = AddRecipeView;

},{"./add-recipe-model":"g0Bxx","url:../../../img/icons.svg":"gg8PR","../../helpers":"hGI1E","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0Bxx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpersJs = require("../../helpers.js");
var _configJs = require("../../config.js");
var _viewServiceJs = require("../../services/ui-services/viewService.js");
var _viewServiceJsDefault = parcelHelpers.interopDefault(_viewServiceJs);
var _recipeServiceJs = require("../../services/ui-services/recipeService.js");
var _recipeServiceJsDefault = parcelHelpers.interopDefault(_recipeServiceJs);
var _bookmarkServiceJs = require("../../services/bookmarkService.js");
var _bookmarkServiceJsDefault = parcelHelpers.interopDefault(_bookmarkServiceJs);
var _rxjs = require("rxjs");
class AddRecipeModel {
    parentElementObserver = new (0, _rxjs.BehaviorSubject)(undefined);
    viewService;
    recipeService;
    recipeObservable = new (0, _rxjs.BehaviorSubject)({});
    constructor(){
        this.setViewService((0, _viewServiceJsDefault.default));
        this.setRecipeService((0, _recipeServiceJsDefault.default));
    }
    setViewService(service) {
        this.viewService = service;
    }
    setRecipeService(service) {
        this.recipeService = service;
    }
    setParentElement(parentElement) {
        this.parentElementObserver.next(parentElement);
    }
    uploadRecipe(parentElement, newRecipe) {
        // 1) render spinner
        this.viewService.renderSpinner(parentElement);
        // 2) upload recipe to server
        this.postRecipe(newRecipe);
        // 3) success message
        const message = "Recipe was successfully uploaded :)";
        this.viewService.renderMessage(parentElement, message);
        // 4) update bookmarks state
        this.updateBookmarks();
    }
    updateBookmarks() {
        this.recipeObservable.subscribe((recipe)=>{
            if (Object.keys(recipe).length > 0) {
                console.log("recipe from updateBookmarks", recipe);
                window.history.pushState(null, "", `#${recipe.id}`);
                const bookmarks = localStorage.getItem("bookmarks") ? JSON.parse(localStorage.getItem("bookmarks")) : [];
                bookmarks.push(recipe);
                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                (0, _bookmarkServiceJsDefault.default).getBookmarksObservable().next(bookmarks);
            }
        });
    }
    postRecipe(newRecipe) {
        try {
            const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
                // const ingArr = ing[1].replaceAll(' ', '').split(',');
                const ingArr = ing[1].split(",").map((el)=>el.trim());
                if (ingArr.length !== 3) throw new Error("Wrong ingredient format! Please use the correct format :)");
                const [quantity, unit, description] = ingArr;
                return {
                    quantity: quantity ? +quantity : null,
                    unit,
                    description
                };
            });
            const recipe = {
                title: newRecipe.title,
                source_url: newRecipe.sourceUrl,
                image_url: newRecipe.image,
                publisher: newRecipe.publisher,
                cooking_time: +newRecipe.cookingTime,
                servings: +newRecipe.servings,
                ingredients
            };
            // POST request
            // return from(AJAX(`${API_URL}?key=${process.env.FORKIFY_API_KEY}`, recipe));
            (0, _rxjs.from)((0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${"b1f8f5d1-f59d-4444-b99c-a12bb1d2ff02"}`, recipe)).subscribe((data)=>{
                console.log(data);
                // update recipe state
                this.recipeObservable.next((0, _helpersJs.createRecipeObject)(data));
            });
        } catch (error) {
            throw error;
        }
    }
}
exports.default = new AddRecipeModel();

},{"../../helpers.js":"hGI1E","../../config.js":"k5Hzs","../../services/ui-services/viewService.js":"a8rEx","../../services/ui-services/recipeService.js":"9WBB5","../../services/bookmarkService.js":"jj733","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON);
parcelHelpers.export(exports, "createRecipeObject", ()=>createRecipeObject);
parcelHelpers.export(exports, "waitForElm", ()=>waitForElm);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const getJSON = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};
const sendJSON = async function(url, uploadData) {
    try {
        const fetchPro = fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        });
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const waitForElm = function(selector) {
    return new Promise((resolve)=>{
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));
        const observer = new MutationObserver((mutations)=>{
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};
/* test block */ waitForElm(".search-results").then((elm)=>{
    const observer = new MutationObserver((mutations)=>{
        mutations.forEach((mutation)=>{
        // console.warn(mutation);
        });
    });
    observer.observe(elm, {
        childList: true,
        subtree: true
    });
});

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "INITIAL_PAGE", ()=>INITIAL_PAGE);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 10;
const INITIAL_PAGE = 1;
const RES_PER_PAGE = 10;
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a8rEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ViewService {
    constructor(){}
    render(render = true, parentElement = "", markup = "") {
        if (!render || !parentElement) return markup;
        parentElement.innerHTML = "";
        parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    clear(parentElement) {
        parentElement.innerHTML = "";
    }
    renderSpinner(parentElement) {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this.clear(parentElement);
        parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(parentElement, message) {
        if (!parentElement) return;
        const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
        try {
            this.clear(parentElement);
            parentElement.insertAdjacentHTML("afterbegin", markup);
        } catch (error) {
            console.error(error);
        }
    }
    renderMessage(parentElement, message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        try {
            this.clear(parentElement);
            parentElement.insertAdjacentHTML("afterbegin", markup);
        } catch (error) {
            console.error(error);
        }
    }
}
exports.default = new ViewService();

},{"url:../../../img/icons.svg":"gg8PR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gg8PR":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9WBB5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
class RecipeService {
    generateRecipeMarkup(recipe) {
        if (!recipe) return;
        return `
    <figure class="recipe__fig">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" crossorigin/>
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${recipe.servings - 1}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-minus-circle" ></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${recipe.servings + 1}">
            <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${recipe.key ? "" : "hidden"}">
        <svg>
          <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${0, _iconsSvgDefault.default}#icon-bookmark${recipe.bookmarked ? "-fill" : ""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map(this.generateIngredientsMarkup).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
    }
    generateIngredientsMarkup(ing) {
        return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new (0, _fractional.Fraction)(ing.quantity) : ""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit ?? ""}</span>
          ${ing.description}
        </div>
      </li>
    `;
    }
}
exports.default = new RecipeService();

},{"url:../../../img/icons.svg":"gg8PR","fractional":"3SU56","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== "undefined" && denominator) {
        if (typeof numerator === "number" && typeof denominator === "number") {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === "string" && typeof denominator === "string") {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === "undefined") {
        num = numerator; // swap variable names for legibility
        if (typeof num === "number") {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === "string") {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(" ");
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match("/")) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === "string" && a.match("/")) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split("/");
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === "string" && a.match(".")) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === "NaN") return "NaN";
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + "/" + denominator);
    return result.length > 0 ? result.join(" ") : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === "number") a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === "number") a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === "number" && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split(".")[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"jj733":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rxjs = require("rxjs");
class BookmarkService {
    bookmarksObservable = new (0, _rxjs.BehaviorSubject)([]);
    bookmarks = [];
    constructor(){
        this.loadBookmarks();
    }
    getBookmarksObservable() {
        return this.bookmarksObservable;
    }
    setBookmarkObservable(bookmark) {
        this.bookmarksObservable.next(bookmark);
    }
    loadBookmarks() {
        this.bookmarks = localStorage.getItem("bookmarks") ? JSON.parse(localStorage.getItem("bookmarks")) : [];
        this.bookmarksObservable.next(this.bookmarks);
    }
}
exports.default = new BookmarkService();

},{"rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLy7s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>(0, _observable.Observable));
parcelHelpers.export(exports, "ConnectableObservable", ()=>(0, _connectableObservable.ConnectableObservable));
parcelHelpers.export(exports, "observable", ()=>(0, _observable1.observable));
parcelHelpers.export(exports, "animationFrames", ()=>(0, _animationFrames.animationFrames));
parcelHelpers.export(exports, "Subject", ()=>(0, _subject.Subject));
parcelHelpers.export(exports, "BehaviorSubject", ()=>(0, _behaviorSubject.BehaviorSubject));
parcelHelpers.export(exports, "ReplaySubject", ()=>(0, _replaySubject.ReplaySubject));
parcelHelpers.export(exports, "AsyncSubject", ()=>(0, _asyncSubject.AsyncSubject));
parcelHelpers.export(exports, "asap", ()=>(0, _asap.asap));
parcelHelpers.export(exports, "asapScheduler", ()=>(0, _asap.asapScheduler));
parcelHelpers.export(exports, "async", ()=>(0, _async.async));
parcelHelpers.export(exports, "asyncScheduler", ()=>(0, _async.asyncScheduler));
parcelHelpers.export(exports, "queue", ()=>(0, _queue.queue));
parcelHelpers.export(exports, "queueScheduler", ()=>(0, _queue.queueScheduler));
parcelHelpers.export(exports, "animationFrame", ()=>(0, _animationFrame.animationFrame));
parcelHelpers.export(exports, "animationFrameScheduler", ()=>(0, _animationFrame.animationFrameScheduler));
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>(0, _virtualTimeScheduler.VirtualTimeScheduler));
parcelHelpers.export(exports, "VirtualAction", ()=>(0, _virtualTimeScheduler.VirtualAction));
parcelHelpers.export(exports, "Scheduler", ()=>(0, _scheduler.Scheduler));
parcelHelpers.export(exports, "Subscription", ()=>(0, _subscription.Subscription));
parcelHelpers.export(exports, "Subscriber", ()=>(0, _subscriber.Subscriber));
parcelHelpers.export(exports, "Notification", ()=>(0, _notification.Notification));
parcelHelpers.export(exports, "NotificationKind", ()=>(0, _notification.NotificationKind));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipe.pipe));
parcelHelpers.export(exports, "noop", ()=>(0, _noop.noop));
parcelHelpers.export(exports, "identity", ()=>(0, _identity.identity));
parcelHelpers.export(exports, "isObservable", ()=>(0, _isObservable.isObservable));
parcelHelpers.export(exports, "lastValueFrom", ()=>(0, _lastValueFrom.lastValueFrom));
parcelHelpers.export(exports, "firstValueFrom", ()=>(0, _firstValueFrom.firstValueFrom));
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>(0, _argumentOutOfRangeError.ArgumentOutOfRangeError));
parcelHelpers.export(exports, "EmptyError", ()=>(0, _emptyError.EmptyError));
parcelHelpers.export(exports, "NotFoundError", ()=>(0, _notFoundError.NotFoundError));
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>(0, _objectUnsubscribedError.ObjectUnsubscribedError));
parcelHelpers.export(exports, "SequenceError", ()=>(0, _sequenceError.SequenceError));
parcelHelpers.export(exports, "TimeoutError", ()=>(0, _timeout.TimeoutError));
parcelHelpers.export(exports, "UnsubscriptionError", ()=>(0, _unsubscriptionError.UnsubscriptionError));
parcelHelpers.export(exports, "bindCallback", ()=>(0, _bindCallback.bindCallback));
parcelHelpers.export(exports, "bindNodeCallback", ()=>(0, _bindNodeCallback.bindNodeCallback));
parcelHelpers.export(exports, "combineLatest", ()=>(0, _combineLatest.combineLatest));
parcelHelpers.export(exports, "concat", ()=>(0, _concat.concat));
parcelHelpers.export(exports, "connectable", ()=>(0, _connectable.connectable));
parcelHelpers.export(exports, "defer", ()=>(0, _defer.defer));
parcelHelpers.export(exports, "empty", ()=>(0, _empty.empty));
parcelHelpers.export(exports, "forkJoin", ()=>(0, _forkJoin.forkJoin));
parcelHelpers.export(exports, "from", ()=>(0, _from.from));
parcelHelpers.export(exports, "fromEvent", ()=>(0, _fromEvent.fromEvent));
parcelHelpers.export(exports, "fromEventPattern", ()=>(0, _fromEventPattern.fromEventPattern));
parcelHelpers.export(exports, "generate", ()=>(0, _generate.generate));
parcelHelpers.export(exports, "iif", ()=>(0, _iif.iif));
parcelHelpers.export(exports, "interval", ()=>(0, _interval.interval));
parcelHelpers.export(exports, "merge", ()=>(0, _merge.merge));
parcelHelpers.export(exports, "never", ()=>(0, _never.never));
parcelHelpers.export(exports, "of", ()=>(0, _of.of));
parcelHelpers.export(exports, "onErrorResumeNext", ()=>(0, _onErrorResumeNext.onErrorResumeNext));
parcelHelpers.export(exports, "pairs", ()=>(0, _pairs.pairs));
parcelHelpers.export(exports, "partition", ()=>(0, _partition.partition));
parcelHelpers.export(exports, "race", ()=>(0, _race.race));
parcelHelpers.export(exports, "range", ()=>(0, _range.range));
parcelHelpers.export(exports, "throwError", ()=>(0, _throwError.throwError));
parcelHelpers.export(exports, "timer", ()=>(0, _timer.timer));
parcelHelpers.export(exports, "using", ()=>(0, _using.using));
parcelHelpers.export(exports, "zip", ()=>(0, _zip.zip));
parcelHelpers.export(exports, "scheduled", ()=>(0, _scheduled.scheduled));
parcelHelpers.export(exports, "EMPTY", ()=>(0, _empty.EMPTY));
parcelHelpers.export(exports, "NEVER", ()=>(0, _never.NEVER));
parcelHelpers.export(exports, "config", ()=>(0, _config.config));
parcelHelpers.export(exports, "audit", ()=>(0, _audit.audit));
parcelHelpers.export(exports, "auditTime", ()=>(0, _auditTime.auditTime));
parcelHelpers.export(exports, "buffer", ()=>(0, _buffer.buffer));
parcelHelpers.export(exports, "bufferCount", ()=>(0, _bufferCount.bufferCount));
parcelHelpers.export(exports, "bufferTime", ()=>(0, _bufferTime.bufferTime));
parcelHelpers.export(exports, "bufferToggle", ()=>(0, _bufferToggle.bufferToggle));
parcelHelpers.export(exports, "bufferWhen", ()=>(0, _bufferWhen.bufferWhen));
parcelHelpers.export(exports, "catchError", ()=>(0, _catchError.catchError));
parcelHelpers.export(exports, "combineAll", ()=>(0, _combineAll.combineAll));
parcelHelpers.export(exports, "combineLatestAll", ()=>(0, _combineLatestAll.combineLatestAll));
parcelHelpers.export(exports, "combineLatestWith", ()=>(0, _combineLatestWith.combineLatestWith));
parcelHelpers.export(exports, "concatAll", ()=>(0, _concatAll.concatAll));
parcelHelpers.export(exports, "concatMap", ()=>(0, _concatMap.concatMap));
parcelHelpers.export(exports, "concatMapTo", ()=>(0, _concatMapTo.concatMapTo));
parcelHelpers.export(exports, "concatWith", ()=>(0, _concatWith.concatWith));
parcelHelpers.export(exports, "connect", ()=>(0, _connect.connect));
parcelHelpers.export(exports, "count", ()=>(0, _count.count));
parcelHelpers.export(exports, "debounce", ()=>(0, _debounce.debounce));
parcelHelpers.export(exports, "debounceTime", ()=>(0, _debounceTime.debounceTime));
parcelHelpers.export(exports, "defaultIfEmpty", ()=>(0, _defaultIfEmpty.defaultIfEmpty));
parcelHelpers.export(exports, "delay", ()=>(0, _delay.delay));
parcelHelpers.export(exports, "delayWhen", ()=>(0, _delayWhen.delayWhen));
parcelHelpers.export(exports, "dematerialize", ()=>(0, _dematerialize.dematerialize));
parcelHelpers.export(exports, "distinct", ()=>(0, _distinct.distinct));
parcelHelpers.export(exports, "distinctUntilChanged", ()=>(0, _distinctUntilChanged.distinctUntilChanged));
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>(0, _distinctUntilKeyChanged.distinctUntilKeyChanged));
parcelHelpers.export(exports, "elementAt", ()=>(0, _elementAt.elementAt));
parcelHelpers.export(exports, "endWith", ()=>(0, _endWith.endWith));
parcelHelpers.export(exports, "every", ()=>(0, _every.every));
parcelHelpers.export(exports, "exhaust", ()=>(0, _exhaust.exhaust));
parcelHelpers.export(exports, "exhaustAll", ()=>(0, _exhaustAll.exhaustAll));
parcelHelpers.export(exports, "exhaustMap", ()=>(0, _exhaustMap.exhaustMap));
parcelHelpers.export(exports, "expand", ()=>(0, _expand.expand));
parcelHelpers.export(exports, "filter", ()=>(0, _filter.filter));
parcelHelpers.export(exports, "finalize", ()=>(0, _finalize.finalize));
parcelHelpers.export(exports, "find", ()=>(0, _find.find));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndex.findIndex));
parcelHelpers.export(exports, "first", ()=>(0, _first.first));
parcelHelpers.export(exports, "groupBy", ()=>(0, _groupBy.groupBy));
parcelHelpers.export(exports, "ignoreElements", ()=>(0, _ignoreElements.ignoreElements));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _isEmpty.isEmpty));
parcelHelpers.export(exports, "last", ()=>(0, _last.last));
parcelHelpers.export(exports, "map", ()=>(0, _map.map));
parcelHelpers.export(exports, "mapTo", ()=>(0, _mapTo.mapTo));
parcelHelpers.export(exports, "materialize", ()=>(0, _materialize.materialize));
parcelHelpers.export(exports, "max", ()=>(0, _max.max));
parcelHelpers.export(exports, "mergeAll", ()=>(0, _mergeAll.mergeAll));
parcelHelpers.export(exports, "flatMap", ()=>(0, _flatMap.flatMap));
parcelHelpers.export(exports, "mergeMap", ()=>(0, _mergeMap.mergeMap));
parcelHelpers.export(exports, "mergeMapTo", ()=>(0, _mergeMapTo.mergeMapTo));
parcelHelpers.export(exports, "mergeScan", ()=>(0, _mergeScan.mergeScan));
parcelHelpers.export(exports, "mergeWith", ()=>(0, _mergeWith.mergeWith));
parcelHelpers.export(exports, "min", ()=>(0, _min.min));
parcelHelpers.export(exports, "multicast", ()=>(0, _multicast.multicast));
parcelHelpers.export(exports, "observeOn", ()=>(0, _observeOn.observeOn));
parcelHelpers.export(exports, "pairwise", ()=>(0, _pairwise.pairwise));
parcelHelpers.export(exports, "pluck", ()=>(0, _pluck.pluck));
parcelHelpers.export(exports, "publish", ()=>(0, _publish.publish));
parcelHelpers.export(exports, "publishBehavior", ()=>(0, _publishBehavior.publishBehavior));
parcelHelpers.export(exports, "publishLast", ()=>(0, _publishLast.publishLast));
parcelHelpers.export(exports, "publishReplay", ()=>(0, _publishReplay.publishReplay));
parcelHelpers.export(exports, "raceWith", ()=>(0, _raceWith.raceWith));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduce.reduce));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeat.repeat));
parcelHelpers.export(exports, "repeatWhen", ()=>(0, _repeatWhen.repeatWhen));
parcelHelpers.export(exports, "retry", ()=>(0, _retry.retry));
parcelHelpers.export(exports, "retryWhen", ()=>(0, _retryWhen.retryWhen));
parcelHelpers.export(exports, "refCount", ()=>(0, _refCount.refCount));
parcelHelpers.export(exports, "sample", ()=>(0, _sample.sample));
parcelHelpers.export(exports, "sampleTime", ()=>(0, _sampleTime.sampleTime));
parcelHelpers.export(exports, "scan", ()=>(0, _scan.scan));
parcelHelpers.export(exports, "sequenceEqual", ()=>(0, _sequenceEqual.sequenceEqual));
parcelHelpers.export(exports, "share", ()=>(0, _share.share));
parcelHelpers.export(exports, "shareReplay", ()=>(0, _shareReplay.shareReplay));
parcelHelpers.export(exports, "single", ()=>(0, _single.single));
parcelHelpers.export(exports, "skip", ()=>(0, _skip.skip));
parcelHelpers.export(exports, "skipLast", ()=>(0, _skipLast.skipLast));
parcelHelpers.export(exports, "skipUntil", ()=>(0, _skipUntil.skipUntil));
parcelHelpers.export(exports, "skipWhile", ()=>(0, _skipWhile.skipWhile));
parcelHelpers.export(exports, "startWith", ()=>(0, _startWith.startWith));
parcelHelpers.export(exports, "subscribeOn", ()=>(0, _subscribeOn.subscribeOn));
parcelHelpers.export(exports, "switchAll", ()=>(0, _switchAll.switchAll));
parcelHelpers.export(exports, "switchMap", ()=>(0, _switchMap.switchMap));
parcelHelpers.export(exports, "switchMapTo", ()=>(0, _switchMapTo.switchMapTo));
parcelHelpers.export(exports, "switchScan", ()=>(0, _switchScan.switchScan));
parcelHelpers.export(exports, "take", ()=>(0, _take.take));
parcelHelpers.export(exports, "takeLast", ()=>(0, _takeLast.takeLast));
parcelHelpers.export(exports, "takeUntil", ()=>(0, _takeUntil.takeUntil));
parcelHelpers.export(exports, "takeWhile", ()=>(0, _takeWhile.takeWhile));
parcelHelpers.export(exports, "tap", ()=>(0, _tap.tap));
parcelHelpers.export(exports, "throttle", ()=>(0, _throttle.throttle));
parcelHelpers.export(exports, "throttleTime", ()=>(0, _throttleTime.throttleTime));
parcelHelpers.export(exports, "throwIfEmpty", ()=>(0, _throwIfEmpty.throwIfEmpty));
parcelHelpers.export(exports, "timeInterval", ()=>(0, _timeInterval.timeInterval));
parcelHelpers.export(exports, "timeout", ()=>(0, _timeout.timeout));
parcelHelpers.export(exports, "timeoutWith", ()=>(0, _timeoutWith.timeoutWith));
parcelHelpers.export(exports, "timestamp", ()=>(0, _timestamp.timestamp));
parcelHelpers.export(exports, "toArray", ()=>(0, _toArray.toArray));
parcelHelpers.export(exports, "window", ()=>(0, _window.window));
parcelHelpers.export(exports, "windowCount", ()=>(0, _windowCount.windowCount));
parcelHelpers.export(exports, "windowTime", ()=>(0, _windowTime.windowTime));
parcelHelpers.export(exports, "windowToggle", ()=>(0, _windowToggle.windowToggle));
parcelHelpers.export(exports, "windowWhen", ()=>(0, _windowWhen.windowWhen));
parcelHelpers.export(exports, "withLatestFrom", ()=>(0, _withLatestFrom.withLatestFrom));
parcelHelpers.export(exports, "zipAll", ()=>(0, _zipAll.zipAll));
parcelHelpers.export(exports, "zipWith", ()=>(0, _zipWith.zipWith));
var _observable = require("./internal/Observable");
var _connectableObservable = require("./internal/observable/ConnectableObservable");
var _observable1 = require("./internal/symbol/observable");
var _animationFrames = require("./internal/observable/dom/animationFrames");
var _subject = require("./internal/Subject");
var _behaviorSubject = require("./internal/BehaviorSubject");
var _replaySubject = require("./internal/ReplaySubject");
var _asyncSubject = require("./internal/AsyncSubject");
var _asap = require("./internal/scheduler/asap");
var _async = require("./internal/scheduler/async");
var _queue = require("./internal/scheduler/queue");
var _animationFrame = require("./internal/scheduler/animationFrame");
var _virtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");
var _scheduler = require("./internal/Scheduler");
var _subscription = require("./internal/Subscription");
var _subscriber = require("./internal/Subscriber");
var _notification = require("./internal/Notification");
var _pipe = require("./internal/util/pipe");
var _noop = require("./internal/util/noop");
var _identity = require("./internal/util/identity");
var _isObservable = require("./internal/util/isObservable");
var _lastValueFrom = require("./internal/lastValueFrom");
var _firstValueFrom = require("./internal/firstValueFrom");
var _argumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");
var _emptyError = require("./internal/util/EmptyError");
var _notFoundError = require("./internal/util/NotFoundError");
var _objectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");
var _sequenceError = require("./internal/util/SequenceError");
var _timeout = require("./internal/operators/timeout");
var _unsubscriptionError = require("./internal/util/UnsubscriptionError");
var _bindCallback = require("./internal/observable/bindCallback");
var _bindNodeCallback = require("./internal/observable/bindNodeCallback");
var _combineLatest = require("./internal/observable/combineLatest");
var _concat = require("./internal/observable/concat");
var _connectable = require("./internal/observable/connectable");
var _defer = require("./internal/observable/defer");
var _empty = require("./internal/observable/empty");
var _forkJoin = require("./internal/observable/forkJoin");
var _from = require("./internal/observable/from");
var _fromEvent = require("./internal/observable/fromEvent");
var _fromEventPattern = require("./internal/observable/fromEventPattern");
var _generate = require("./internal/observable/generate");
var _iif = require("./internal/observable/iif");
var _interval = require("./internal/observable/interval");
var _merge = require("./internal/observable/merge");
var _never = require("./internal/observable/never");
var _of = require("./internal/observable/of");
var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");
var _pairs = require("./internal/observable/pairs");
var _partition = require("./internal/observable/partition");
var _race = require("./internal/observable/race");
var _range = require("./internal/observable/range");
var _throwError = require("./internal/observable/throwError");
var _timer = require("./internal/observable/timer");
var _using = require("./internal/observable/using");
var _zip = require("./internal/observable/zip");
var _scheduled = require("./internal/scheduled/scheduled");
var _types = require("./internal/types");
parcelHelpers.exportAll(_types, exports);
var _config = require("./internal/config");
var _audit = require("./internal/operators/audit");
var _auditTime = require("./internal/operators/auditTime");
var _buffer = require("./internal/operators/buffer");
var _bufferCount = require("./internal/operators/bufferCount");
var _bufferTime = require("./internal/operators/bufferTime");
var _bufferToggle = require("./internal/operators/bufferToggle");
var _bufferWhen = require("./internal/operators/bufferWhen");
var _catchError = require("./internal/operators/catchError");
var _combineAll = require("./internal/operators/combineAll");
var _combineLatestAll = require("./internal/operators/combineLatestAll");
var _combineLatestWith = require("./internal/operators/combineLatestWith");
var _concatAll = require("./internal/operators/concatAll");
var _concatMap = require("./internal/operators/concatMap");
var _concatMapTo = require("./internal/operators/concatMapTo");
var _concatWith = require("./internal/operators/concatWith");
var _connect = require("./internal/operators/connect");
var _count = require("./internal/operators/count");
var _debounce = require("./internal/operators/debounce");
var _debounceTime = require("./internal/operators/debounceTime");
var _defaultIfEmpty = require("./internal/operators/defaultIfEmpty");
var _delay = require("./internal/operators/delay");
var _delayWhen = require("./internal/operators/delayWhen");
var _dematerialize = require("./internal/operators/dematerialize");
var _distinct = require("./internal/operators/distinct");
var _distinctUntilChanged = require("./internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("./internal/operators/distinctUntilKeyChanged");
var _elementAt = require("./internal/operators/elementAt");
var _endWith = require("./internal/operators/endWith");
var _every = require("./internal/operators/every");
var _exhaust = require("./internal/operators/exhaust");
var _exhaustAll = require("./internal/operators/exhaustAll");
var _exhaustMap = require("./internal/operators/exhaustMap");
var _expand = require("./internal/operators/expand");
var _filter = require("./internal/operators/filter");
var _finalize = require("./internal/operators/finalize");
var _find = require("./internal/operators/find");
var _findIndex = require("./internal/operators/findIndex");
var _first = require("./internal/operators/first");
var _groupBy = require("./internal/operators/groupBy");
var _ignoreElements = require("./internal/operators/ignoreElements");
var _isEmpty = require("./internal/operators/isEmpty");
var _last = require("./internal/operators/last");
var _map = require("./internal/operators/map");
var _mapTo = require("./internal/operators/mapTo");
var _materialize = require("./internal/operators/materialize");
var _max = require("./internal/operators/max");
var _mergeAll = require("./internal/operators/mergeAll");
var _flatMap = require("./internal/operators/flatMap");
var _mergeMap = require("./internal/operators/mergeMap");
var _mergeMapTo = require("./internal/operators/mergeMapTo");
var _mergeScan = require("./internal/operators/mergeScan");
var _mergeWith = require("./internal/operators/mergeWith");
var _min = require("./internal/operators/min");
var _multicast = require("./internal/operators/multicast");
var _observeOn = require("./internal/operators/observeOn");
var _pairwise = require("./internal/operators/pairwise");
var _pluck = require("./internal/operators/pluck");
var _publish = require("./internal/operators/publish");
var _publishBehavior = require("./internal/operators/publishBehavior");
var _publishLast = require("./internal/operators/publishLast");
var _publishReplay = require("./internal/operators/publishReplay");
var _raceWith = require("./internal/operators/raceWith");
var _reduce = require("./internal/operators/reduce");
var _repeat = require("./internal/operators/repeat");
var _repeatWhen = require("./internal/operators/repeatWhen");
var _retry = require("./internal/operators/retry");
var _retryWhen = require("./internal/operators/retryWhen");
var _refCount = require("./internal/operators/refCount");
var _sample = require("./internal/operators/sample");
var _sampleTime = require("./internal/operators/sampleTime");
var _scan = require("./internal/operators/scan");
var _sequenceEqual = require("./internal/operators/sequenceEqual");
var _share = require("./internal/operators/share");
var _shareReplay = require("./internal/operators/shareReplay");
var _single = require("./internal/operators/single");
var _skip = require("./internal/operators/skip");
var _skipLast = require("./internal/operators/skipLast");
var _skipUntil = require("./internal/operators/skipUntil");
var _skipWhile = require("./internal/operators/skipWhile");
var _startWith = require("./internal/operators/startWith");
var _subscribeOn = require("./internal/operators/subscribeOn");
var _switchAll = require("./internal/operators/switchAll");
var _switchMap = require("./internal/operators/switchMap");
var _switchMapTo = require("./internal/operators/switchMapTo");
var _switchScan = require("./internal/operators/switchScan");
var _take = require("./internal/operators/take");
var _takeLast = require("./internal/operators/takeLast");
var _takeUntil = require("./internal/operators/takeUntil");
var _takeWhile = require("./internal/operators/takeWhile");
var _tap = require("./internal/operators/tap");
var _throttle = require("./internal/operators/throttle");
var _throttleTime = require("./internal/operators/throttleTime");
var _throwIfEmpty = require("./internal/operators/throwIfEmpty");
var _timeInterval = require("./internal/operators/timeInterval");
var _timeoutWith = require("./internal/operators/timeoutWith");
var _timestamp = require("./internal/operators/timestamp");
var _toArray = require("./internal/operators/toArray");
var _window = require("./internal/operators/window");
var _windowCount = require("./internal/operators/windowCount");
var _windowTime = require("./internal/operators/windowTime");
var _windowToggle = require("./internal/operators/windowToggle");
var _windowWhen = require("./internal/operators/windowWhen");
var _withLatestFrom = require("./internal/operators/withLatestFrom");
var _zipAll = require("./internal/operators/zipAll");
var _zipWith = require("./internal/operators/zipWith");

},{"./internal/Observable":"4Jvxr","./internal/observable/ConnectableObservable":false,"./internal/symbol/observable":"byHtV","./internal/observable/dom/animationFrames":false,"./internal/Subject":"94RSe","./internal/BehaviorSubject":"4s6yS","./internal/ReplaySubject":false,"./internal/AsyncSubject":false,"./internal/scheduler/asap":false,"./internal/scheduler/async":false,"./internal/scheduler/queue":false,"./internal/scheduler/animationFrame":false,"./internal/scheduler/VirtualTimeScheduler":false,"./internal/Scheduler":false,"./internal/Subscription":"lFyhg","./internal/Subscriber":"1VFFQ","./internal/Notification":false,"./internal/util/pipe":"1GN6U","./internal/util/noop":"l8uEm","./internal/util/identity":"8Xfg6","./internal/util/isObservable":false,"./internal/lastValueFrom":false,"./internal/firstValueFrom":false,"./internal/util/ArgumentOutOfRangeError":false,"./internal/util/EmptyError":false,"./internal/util/NotFoundError":false,"./internal/util/ObjectUnsubscribedError":"6Gcwa","./internal/util/SequenceError":false,"./internal/operators/timeout":false,"./internal/util/UnsubscriptionError":"GSF7Z","./internal/observable/bindCallback":false,"./internal/observable/bindNodeCallback":false,"./internal/observable/combineLatest":false,"./internal/observable/concat":false,"./internal/observable/connectable":false,"./internal/observable/defer":false,"./internal/observable/empty":false,"./internal/observable/forkJoin":false,"./internal/observable/from":"dBWag","./internal/observable/fromEvent":"eTJLc","./internal/observable/fromEventPattern":false,"./internal/observable/generate":false,"./internal/observable/iif":false,"./internal/observable/interval":false,"./internal/observable/merge":false,"./internal/observable/never":false,"./internal/observable/of":false,"./internal/observable/onErrorResumeNext":false,"./internal/observable/pairs":false,"./internal/observable/partition":false,"./internal/observable/race":false,"./internal/observable/range":false,"./internal/observable/throwError":false,"./internal/observable/timer":false,"./internal/observable/using":false,"./internal/observable/zip":false,"./internal/scheduled/scheduled":"l8eo2","./internal/types":"c58fk","./internal/config":"fX0gC","./internal/operators/audit":false,"./internal/operators/auditTime":false,"./internal/operators/buffer":false,"./internal/operators/bufferCount":false,"./internal/operators/bufferTime":false,"./internal/operators/bufferToggle":false,"./internal/operators/bufferWhen":false,"./internal/operators/catchError":false,"./internal/operators/combineAll":false,"./internal/operators/combineLatestAll":false,"./internal/operators/combineLatestWith":false,"./internal/operators/concatAll":false,"./internal/operators/concatMap":false,"./internal/operators/concatMapTo":false,"./internal/operators/concatWith":false,"./internal/operators/connect":false,"./internal/operators/count":false,"./internal/operators/debounce":false,"./internal/operators/debounceTime":false,"./internal/operators/defaultIfEmpty":false,"./internal/operators/delay":false,"./internal/operators/delayWhen":false,"./internal/operators/dematerialize":false,"./internal/operators/distinct":false,"./internal/operators/distinctUntilChanged":false,"./internal/operators/distinctUntilKeyChanged":false,"./internal/operators/elementAt":false,"./internal/operators/endWith":false,"./internal/operators/every":false,"./internal/operators/exhaust":false,"./internal/operators/exhaustAll":false,"./internal/operators/exhaustMap":false,"./internal/operators/expand":false,"./internal/operators/filter":false,"./internal/operators/finalize":false,"./internal/operators/find":false,"./internal/operators/findIndex":false,"./internal/operators/first":false,"./internal/operators/groupBy":false,"./internal/operators/ignoreElements":false,"./internal/operators/isEmpty":false,"./internal/operators/last":false,"./internal/operators/map":"25iUP","./internal/operators/mapTo":false,"./internal/operators/materialize":false,"./internal/operators/max":false,"./internal/operators/mergeAll":false,"./internal/operators/flatMap":false,"./internal/operators/mergeMap":"1Kzmb","./internal/operators/mergeMapTo":false,"./internal/operators/mergeScan":false,"./internal/operators/mergeWith":false,"./internal/operators/min":false,"./internal/operators/multicast":false,"./internal/operators/observeOn":"21OcU","./internal/operators/pairwise":false,"./internal/operators/pluck":false,"./internal/operators/publish":false,"./internal/operators/publishBehavior":false,"./internal/operators/publishLast":false,"./internal/operators/publishReplay":false,"./internal/operators/raceWith":false,"./internal/operators/reduce":false,"./internal/operators/repeat":false,"./internal/operators/repeatWhen":false,"./internal/operators/retry":false,"./internal/operators/retryWhen":false,"./internal/operators/refCount":false,"./internal/operators/sample":false,"./internal/operators/sampleTime":false,"./internal/operators/scan":false,"./internal/operators/sequenceEqual":false,"./internal/operators/share":false,"./internal/operators/shareReplay":false,"./internal/operators/single":false,"./internal/operators/skip":false,"./internal/operators/skipLast":false,"./internal/operators/skipUntil":false,"./internal/operators/skipWhile":false,"./internal/operators/startWith":false,"./internal/operators/subscribeOn":"3SFol","./internal/operators/switchAll":false,"./internal/operators/switchMap":false,"./internal/operators/switchMapTo":false,"./internal/operators/switchScan":false,"./internal/operators/take":false,"./internal/operators/takeLast":false,"./internal/operators/takeUntil":false,"./internal/operators/takeWhile":false,"./internal/operators/tap":false,"./internal/operators/throttle":false,"./internal/operators/throttleTime":false,"./internal/operators/throwIfEmpty":false,"./internal/operators/timeInterval":false,"./internal/operators/timeoutWith":false,"./internal/operators/timestamp":false,"./internal/operators/toArray":false,"./internal/operators/window":false,"./internal/operators/windowCount":false,"./internal/operators/windowTime":false,"./internal/operators/windowToggle":false,"./internal/operators/windowWhen":false,"./internal/operators/withLatestFrom":false,"./internal/operators/zipAll":false,"./internal/operators/zipWith":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Jvxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable);
var _subscriber = require("./Subscriber");
var _subscription = require("./Subscription");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var _isFunction = require("./util/isFunction");
var _errorContext = require("./util/errorContext");
var Observable = function() {
    function Observable(subscribe) {
        if (subscribe) this._subscribe = subscribe;
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new (0, _subscriber.SafeSubscriber)(observerOrNext, error, complete);
        (0, _errorContext.errorContext)(function() {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscriber = new (0, _subscriber.SafeSubscriber)({
                next: function(value) {
                    try {
                        next(value);
                    } catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[0, _observable.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        return (0, _pipe.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : (0, _config.config).Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0, _isFunction.isFunction)(value.next) && (0, _isFunction.isFunction)(value.error) && (0, _isFunction.isFunction)(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof (0, _subscriber.Subscriber) || isObserver(value) && (0, _subscription.isSubscription)(value);
}

},{"./Subscriber":"1VFFQ","./Subscription":"lFyhg","./symbol/observable":"byHtV","./util/pipe":"1GN6U","./config":"fX0gC","./util/isFunction":"dEyyK","./util/errorContext":"gU38l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VFFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscriber", ()=>Subscriber);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber);
parcelHelpers.export(exports, "EMPTY_OBSERVER", ()=>EMPTY_OBSERVER);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _subscription = require("./Subscription");
var _config = require("./config");
var _reportUnhandledError = require("./util/reportUnhandledError");
var _noop = require("./util/noop");
var _notificationFactories = require("./NotificationFactories");
var _timeoutProvider = require("./scheduler/timeoutProvider");
var _errorContext = require("./util/errorContext");
var Subscriber = function(_super) {
    (0, _tslib.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0, _subscription.isSubscription)(destination)) destination.add(_this);
        } else _this.destination = EMPTY_OBSERVER;
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.nextNotification)(value), this);
        else this._next(value);
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.errorNotification)(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) handleStoppedNotification((0, _notificationFactories.COMPLETE_NOTIFICATION), this);
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber;
}((0, _subscription.Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) try {
            partialObserver.next(value);
        } catch (error) {
            handleUnhandledError(error);
        }
    };
    ConsumerObserver.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) try {
            partialObserver.error(err);
        } catch (error) {
            handleUnhandledError(error);
        }
        else handleUnhandledError(err);
    };
    ConsumerObserver.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) try {
            partialObserver.complete();
        } catch (error) {
            handleUnhandledError(error);
        }
    };
    return ConsumerObserver;
}();
var SafeSubscriber = function(_super) {
    (0, _tslib.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0, _isFunction.isFunction)(observerOrNext) || !observerOrNext) partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
            error: error !== null && error !== void 0 ? error : undefined,
            complete: complete !== null && complete !== void 0 ? complete : undefined
        };
        else {
            var context_1;
            if (_this && (0, _config.config).useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
                };
            } else partialObserver = observerOrNext;
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber);
function handleUnhandledError(error) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling) (0, _errorContext.captureError)(error);
    else (0, _reportUnhandledError.reportUnhandledError)(error);
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = (0, _config.config).onStoppedNotification;
    onStoppedNotification && (0, _timeoutProvider.timeoutProvider).setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: (0, _noop.noop),
    error: defaultErrorHandler,
    complete: (0, _noop.noop)
};

},{"tslib":"lRdW5","./util/isFunction":"dEyyK","./Subscription":"lFyhg","./config":"fX0gC","./util/reportUnhandledError":"aVM3K","./util/noop":"l8uEm","./NotificationFactories":"hwqFj","./scheduler/timeoutProvider":"1FR9J","./util/errorContext":"gU38l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dEyyK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
function isFunction(value) {
    return typeof value === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFyhg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscription", ()=>Subscription);
parcelHelpers.export(exports, "EMPTY_SUBSCRIPTION", ()=>EMPTY_SUBSCRIPTION);
parcelHelpers.export(exports, "isSubscription", ()=>isSubscription);
var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var _arrRemove = require("./util/arrRemove");
var Subscription = function() {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) try {
                    for(var _parentage_1 = (0, _tslib.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                        var parent_1 = _parentage_1_1.value;
                        parent_1.remove(this);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                else _parentage.remove(this);
            }
            var initialFinalizer = this.initialTeardown;
            if ((0, _isFunction.isFunction)(initialFinalizer)) try {
                initialFinalizer();
            } catch (e) {
                errors = e instanceof (0, _unsubscriptionError.UnsubscriptionError) ? e.errors : [
                    e
                ];
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for(var _finalizers_1 = (0, _tslib.__values)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()){
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof (0, _unsubscriptionError.UnsubscriptionError)) errors = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(errors)), (0, _tslib.__read)(err.errors));
                            else errors.push(err);
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) throw new (0, _unsubscriptionError.UnsubscriptionError)(errors);
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) execFinalizer(teardown);
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) this._parentage = null;
        else if (Array.isArray(_parentage)) (0, _arrRemove.arrRemove)(_parentage, parent);
    };
    Subscription.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0, _arrRemove.arrRemove)(_finalizers, teardown);
        if (teardown instanceof Subscription) teardown._removeParent(this);
    };
    Subscription.EMPTY = function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    }();
    return Subscription;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && (0, _isFunction.isFunction)(value.remove) && (0, _isFunction.isFunction)(value.add) && (0, _isFunction.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
    if ((0, _isFunction.isFunction)(finalizer)) finalizer();
    else finalizer.unsubscribe();
}

},{"tslib":"lRdW5","./util/isFunction":"dEyyK","./util/UnsubscriptionError":"GSF7Z","./util/arrRemove":"dLHeW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GSF7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError);
var _createErrorClass = require("./createErrorClass");
var UnsubscriptionError = (0, _createErrorClass.createErrorClass)(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
    };
});

},{"./createErrorClass":"i1v8Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1v8Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createErrorClass", ()=>createErrorClass);
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLHeW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrRemove", ()=>arrRemove);
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fX0gC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVM3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reportUnhandledError", ()=>reportUnhandledError);
var _config = require("../config");
var _timeoutProvider = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    (0, _timeoutProvider.timeoutProvider).setTimeout(function() {
        var onUnhandledError = (0, _config.config).onUnhandledError;
        if (onUnhandledError) onUnhandledError(err);
        else throw err;
    });
}

},{"../config":"fX0gC","../scheduler/timeoutProvider":"1FR9J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FR9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutProvider", ()=>timeoutProvider);
var _tslib = require("tslib");
var timeoutProvider = {
    setTimeout: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, (0, _tslib.__spreadArray)([
            handler,
            timeout
        ], (0, _tslib.__read)(args)));
        return setTimeout.apply(void 0, (0, _tslib.__spreadArray)([
            handler,
            timeout
        ], (0, _tslib.__read)(args)));
    },
    clearTimeout: function(handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
};

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8uEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hwqFj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COMPLETE_NOTIFICATION", ()=>COMPLETE_NOTIFICATION);
parcelHelpers.export(exports, "errorNotification", ()=>errorNotification);
parcelHelpers.export(exports, "nextNotification", ()=>nextNotification);
parcelHelpers.export(exports, "createNotification", ()=>createNotification);
var COMPLETE_NOTIFICATION = function() {
    return createNotification("C", undefined, undefined);
}();
function errorNotification(error) {
    return createNotification("E", undefined, error);
}
function nextNotification(value) {
    return createNotification("N", value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gU38l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorContext", ()=>errorContext);
parcelHelpers.export(exports, "captureError", ()=>captureError);
var _config = require("../config");
var context = null;
function errorContext(cb) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) context = {
            errorThrown: false,
            error: null
        };
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) throw error;
        }
    } else cb();
}
function captureError(err) {
    if ((0, _config.config).useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}

},{"../config":"fX0gC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byHtV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable);
var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GN6U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray);
var _identity = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return 0, _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}

},{"./identity":"8Xfg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Xfg6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "identity", ()=>identity);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94RSe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subject", ()=>Subject);
parcelHelpers.export(exports, "AnonymousSubject", ()=>AnonymousSubject);
var _tslib = require("tslib");
var _observable = require("./Observable");
var _subscription = require("./Subscription");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _arrRemove = require("./util/arrRemove");
var _errorContext = require("./util/errorContext");
var Subject = function(_super) {
    (0, _tslib.__extends)(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) throw new (0, _objectUnsubscribedError.ObjectUnsubscribedError)();
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        (0, _errorContext.errorContext)(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) _this.currentObservers = Array.from(_this.observers);
                try {
                    for(var _b = (0, _tslib.__values)(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()){
                        var observer = _c.value;
                        observer.next(value);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
            }
        });
    };
    Subject.prototype.error = function(err) {
        var _this = this;
        (0, _errorContext.errorContext)(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while(observers.length)observers.shift().error(err);
            }
        });
    };
    Subject.prototype.complete = function() {
        var _this = this;
        (0, _errorContext.errorContext)(function() {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while(observers.length)observers.shift().complete();
            }
        });
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) return 0, _subscription.EMPTY_SUBSCRIPTION;
        this.currentObservers = null;
        observers.push(subscriber);
        return new (0, _subscription.Subscription)(function() {
            _this.currentObservers = null;
            (0, _arrRemove.arrRemove)(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) subscriber.complete();
    };
    Subject.prototype.asObservable = function() {
        var observable = new (0, _observable.Observable)();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}((0, _observable.Observable));
var AnonymousSubject = function(_super) {
    (0, _tslib.__extends)(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : (0, _subscription.EMPTY_SUBSCRIPTION);
    };
    return AnonymousSubject;
}(Subject);

},{"tslib":"lRdW5","./Observable":"4Jvxr","./Subscription":"lFyhg","./util/ObjectUnsubscribedError":"6Gcwa","./util/arrRemove":"dLHeW","./util/errorContext":"gU38l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Gcwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>ObjectUnsubscribedError);
var _createErrorClass = require("./createErrorClass");
var ObjectUnsubscribedError = (0, _createErrorClass.createErrorClass)(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
    };
});

},{"./createErrorClass":"i1v8Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4s6yS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BehaviorSubject", ()=>BehaviorSubject);
var _tslib = require("tslib");
var _subject = require("./Subject");
var BehaviorSubject = function(_super) {
    (0, _tslib.__extends)(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) throw thrownError;
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}((0, _subject.Subject));

},{"tslib":"lRdW5","./Subject":"94RSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBWag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from);
var _scheduled = require("../scheduled/scheduled");
var _innerFrom = require("./innerFrom");
function from(input, scheduler) {
    return scheduler ? (0, _scheduled.scheduled)(input, scheduler) : (0, _innerFrom.innerFrom)(input);
}

},{"../scheduled/scheduled":"l8eo2","./innerFrom":"27e4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8eo2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduled", ()=>scheduled);
var _scheduleObservable = require("./scheduleObservable");
var _schedulePromise = require("./schedulePromise");
var _scheduleArray = require("./scheduleArray");
var _scheduleIterable = require("./scheduleIterable");
var _scheduleAsyncIterable = require("./scheduleAsyncIterable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isPromise = require("../util/isPromise");
var _isArrayLike = require("../util/isArrayLike");
var _isIterable = require("../util/isIterable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _scheduleReadableStreamLike = require("./scheduleReadableStreamLike");
function scheduled(input, scheduler) {
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) return (0, _scheduleObservable.scheduleObservable)(input, scheduler);
        if ((0, _isArrayLike.isArrayLike)(input)) return (0, _scheduleArray.scheduleArray)(input, scheduler);
        if ((0, _isPromise.isPromise)(input)) return (0, _schedulePromise.schedulePromise)(input, scheduler);
        if ((0, _isAsyncIterable.isAsyncIterable)(input)) return (0, _scheduleAsyncIterable.scheduleAsyncIterable)(input, scheduler);
        if ((0, _isIterable.isIterable)(input)) return (0, _scheduleIterable.scheduleIterable)(input, scheduler);
        if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) return (0, _scheduleReadableStreamLike.scheduleReadableStreamLike)(input, scheduler);
    }
    throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}

},{"./scheduleObservable":"g2JIf","./schedulePromise":"aQruY","./scheduleArray":"e4o4N","./scheduleIterable":"1884S","./scheduleAsyncIterable":"bCUem","../util/isInteropObservable":"7Yp6b","../util/isPromise":"aVkee","../util/isArrayLike":"i81jv","../util/isIterable":"cGlpL","../util/isAsyncIterable":"fuDY5","../util/throwUnobservableError":"Il45E","../util/isReadableStreamLike":"bnSKo","./scheduleReadableStreamLike":"6KcBM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2JIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleObservable", ()=>scheduleObservable);
var _innerFrom = require("../observable/innerFrom");
var _observeOn = require("../operators/observeOn");
var _subscribeOn = require("../operators/subscribeOn");
function scheduleObservable(input, scheduler) {
    return (0, _innerFrom.innerFrom)(input).pipe((0, _subscribeOn.subscribeOn)(scheduler), (0, _observeOn.observeOn)(scheduler));
}

},{"../observable/innerFrom":"27e4p","../operators/observeOn":"21OcU","../operators/subscribeOn":"3SFol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"27e4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "innerFrom", ()=>innerFrom);
parcelHelpers.export(exports, "fromInteropObservable", ()=>fromInteropObservable);
parcelHelpers.export(exports, "fromArrayLike", ()=>fromArrayLike);
parcelHelpers.export(exports, "fromPromise", ()=>fromPromise);
parcelHelpers.export(exports, "fromIterable", ()=>fromIterable);
parcelHelpers.export(exports, "fromAsyncIterable", ()=>fromAsyncIterable);
parcelHelpers.export(exports, "fromReadableStreamLike", ()=>fromReadableStreamLike);
var _tslib = require("tslib");
var _isArrayLike = require("../util/isArrayLike");
var _isPromise = require("../util/isPromise");
var _observable = require("../Observable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isAsyncIterable = require("../util/isAsyncIterable");
var _throwUnobservableError = require("../util/throwUnobservableError");
var _isIterable = require("../util/isIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
var _isFunction = require("../util/isFunction");
var _reportUnhandledError = require("../util/reportUnhandledError");
var _observable1 = require("../symbol/observable");
function innerFrom(input) {
    if (input instanceof (0, _observable.Observable)) return input;
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) return fromInteropObservable(input);
        if ((0, _isArrayLike.isArrayLike)(input)) return fromArrayLike(input);
        if ((0, _isPromise.isPromise)(input)) return fromPromise(input);
        if ((0, _isAsyncIterable.isAsyncIterable)(input)) return fromAsyncIterable(input);
        if ((0, _isIterable.isIterable)(input)) return fromIterable(input);
        if ((0, _isReadableStreamLike.isReadableStreamLike)(input)) return fromReadableStreamLike(input);
    }
    throw (0, _throwUnobservableError.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
    return new (0, _observable.Observable)(function(subscriber) {
        var obs = obj[0, _observable1.observable]();
        if ((0, _isFunction.isFunction)(obs.subscribe)) return obs.subscribe(subscriber);
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
function fromArrayLike(array) {
    return new (0, _observable.Observable)(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new (0, _observable.Observable)(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, (0, _reportUnhandledError.reportUnhandledError));
    });
}
function fromIterable(iterable) {
    return new (0, _observable.Observable)(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = (0, _tslib.__values)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) return;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new (0, _observable.Observable)(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0, _tslib.__awaiter)(this, void 0, void 0, function() {
        var value, e_2_1;
        return (0, _tslib.__generator)(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = (0, _tslib.__asyncValues)(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) return [
                        2
                    ];
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
}

},{"tslib":"lRdW5","../util/isArrayLike":"i81jv","../util/isPromise":"aVkee","../Observable":"4Jvxr","../util/isInteropObservable":"7Yp6b","../util/isAsyncIterable":"fuDY5","../util/throwUnobservableError":"Il45E","../util/isIterable":"cGlpL","../util/isReadableStreamLike":"bnSKo","../util/isFunction":"dEyyK","../util/reportUnhandledError":"aVM3K","../symbol/observable":"byHtV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i81jv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike);
var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVkee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
var _isFunction = require("./isFunction");
function isPromise(value) {
    return (0, _isFunction.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Yp6b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable);
var _observable = require("../symbol/observable");
var _isFunction = require("./isFunction");
function isInteropObservable(input) {
    return (0, _isFunction.isFunction)(input[0, _observable.observable]);
}

},{"../symbol/observable":"byHtV","./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuDY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAsyncIterable", ()=>isAsyncIterable);
var _isFunction = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0, _isFunction.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Il45E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInvalidObservableTypeError", ()=>createInvalidObservableTypeError);
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGlpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable);
var _iterator = require("../symbol/iterator");
var _isFunction = require("./isFunction");
function isIterable(input) {
    return (0, _isFunction.isFunction)(input === null || input === void 0 ? void 0 : input[0, _iterator.iterator]);
}

},{"../symbol/iterator":"l85ff","./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l85ff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator);
parcelHelpers.export(exports, "iterator", ()=>iterator);
function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
    return Symbol.iterator;
}
var iterator = getSymbolIterator();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bnSKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readableStreamLikeToAsyncGenerator", ()=>readableStreamLikeToAsyncGenerator);
parcelHelpers.export(exports, "isReadableStreamLike", ()=>isReadableStreamLike);
var _tslib = require("tslib");
var _isFunction = require("./isFunction");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return (0, _tslib.__asyncGenerator)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0, _tslib.__generator)(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4,
                        (0, _tslib.__await)(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        (0, _tslib.__await)(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        (0, _tslib.__await)(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return (0, _isFunction.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

},{"tslib":"lRdW5","./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21OcU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeOn", ()=>observeOn);
var _executeSchedule = require("../util/executeSchedule");
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return (0, _lift.operate)(function(source, subscriber) {
        source.subscribe((0, _operatorSubscriber.createOperatorSubscriber)(subscriber, function(value) {
            return (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
}

},{"../util/executeSchedule":"lF0MM","../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF0MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "executeSchedule", ()=>executeSchedule);
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) delay = 0;
    if (repeat === void 0) repeat = false;
    var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) parentSubscription.add(this.schedule(null, delay));
        else this.unsubscribe();
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) return scheduleSubscription;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CiSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasLift", ()=>hasLift);
parcelHelpers.export(exports, "operate", ()=>operate);
var _isFunction = require("./isFunction");
function hasLift(source) {
    return (0, _isFunction.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function(source) {
        if (hasLift(source)) return source.lift(function(liftedSource) {
            try {
                return init(liftedSource, this);
            } catch (err) {
                this.error(err);
            }
        });
        throw new TypeError("Unable to lift unknown Observable type");
    };
}

},{"./isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"96z9b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOperatorSubscriber", ()=>createOperatorSubscriber);
parcelHelpers.export(exports, "OperatorSubscriber", ()=>OperatorSubscriber);
var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
    (0, _tslib.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err1) {
                destination.error(err1);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
        }
    };
    return OperatorSubscriber;
}((0, _subscriber.Subscriber));

},{"tslib":"lRdW5","../Subscriber":"1VFFQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SFol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeOn", ()=>subscribeOn);
var _lift = require("../util/lift");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return (0, _lift.operate)(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}

},{"../util/lift":"7CiSs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQruY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schedulePromise", ()=>schedulePromise);
var _innerFrom = require("../observable/innerFrom");
var _observeOn = require("../operators/observeOn");
var _subscribeOn = require("../operators/subscribeOn");
function schedulePromise(input, scheduler) {
    return (0, _innerFrom.innerFrom)(input).pipe((0, _subscribeOn.subscribeOn)(scheduler), (0, _observeOn.observeOn)(scheduler));
}

},{"../observable/innerFrom":"27e4p","../operators/observeOn":"21OcU","../operators/subscribeOn":"3SFol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4o4N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleArray", ()=>scheduleArray);
var _observable = require("../Observable");
function scheduleArray(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) subscriber.complete();
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) this.schedule();
            }
        });
    });
}

},{"../Observable":"4Jvxr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1884S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleIterable", ()=>scheduleIterable);
var _observable = require("../Observable");
var _iterator = require("../symbol/iterator");
var _isFunction = require("../util/isFunction");
var _executeSchedule = require("../util/executeSchedule");
function scheduleIterable(input, scheduler) {
    return new (0, _observable.Observable)(function(subscriber) {
        var iterator;
        (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
            iterator = input[0, _iterator.iterator]();
            (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                var _a;
                var value;
                var done;
                try {
                    _a = iterator.next(), value = _a.value, done = _a.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) subscriber.complete();
                else subscriber.next(value);
            }, 0, true);
        });
        return function() {
            return (0, _isFunction.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}

},{"../Observable":"4Jvxr","../symbol/iterator":"l85ff","../util/isFunction":"dEyyK","../util/executeSchedule":"lF0MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCUem":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleAsyncIterable", ()=>scheduleAsyncIterable);
var _observable = require("../Observable");
var _executeSchedule = require("../util/executeSchedule");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) throw new Error("Iterable cannot be null");
    return new (0, _observable.Observable)(function(subscriber) {
        (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            (0, _executeSchedule.executeSchedule)(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) subscriber.complete();
                    else subscriber.next(result.value);
                });
            }, 0, true);
        });
    });
}

},{"../Observable":"4Jvxr","../util/executeSchedule":"lF0MM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6KcBM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleReadableStreamLike", ()=>scheduleReadableStreamLike);
var _scheduleAsyncIterable = require("./scheduleAsyncIterable");
var _isReadableStreamLike = require("../util/isReadableStreamLike");
function scheduleReadableStreamLike(input, scheduler) {
    return (0, _scheduleAsyncIterable.scheduleAsyncIterable)((0, _isReadableStreamLike.readableStreamLikeToAsyncGenerator)(input), scheduler);
}

},{"./scheduleAsyncIterable":"bCUem","../util/isReadableStreamLike":"bnSKo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTJLc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEvent", ()=>fromEvent);
var _tslib = require("tslib");
var _innerFrom = require("../observable/innerFrom");
var _observable = require("../Observable");
var _mergeMap = require("../operators/mergeMap");
var _isArrayLike = require("../util/isArrayLike");
var _isFunction = require("../util/isFunction");
var _mapOneOrManyArgs = require("../util/mapOneOrManyArgs");
var nodeEventEmitterMethods = [
    "addListener",
    "removeListener"
];
var eventTargetMethods = [
    "addEventListener",
    "removeEventListener"
];
var jqueryMethods = [
    "on",
    "off"
];
function fromEvent(target, eventName, options, resultSelector) {
    if ((0, _isFunction.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe((0, _mapOneOrManyArgs.mapOneOrManyArgs)(resultSelector));
    var _a = (0, _tslib.__read)(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if ((0, _isArrayLike.isArrayLike)(target)) return (0, _mergeMap.mergeMap)(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
        })((0, _innerFrom.innerFrom)(target));
    }
    if (!add) throw new TypeError("Invalid event target");
    return new (0, _observable.Observable)(function(subscriber) {
        var handler = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
            return remove(handler);
        };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return (0, _isFunction.isFunction)(target.addListener) && (0, _isFunction.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return (0, _isFunction.isFunction)(target.on) && (0, _isFunction.isFunction)(target.off);
}
function isEventTarget(target) {
    return (0, _isFunction.isFunction)(target.addEventListener) && (0, _isFunction.isFunction)(target.removeEventListener);
}

},{"tslib":"lRdW5","../observable/innerFrom":"27e4p","../Observable":"4Jvxr","../operators/mergeMap":"1Kzmb","../util/isArrayLike":"i81jv","../util/isFunction":"dEyyK","../util/mapOneOrManyArgs":"hlLvg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kzmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMap", ()=>mergeMap);
var _map = require("./map");
var _innerFrom = require("../observable/innerFrom");
var _lift = require("../util/lift");
var _mergeInternals = require("./mergeInternals");
var _isFunction = require("../util/isFunction");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if ((0, _isFunction.isFunction)(resultSelector)) return mergeMap(function(a, i) {
        return (0, _map.map)(function(b, ii) {
            return resultSelector(a, b, i, ii);
        })((0, _innerFrom.innerFrom)(project(a, i)));
    }, concurrent);
    else if (typeof resultSelector === "number") concurrent = resultSelector;
    return (0, _lift.operate)(function(source, subscriber) {
        return (0, _mergeInternals.mergeInternals)(source, subscriber, project, concurrent);
    });
}

},{"./map":"25iUP","../observable/innerFrom":"27e4p","../util/lift":"7CiSs","./mergeInternals":"izBBV","../util/isFunction":"dEyyK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"25iUP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map);
var _lift = require("../util/lift");
var _operatorSubscriber = require("./OperatorSubscriber");
function map(project, thisArg) {
    return (0, _lift.operate)(function(source, subscriber) {
        var index = 0;
        source.subscribe((0, _operatorSubscriber.createOperatorSubscriber)(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

},{"../util/lift":"7CiSs","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izBBV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeInternals", ()=>mergeInternals);
var _innerFrom = require("../observable/innerFrom");
var _executeSchedule = require("../util/executeSchedule");
var _operatorSubscriber = require("./OperatorSubscriber");
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) subscriber.complete();
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        (0, _innerFrom.innerFrom)(project(value, index++)).subscribe((0, _operatorSubscriber.createOperatorSubscriber)(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
            if (expand) outerNext(innerValue);
            else subscriber.next(innerValue);
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) try {
                active--;
                var _loop_1 = function() {
                    var bufferedValue = buffer.shift();
                    if (innerSubScheduler) (0, _executeSchedule.executeSchedule)(subscriber, innerSubScheduler, function() {
                        return doInnerSub(bufferedValue);
                    });
                    else doInnerSub(bufferedValue);
                };
                while(buffer.length && active < concurrent)_loop_1();
                checkComplete();
            } catch (err) {
                subscriber.error(err);
            }
        }));
    };
    source.subscribe((0, _operatorSubscriber.createOperatorSubscriber)(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
    };
}

},{"../observable/innerFrom":"27e4p","../util/executeSchedule":"lF0MM","./OperatorSubscriber":"96z9b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hlLvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapOneOrManyArgs", ()=>mapOneOrManyArgs);
var _tslib = require("tslib");
var _map = require("../operators/map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, (0, _tslib.__spreadArray)([], (0, _tslib.__read)(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return (0, _map.map)(function(args) {
        return callOrApply(fn, args);
    });
}

},{"tslib":"lRdW5","../operators/map":"25iUP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c58fk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3g9B8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bookmarkModel = require("./bookmark-model");
var _bookmarkModelDefault = parcelHelpers.interopDefault(_bookmarkModel);
class BookMarkView extends HTMLElement {
    model;
    constructor(){
        super();
        this.setModel((0, _bookmarkModelDefault.default));
    }
    setModel(model) {
        this.model = model;
    }
    connectedCallback() {
        this.innerHTML = `
    <ul class="bookmarks__list">
      <div class="message">
        <div>
          <svg>
            <use href="src/img/icons.svg#icon-smile"></use>
          </svg>
        </div>
        <p>
          No bookmarks yet. Find a nice recipe and bookmark it :)
        </p>
      </div>
    </ul>
    `;
        this.model.setParentElement(this.querySelector(".bookmarks__list"));
        // the parent element is valid after setting the innerHTML
        this.model.renderBookmarks();
    }
}
exports.default = BookMarkView;

},{"./bookmark-model":"iNua1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNua1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewService = require("../../../services/ui-services/viewService");
var _viewServiceDefault = parcelHelpers.interopDefault(_viewService);
var _previewService = require("../../../services/ui-services/previewService");
var _previewServiceDefault = parcelHelpers.interopDefault(_previewService);
var _bookmarkService = require("../../../services/bookmarkService");
var _bookmarkServiceDefault = parcelHelpers.interopDefault(_bookmarkService);
class BookMarkModel {
    viewService;
    _parentElement;
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    constructor(){
        this.setViewService((0, _viewServiceDefault.default));
        this.setPreviewService((0, _previewServiceDefault.default));
        this.setBookmarkService((0, _bookmarkServiceDefault.default));
    }
    setViewService(service) {
        this.viewService = service;
    }
    setPreviewService(service) {
        this.previewService = service;
    }
    setParentElement(parentElement) {
        this._parentElement = parentElement;
    }
    setBookmarkService(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    generateMarkup(bookmarks) {
        return bookmarks.map((bookmark)=>(0, _previewServiceDefault.default).generateMarkup(bookmark)).join("");
    }
    renderBookmarks() {
        this.bookmarkService.getBookmarksObservable().subscribe((bookmarks)=>{
            bookmarks && bookmarks.length > 0 ? this.viewService.render(true, this._parentElement, this.generateMarkup(bookmarks)) : this.viewService.renderMessage(this._parentElement, this._errorMessage);
        });
    }
}
exports.default = new BookMarkModel();

},{"../../../services/ui-services/viewService":"a8rEx","../../../services/ui-services/previewService":"f8Ogl","../../../services/bookmarkService":"jj733","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8Ogl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewService {
    constructor(){}
    generateMarkup(result) {
        return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" crossorigin/>
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">
              ${result.title}
            </h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${result.key ? "" : "hidden"}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new PreviewService();

},{"url:../../../img/icons.svg":"gg8PR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j4IVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class CopyRight extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <p class="copyright">
      &copy; Copyright by
      <a
        class="twitter-link"
        target="_blank"
        href="https://twitter.com/jonasschmedtman"
        >Jonas Schmedtmann</a
      >. Code rearranged by 
      <a
        class="twitter-link"
        target="_blank"
        href=""
        >Guan Xin Wang</a
      >
    </p>
    `;
    }
}
exports.default = CopyRight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cx2ih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _bookmarkView = require("./bookmark-view/bookmark-view");
var _bookmarkViewDefault = parcelHelpers.interopDefault(_bookmarkView);
customElements.define("app-bookmark-view", (0, _bookmarkViewDefault.default));
class NavBar extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <nav>
      <ul class="nav__list">
        <li class="nav__item">
          <button class="nav__btn nav__btn--add-recipe">
            <svg class="nav__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-edit"></use>
            </svg>
            <span>Add recipe</span>
          </button>
        </li>
        <li class="nav__item">
          <button class="nav__btn nav__btn--bookmarks">
            <svg class="nav__icon">
              <use href="${0, _iconsSvgDefault.default}#icon-bookmark"></use>
            </svg>
            <span>Bookmarks</span>
          </button>
          <!-- bookmarks component -->
          <app-bookmark-view class="bookmarks"></app-bookmark-view>
        </li>
      </ul>
    </nav>
    `;
    }
}
exports.default = NavBar;

},{"url:../../../img/icons.svg":"gg8PR","./bookmark-view/bookmark-view":"3g9B8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eRvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _paginationModel = require("./pagination-model");
var _paginationModelDefault = parcelHelpers.interopDefault(_paginationModel);
class PaginationView extends HTMLElement {
    _parentElement;
    model;
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <div class="pagination"></div>
    `;
        this._parentElement = document.querySelector(".pagination");
        this.setModel((0, _paginationModelDefault.default));
    }
    setModel(model) {
        this.model = model;
    }
}
exports.default = PaginationView;

},{"./pagination-model":"eS4wH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eS4wH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _config = require("../../../config");
class PaginationModel {
    constructor(){}
    generateMarkup(results, page = (0, _config.INITIAL_PAGE)) {
        if (!results) return "";
        const curPage = page;
        const numPages = Math.ceil(results.length / (0, _config.RES_PER_PAGE));
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) return this.generateNextMarkup(curPage);
        // Last page
        if (curPage === numPages && numPages > 1) return this.generatePrevMarkup(curPage);
        // Other page
        if (curPage < numPages) return `${this.generatePrevMarkup(curPage)}${this.generateNextMarkup(curPage)}`;
        // Page 1, and there are NO other pages
        return "";
    }
    generateNextMarkup(curPage) {
        return `
      <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }
    generatePrevMarkup(curPage) {
        return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
    }
}
exports.default = new PaginationModel();

},{"url:../../../../img/icons.svg":"gg8PR","../../../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHASO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _recipeModel = require("./recipe-model");
var _recipeModelDefault = parcelHelpers.interopDefault(_recipeModel);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _rxjs = require("rxjs");
class RecipeView extends HTMLElement {
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "Start by searching for a recipe or an ingredient. Have fun!";
    model;
    constructor(){
        super();
        this.setModel((0, _recipeModelDefault.default));
    }
    connectedCallback() {
        this.innerHTML = window.location.hash ? `
      <div class="message">
        <div class="spinner">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-loader"></use>
          </svg>
        </div>
      </div>
    ` : `
      <div class="message">
        <div>
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    `;
        this.model.setParentElement(this);
        this.addHandlerAddBookmark(this, this.model);
        this.addHandlerUpdateServings(this, this.model);
        this.model.subscribeLoadAndHashChange();
    }
    setModel(model) {
        this.model = model;
    }
    updateServings(newServings) {
        this.model.updateServings(newServings);
    }
    addHandlerUpdateServings(element, handler) {
        (0, _rxjs.fromEvent)(element, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler.updateServings(updateTo);
        });
    }
    addHandlerAddBookmark(element, handler) {
        (0, _rxjs.fromEvent)(element, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler.switchCurrentBookmark();
        });
    }
}
exports.default = RecipeView;

},{"./recipe-model":"5SMoR","url:../../../img/icons.svg":"gg8PR","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5SMoR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rxjs = require("rxjs");
var _helpersJs = require("../../helpers.js");
var _viewService = require("../../services/ui-services/viewService");
var _viewServiceDefault = parcelHelpers.interopDefault(_viewService);
var _queryService = require("../../services/queryService");
var _queryServiceDefault = parcelHelpers.interopDefault(_queryService);
var _bookmarkServiceJs = require("../../services/bookmarkService.js");
var _bookmarkServiceJsDefault = parcelHelpers.interopDefault(_bookmarkServiceJs);
var _recipeServiceJs = require("../../services/ui-services/recipeService.js");
var _recipeServiceJsDefault = parcelHelpers.interopDefault(_recipeServiceJs);
var _helpers = require("../../helpers");
class RecipeModel {
    viewService;
    queryService;
    bookmarkService;
    recipeService;
    _parentElement;
    recipeObservable = new (0, _rxjs.BehaviorSubject)(null);
    bookmarks = [];
    constructor(){
        this.setViewService((0, _viewServiceDefault.default));
        this.setQueryService((0, _queryServiceDefault.default));
        this.setBookmarkService((0, _bookmarkServiceJsDefault.default));
        this.setRecipeService((0, _recipeServiceJsDefault.default));
    }
    setViewService(viewService) {
        this.viewService = viewService;
    }
    setQueryService(queryService) {
        this.queryService = queryService;
    }
    setBookmarkService(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    setRecipeService(recipeService) {
        this.recipeService = recipeService;
    }
    setParentElement(element) {
        this._parentElement = element;
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    subscribeLoadAndHashChange() {
        (0, _rxjs.from)([
            "load",
            "hashchange"
        ]).pipe((0, _rxjs.mergeMap)((event)=>(0, _rxjs.fromEvent)(window, event))).subscribe(()=>{
            this.render();
        });
    }
    render() {
        // 1) Loading recipe
        const id = window.location.hash.slice(1);
        if (!id) return;
        this.loadRecipe(id);
        // 2) Rendering recipe
        this.updateView();
    }
    addBookmark(recipe) {
        // 1) update bookmark state for UI rendering
        this.bookmarks.push(recipe);
        this.bookmarkService.setBookmarkObservable(this.bookmarks);
        // 2) update bookmark state for recipe rendering
        recipe.bookmarked = true;
        this.recipeObservable.next(recipe);
        // 3) persist bookmarks in the local storage
        this.persistBookmarks();
    }
    deleteBookmark(id) {
        // 1) locate bookmark
        const index = this.bookmarks.findIndex((el)=>el.id === id);
        const recipe = this.bookmarks[index];
        // 2) update bookmark state for UI rendering
        recipe.bookmarked = false;
        this.recipeObservable.next(recipe);
        // 3) delete bookmark
        this.bookmarks.splice(index, 1);
        // 4) update bookmark observable
        this.bookmarkService.setBookmarkObservable(this.bookmarks);
        // 5) persist bookmarks in the local storage
        this.persistBookmarks();
    }
    persistBookmarks() {
        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
    }
    clearBookmarks() {
        localStorage.clear("bookmarks");
    }
    clear() {
        this._parentElement.innerHTML = "";
    }
    loadRecipe(id) {
        this._parentElement ?? this.viewService.renderSpinner(this._parentElement.querySelector(".message"));
        try {
            this.queryService.recipeSubscrption(id).subscribe((data)=>{
                if (data) {
                    // 1) create recipe object
                    const recipe = (0, _helpers.createRecipeObject)(data);
                    // 2) update recipe observable; if bookmarked, push to bookmarks
                    this.bookmarkService.bookmarks.some((bookmark)=>bookmark.id === id) ? recipe.bookmarked = this.bookmarks.push(recipe) : recipe.bookmarked = false;
                    // 3) update recipe observable
                    this.recipeObservable.next(recipe);
                }
            });
        } catch (error) {
            throw error;
        }
    }
    updateView() {
        this._parentElement ?? this.viewService.renderSpinner(this._parentElement.querySelector(".message"));
        try {
            this.recipeObservable.subscribe((recipe)=>{
                if (recipe) {
                    const markup = this.recipeService.generateRecipeMarkup(recipe);
                    this._parentElement ?? this.clear();
                    this.viewService.render(true, this._parentElement, markup);
                }
            });
        } catch (error) {
            throw error;
        }
    }
    switchCurrentBookmark() {
        const currentRecipe = this.recipeObservable.value;
        if (!currentRecipe.bookmarked) this.addBookmark(currentRecipe);
        else this.deleteBookmark(currentRecipe.id);
    }
    updateServings(newServings) {
        const currentRecipe = this.recipeObservable.value;
        currentRecipe.ingredients.forEach((ing)=>{
            ing.quantity = ing.quantity * newServings / currentRecipe.servings;
        });
        currentRecipe.servings = newServings;
        this.recipeObservable.next(currentRecipe);
    }
}
exports.default = new RecipeModel();

},{"rxjs":"lLy7s","../../helpers.js":"hGI1E","../../services/ui-services/viewService":"a8rEx","../../services/queryService":"ddQkl","../../services/bookmarkService.js":"jj733","../../services/ui-services/recipeService.js":"9WBB5","../../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ddQkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
var _helpers = require("../helpers");
var _rxjs = require("rxjs");
class QueryService {
    queryObservable = new (0, _rxjs.BehaviorSubject)("");
    getQuery(selector) {
        console.log("getQuery with selector: ", selector);
        const parentElement = document.querySelector(`.${selector}`);
        console.log("parentElement: ", parentElement);
        const recipe = parentElement.querySelector(`.${selector}__field`).value;
        console.log("recipe: ", recipe);
        parentElement.querySelector(`.${selector}__field`).value = "";
        return recipe;
    }
    searchResultsSubscription(query) {
        try {
            return (0, _rxjs.from)((0, _helpers.AJAX)(`${(0, _config.API_URL)}?search=${query}&key=${"b1f8f5d1-f59d-4444-b99c-a12bb1d2ff02"}`));
        } catch (error) {
            throw error;
        }
    }
    recipeSubscrption(id) {
        try {
            return (0, _rxjs.from)((0, _helpers.AJAX)(`${(0, _config.API_URL)}/${id}?key=${"b1f8f5d1-f59d-4444-b99c-a12bb1d2ff02"}`));
        } catch (error) {
            throw error;
        }
    }
}
exports.default = new QueryService();

},{"../config":"k5Hzs","../helpers":"hGI1E","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"EFEjU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _resultModel = require("./result-model");
var _resultModelDefault = parcelHelpers.interopDefault(_resultModel);
var _paginationView = require("./pagination-view/pagination-view");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
customElements.define("app-pagination-view", (0, _paginationViewDefault.default));
class ResultView extends HTMLElement {
    selector = "results";
    model;
    paginationService;
    constructor(){
        super();
        this.setModel((0, _resultModelDefault.default));
    }
    setModel(model) {
        this.model = model;
    }
    setPaginationService(service) {
        this.paginationService = service;
    }
    connectedCallback() {
        // TODO: how to wait for component to be loaded?
        // FIXME: <ul></ul> and <pagination-view></pagination-view> aren't being rendered
        // use mutation observer
        this.innerHTML = `
    <div id="result-data">
      <ul class="${this.selector}"></ul>
      <app-pagination-view></app-pagination-view>
    </div>
    `;
        console.log("result view connectedCallback");
        console.log("result view addEventListner");
        const parentElement = this.querySelector(`.${this.selector}`);
        const paginationElement = this.querySelector(".pagination");
        this.model.setParentElement(parentElement);
        this.model.render(1, paginationElement);
    }
}
exports.default = ResultView;

},{"./result-model":"3C0kW","./pagination-view/pagination-view":"4eRvL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3C0kW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _queryService = require("../../services/queryService");
var _queryServiceDefault = parcelHelpers.interopDefault(_queryService);
var _viewService = require("../../services/ui-services/viewService");
var _viewServiceDefault = parcelHelpers.interopDefault(_viewService);
var _previewService = require("../../services/ui-services/previewService");
var _previewServiceDefault = parcelHelpers.interopDefault(_previewService);
var _paginationService = require("../../services/ui-services/paginationService");
var _paginationServiceDefault = parcelHelpers.interopDefault(_paginationService);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _config = require("../../config");
var _rxjs = require("rxjs");
class ResultModel {
    searchResultsObservable = new (0, _rxjs.BehaviorSubject)([]);
    searchResults = [];
    _parentElement;
    queryService;
    previewService;
    viewSerivce;
    paginationService;
    constructor(){
        this.setQueryService((0, _queryServiceDefault.default));
        this.setPreviewService((0, _previewServiceDefault.default));
        this.setViewService((0, _viewServiceDefault.default));
        this.setPaginationService((0, _paginationServiceDefault.default));
    }
    setQueryService(service) {
        this.queryService = service;
    }
    setPreviewService(service) {
        this.previewService = service;
    }
    setViewService(service) {
        this.viewService = service;
    }
    setPaginationService(service) {
        this.paginationService = service;
    }
    setParentElement(parentElement) {
        this._parentElement = parentElement;
    }
    render(page = (0, _config.INITIAL_PAGE), paginationElement) {
        console.log("pagination in the render in the result-model", paginationElement);
        try {
            this.queryService.queryObservable.subscribe((query)=>{
                if (query) {
                    console.log("query in result-model", query);
                    // 1) load search results
                    this.loadSearchResults(query);
                    // 2) update the result view
                    this.updateView(page, paginationElement);
                }
            });
            // 3) handle pagination clicks
            this.handlePaginationClicks(paginationElement);
        } catch (error) {
            throw error;
        }
    }
    handlePaginationClicks(paginationElement) {
        (0, _rxjs.fromEvent)(paginationElement, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            this.updateView(goToPage, paginationElement);
        });
    }
    clear() {
        this._parentElement.innerHTML = "";
    }
    loadSearchResults(query) {
        try {
            // 1) render the spinner while loading the data
            this.viewService.renderSpinner(this._parentElement);
            // 2) load the search results
            this.queryService.searchResultsSubscription(query).subscribe((data)=>{
                const recipes = data.data.recipes.map((rec)=>{
                    return {
                        id: rec.id,
                        title: rec.title,
                        publisher: rec.publisher,
                        image: rec.image_url,
                        sourceUrl: rec.source_url,
                        ...rec.key && {
                            key: rec.key
                        }
                    };
                });
                this.searchResultsObservable.next(recipes);
                this.searchResults = recipes;
            });
        } catch (error) {
            throw error;
        }
    }
    updateView(page, paginationElement) {
        this.searchResultsObservable.subscribe((data)=>{
            if (data && data.length > 0) {
                // // 1) render results
                this.clear();
                const paginationData = this.getSearchResultsPaginationPage(data, page);
                const markup = this.generatePreviewMarkup(paginationData);
                this.viewService.render(true, this._parentElement, markup);
                // // 2) pagination buttons
                this.paginationService.clear(paginationElement);
                const paginationMarkup = this.paginationService.generateMarkup(data, page);
                this.viewService.render(true, paginationElement, paginationMarkup);
                console.log("data ", data);
            }
        });
    }
    getSearchResultsPaginationPage(results, page = (0, _config.INITIAL_PAGE)) {
        const start = (page - 1) * (0, _config.RES_PER_PAGE);
        const end = page * (0, _config.RES_PER_PAGE);
        return results.slice(start, end);
    }
    generatePreviewMarkup(results) {
        return results.map((result)=>this.viewService.render(false, "", this.previewService.generateMarkup(result))).join("");
    }
}
exports.default = new ResultModel();

},{"../../services/queryService":"ddQkl","../../services/ui-services/viewService":"a8rEx","../../services/ui-services/previewService":"f8Ogl","../../services/ui-services/paginationService":"21AQl","url:../../../img/icons.svg":"gg8PR","../../config":"k5Hzs","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"21AQl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _config = require("../../config");
var _rxjs = require("rxjs");
// TODO: will be combined inside the result-view
class PaginationService {
    // _parentElement = document.querySelector('.pagination');
    pageObservable = new (0, _rxjs.BehaviorSubject)((0, _config.INITIAL_PAGE));
    constructor(){}
    addHandlerClick(element, handler) {
        // this._parentElement.addEventListener('click', function (e) {
        //   const btn = e.target.closest('.btn--inline');
        //   if (!btn) return;
        //   const goToPage = +btn.dataset.goto;
        //   handler(goToPage);
        // });
        // should pass document.querySelector('.pagination') as element
        console.log("element", element);
        console.log("handler", handler);
        (0, _rxjs.fromEvent)(element, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    clear(parentElement) {
        parentElement.innerHTML = "";
    }
    generateMarkup(results, page = (0, _config.INITIAL_PAGE)) {
        if (!results) return "";
        const curPage = page;
        const numPages = Math.ceil(results.length / (0, _config.RES_PER_PAGE));
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) return this.generateNextMarkup(curPage);
        // Last page
        if (curPage === numPages && numPages > 1) return this.generatePrevMarkup(curPage);
        // Other page
        if (curPage < numPages) return `${this.generatePrevMarkup(curPage)}${this.generateNextMarkup(curPage)}`;
        // Page 1, and there are NO other pages
        return "";
    }
    generateNextMarkup(curPage) {
        return `
      <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }
    generatePrevMarkup(curPage) {
        return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
    }
}
exports.default = new PaginationService();

},{"url:../../../img/icons.svg":"gg8PR","../../config":"k5Hzs","rxjs":"lLy7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4R6xY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _queryService = require("../../services/queryService");
var _queryServiceDefault = parcelHelpers.interopDefault(_queryService);
var _iconsSvg = require("url:../../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _rxjs = require("rxjs");
var _helpers = require("../../helpers");
class SearchBar extends HTMLElement {
    _selector = "search";
    queryService;
    constructor(){
        super();
        this.setQueryService((0, _queryServiceDefault.default));
        this.addHandlerSearch(this.queryService, this._selector);
    }
    setQueryService(queryService) {
        this.queryService = queryService;
    }
    connectedCallback() {
        this.innerHTML = `
    <form class="${this._selector}">
      <input
        type="text"
        class="${this._selector}__field"
        placeholder="Search over 1,000,000 recipes..."
      />
      <button class="btn ${this._selector}__btn">
        <svg class="${this._selector}__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-search"></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
    `;
    }
    addHandlerSearch(service, selector) {
        (0, _helpers.waitForElm)(`.${selector}`).then(()=>{
            // console.log('search bar addEventListner');
            (0, _rxjs.fromEvent)(this, "submit").subscribe((e)=>{
                e.preventDefault();
                const query = service.getQuery(selector);
                service.queryObservable.next(query);
            });
        });
    }
}
exports.default = SearchBar;

},{"../../services/queryService":"ddQkl","url:../../../img/icons.svg":"gg8PR","rxjs":"lLy7s","../../helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tVao":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("ixJtV") + "logo.22d25e67.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["7ZoMj","8lRBv"], "8lRBv", "parcelRequire4634")

//# sourceMappingURL=index.59a40e7a.js.map