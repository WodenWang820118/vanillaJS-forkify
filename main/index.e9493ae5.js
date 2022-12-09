function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $c37e2bb3cd4230fb$exports = {};
var $c37e2bb3cd4230fb$var$check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$c37e2bb3cd4230fb$exports = // eslint-disable-next-line es/no-global-this -- safe
$c37e2bb3cd4230fb$var$check(typeof globalThis == "object" && globalThis) || $c37e2bb3cd4230fb$var$check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
$c37e2bb3cd4230fb$var$check(typeof self == "object" && self) || $c37e2bb3cd4230fb$var$check(typeof $parcel$global == "object" && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();


var $c1eb488fb5d35ea0$exports = {};
var $06dd7a9465fc92a1$exports = {};
$06dd7a9465fc92a1$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


// Detect IE8's incomplete defineProperty implementation
$c1eb488fb5d35ea0$exports = !$06dd7a9465fc92a1$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});


var $b0b67739de8a76ce$exports = {};
var $0ec9f7d9cac97159$exports = {};

var $747a6f98fde2f989$exports = {};
var $c3b321904559a4d3$exports = {};
var $c3b321904559a4d3$var$documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var $c3b321904559a4d3$var$IS_HTMLDDA = typeof $c3b321904559a4d3$var$documentAll == "undefined" && $c3b321904559a4d3$var$documentAll !== undefined;
$c3b321904559a4d3$exports = {
    all: $c3b321904559a4d3$var$documentAll,
    IS_HTMLDDA: $c3b321904559a4d3$var$IS_HTMLDDA
};


var $747a6f98fde2f989$var$documentAll = $c3b321904559a4d3$exports.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$747a6f98fde2f989$exports = $c3b321904559a4d3$exports.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === $747a6f98fde2f989$var$documentAll;
} : function(argument) {
    return typeof argument == "function";
};


var $71e39cc8f61a3cf5$exports = {};
var $7b4f3c8a74701aef$exports = {};
var $dc74592fb3ae22d0$exports = {};
var $ee6267cfd048e234$exports = {};
var $9b37b8b9006cf4ac$exports = {};

$9b37b8b9006cf4ac$exports = !$06dd7a9465fc92a1$exports(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});


var $ee6267cfd048e234$var$FunctionPrototype = Function.prototype;
var $ee6267cfd048e234$var$call = $ee6267cfd048e234$var$FunctionPrototype.call;
var $ee6267cfd048e234$var$uncurryThisWithBind = $9b37b8b9006cf4ac$exports && $ee6267cfd048e234$var$FunctionPrototype.bind.bind($ee6267cfd048e234$var$call, $ee6267cfd048e234$var$call);
$ee6267cfd048e234$exports = $9b37b8b9006cf4ac$exports ? $ee6267cfd048e234$var$uncurryThisWithBind : function(fn) {
    return function() {
        return $ee6267cfd048e234$var$call.apply(fn, arguments);
    };
};


var $dc74592fb3ae22d0$var$toString = $ee6267cfd048e234$exports({}.toString);
var $dc74592fb3ae22d0$var$stringSlice = $ee6267cfd048e234$exports("".slice);
$dc74592fb3ae22d0$exports = function(it) {
    return $dc74592fb3ae22d0$var$stringSlice($dc74592fb3ae22d0$var$toString(it), 8, -1);
};



$7b4f3c8a74701aef$exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if ($dc74592fb3ae22d0$exports(fn) === "Function") return $ee6267cfd048e234$exports(fn);
};


var $5b38448587f26bc7$exports = {};
var $f3a5ed4a30f637eb$exports = {};
var $1823570c37abfe9f$exports = {};
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
$1823570c37abfe9f$exports = function(it) {
    return it === null || it === undefined;
};


var $f3a5ed4a30f637eb$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$f3a5ed4a30f637eb$exports = function(it) {
    if ($1823570c37abfe9f$exports(it)) throw $f3a5ed4a30f637eb$var$$TypeError("Can't call method on " + it);
    return it;
};


var $5b38448587f26bc7$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$5b38448587f26bc7$exports = function(argument) {
    return $5b38448587f26bc7$var$$Object($f3a5ed4a30f637eb$exports(argument));
};


var $71e39cc8f61a3cf5$var$hasOwnProperty = $7b4f3c8a74701aef$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
$71e39cc8f61a3cf5$exports = Object.hasOwn || function hasOwn(it, key) {
    return $71e39cc8f61a3cf5$var$hasOwnProperty($5b38448587f26bc7$exports(it), key);
};



var $225404ea4838e758$exports = {};


var $225404ea4838e758$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $225404ea4838e758$var$getDescriptor = $c1eb488fb5d35ea0$exports && Object.getOwnPropertyDescriptor;
var $225404ea4838e758$var$EXISTS = $71e39cc8f61a3cf5$exports($225404ea4838e758$var$FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var $225404ea4838e758$var$PROPER = $225404ea4838e758$var$EXISTS && (function something() {}).name === "something";
var $225404ea4838e758$var$CONFIGURABLE = $225404ea4838e758$var$EXISTS && (!$c1eb488fb5d35ea0$exports || $c1eb488fb5d35ea0$exports && $225404ea4838e758$var$getDescriptor($225404ea4838e758$var$FunctionPrototype, "name").configurable);
$225404ea4838e758$exports = {
    EXISTS: $225404ea4838e758$var$EXISTS,
    PROPER: $225404ea4838e758$var$PROPER,
    CONFIGURABLE: $225404ea4838e758$var$CONFIGURABLE
};


var $0ec9f7d9cac97159$require$CONFIGURABLE_FUNCTION_NAME = $225404ea4838e758$exports.CONFIGURABLE;
var $5a04f31420870e9d$exports = {};


var $57d8028dbf98ff37$exports = {};

var $b3239f2659018a4d$exports = {};

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $b3239f2659018a4d$var$defineProperty = Object.defineProperty;
$b3239f2659018a4d$exports = function(key, value) {
    try {
        $b3239f2659018a4d$var$defineProperty($c37e2bb3cd4230fb$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $c37e2bb3cd4230fb$exports[key] = value;
    }
    return value;
};


var $57d8028dbf98ff37$var$SHARED = "__core-js_shared__";
var $57d8028dbf98ff37$var$store = $c37e2bb3cd4230fb$exports[$57d8028dbf98ff37$var$SHARED] || $b3239f2659018a4d$exports($57d8028dbf98ff37$var$SHARED, {});
$57d8028dbf98ff37$exports = $57d8028dbf98ff37$var$store;


var $5a04f31420870e9d$var$functionToString = $7b4f3c8a74701aef$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$747a6f98fde2f989$exports($57d8028dbf98ff37$exports.inspectSource)) $57d8028dbf98ff37$exports.inspectSource = function(it) {
    return $5a04f31420870e9d$var$functionToString(it);
};
$5a04f31420870e9d$exports = $57d8028dbf98ff37$exports.inspectSource;


var $a068b778bb31c429$exports = {};
var $d73a872fae8a27b4$exports = {};


var $d73a872fae8a27b4$var$WeakMap = $c37e2bb3cd4230fb$exports.WeakMap;
$d73a872fae8a27b4$exports = $747a6f98fde2f989$exports($d73a872fae8a27b4$var$WeakMap) && /native code/.test(String($d73a872fae8a27b4$var$WeakMap));



var $235e1036bb2ace49$exports = {};


var $235e1036bb2ace49$var$documentAll = $c3b321904559a4d3$exports.all;
$235e1036bb2ace49$exports = $c3b321904559a4d3$exports.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : $747a6f98fde2f989$exports(it) || it === $235e1036bb2ace49$var$documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : $747a6f98fde2f989$exports(it);
};


var $6208ea7a29906301$exports = {};

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $b5e5cd22dc728616$export$2d1720544b23b823;

var $48991caff473b43e$exports = {};


var $0e584ce24182bf8c$exports = {};


var $0e584ce24182bf8c$var$document = $c37e2bb3cd4230fb$exports.document;
// typeof document.createElement is 'object' in old IE
var $0e584ce24182bf8c$var$EXISTS = $235e1036bb2ace49$exports($0e584ce24182bf8c$var$document) && $235e1036bb2ace49$exports($0e584ce24182bf8c$var$document.createElement);
$0e584ce24182bf8c$exports = function(it) {
    return $0e584ce24182bf8c$var$EXISTS ? $0e584ce24182bf8c$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$48991caff473b43e$exports = !$c1eb488fb5d35ea0$exports && !$06dd7a9465fc92a1$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty($0e584ce24182bf8c$exports("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});


var $e86dcbbd87619dcf$exports = {};


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$e86dcbbd87619dcf$exports = $c1eb488fb5d35ea0$exports && $06dd7a9465fc92a1$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});


var $f5b8cb055eb2e26c$exports = {};

var $f5b8cb055eb2e26c$var$$String = String;
var $f5b8cb055eb2e26c$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$f5b8cb055eb2e26c$exports = function(argument) {
    if ($235e1036bb2ace49$exports(argument)) return argument;
    throw $f5b8cb055eb2e26c$var$$TypeError($f5b8cb055eb2e26c$var$$String(argument) + " is not an object");
};


var $fe6ef0f38d4ceb78$exports = {};
var $50c92c0872e413ee$exports = {};
var $b5e4b6a176f159a5$exports = {};

var $b5e4b6a176f159a5$var$call = Function.prototype.call;
$b5e4b6a176f159a5$exports = $9b37b8b9006cf4ac$exports ? $b5e4b6a176f159a5$var$call.bind($b5e4b6a176f159a5$var$call) : function() {
    return $b5e4b6a176f159a5$var$call.apply($b5e4b6a176f159a5$var$call, arguments);
};



var $9b34af40e012e30d$exports = {};
var $62975857517e83d8$exports = {};


var $62975857517e83d8$var$aFunction = function(argument) {
    return $747a6f98fde2f989$exports(argument) ? argument : undefined;
};
$62975857517e83d8$exports = function(namespace, method) {
    return arguments.length < 2 ? $62975857517e83d8$var$aFunction($c37e2bb3cd4230fb$exports[namespace]) : $c37e2bb3cd4230fb$exports[namespace] && $c37e2bb3cd4230fb$exports[namespace][method];
};



var $7a3a2cc5fb54e4b6$exports = {};

$7a3a2cc5fb54e4b6$exports = $7b4f3c8a74701aef$exports({}.isPrototypeOf);


var $353525392ad16de1$exports = {};
/* eslint-disable es/no-symbol -- required for testing */ var $7a04d93b26eb4ffb$exports = {};
/* eslint-disable es/no-symbol -- required for testing */ var $3740e5e78ed5b7fa$exports = {};

var $6c9d21df15d3051e$exports = {};

$6c9d21df15d3051e$exports = $62975857517e83d8$exports("navigator", "userAgent") || "";


var $3740e5e78ed5b7fa$var$process = $c37e2bb3cd4230fb$exports.process;
var $3740e5e78ed5b7fa$var$Deno = $c37e2bb3cd4230fb$exports.Deno;
var $3740e5e78ed5b7fa$var$versions = $3740e5e78ed5b7fa$var$process && $3740e5e78ed5b7fa$var$process.versions || $3740e5e78ed5b7fa$var$Deno && $3740e5e78ed5b7fa$var$Deno.version;
var $3740e5e78ed5b7fa$var$v8 = $3740e5e78ed5b7fa$var$versions && $3740e5e78ed5b7fa$var$versions.v8;
var $3740e5e78ed5b7fa$var$match, $3740e5e78ed5b7fa$var$version;
if ($3740e5e78ed5b7fa$var$v8) {
    $3740e5e78ed5b7fa$var$match = $3740e5e78ed5b7fa$var$v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $3740e5e78ed5b7fa$var$version = $3740e5e78ed5b7fa$var$match[0] > 0 && $3740e5e78ed5b7fa$var$match[0] < 4 ? 1 : +($3740e5e78ed5b7fa$var$match[0] + $3740e5e78ed5b7fa$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$3740e5e78ed5b7fa$var$version && $6c9d21df15d3051e$exports) {
    $3740e5e78ed5b7fa$var$match = $6c9d21df15d3051e$exports.match(/Edge\/(\d+)/);
    if (!$3740e5e78ed5b7fa$var$match || $3740e5e78ed5b7fa$var$match[1] >= 74) {
        $3740e5e78ed5b7fa$var$match = $6c9d21df15d3051e$exports.match(/Chrome\/(\d+)/);
        if ($3740e5e78ed5b7fa$var$match) $3740e5e78ed5b7fa$var$version = +$3740e5e78ed5b7fa$var$match[1];
    }
}
$3740e5e78ed5b7fa$exports = $3740e5e78ed5b7fa$var$version;



// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
$7a04d93b26eb4ffb$exports = !!Object.getOwnPropertySymbols && !$06dd7a9465fc92a1$exports(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $3740e5e78ed5b7fa$exports && $3740e5e78ed5b7fa$exports < 41;
});


$353525392ad16de1$exports = $7a04d93b26eb4ffb$exports && !Symbol.sham && typeof Symbol.iterator == "symbol";


var $9b34af40e012e30d$var$$Object = Object;
$9b34af40e012e30d$exports = $353525392ad16de1$exports ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = $62975857517e83d8$exports("Symbol");
    return $747a6f98fde2f989$exports($Symbol) && $7a3a2cc5fb54e4b6$exports($Symbol.prototype, $9b34af40e012e30d$var$$Object(it));
};


var $76976dda1c2615a3$exports = {};
var $518001e477af4662$exports = {};

var $17a93d33506a34bb$exports = {};
var $17a93d33506a34bb$var$$String = String;
$17a93d33506a34bb$exports = function(argument) {
    try {
        return $17a93d33506a34bb$var$$String(argument);
    } catch (error) {
        return "Object";
    }
};


var $518001e477af4662$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$518001e477af4662$exports = function(argument) {
    if ($747a6f98fde2f989$exports(argument)) return argument;
    throw $518001e477af4662$var$$TypeError($17a93d33506a34bb$exports(argument) + " is not a function");
};



// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$76976dda1c2615a3$exports = function(V, P) {
    var func = V[P];
    return $1823570c37abfe9f$exports(func) ? undefined : $518001e477af4662$exports(func);
};


var $186e9add60455392$exports = {};



var $186e9add60455392$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$186e9add60455392$exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && $747a6f98fde2f989$exports(fn = input.toString) && !$235e1036bb2ace49$exports(val = $b5e4b6a176f159a5$exports(fn, input))) return val;
    if ($747a6f98fde2f989$exports(fn = input.valueOf) && !$235e1036bb2ace49$exports(val = $b5e4b6a176f159a5$exports(fn, input))) return val;
    if (pref !== "string" && $747a6f98fde2f989$exports(fn = input.toString) && !$235e1036bb2ace49$exports(val = $b5e4b6a176f159a5$exports(fn, input))) return val;
    throw $186e9add60455392$var$$TypeError("Can't convert object to primitive value");
};


var $8cc62a0933c33a92$exports = {};

var $fa5ce61f44b81532$exports = {};
var $5d5c4c593c1d2043$exports = {};
$5d5c4c593c1d2043$exports = false;



($fa5ce61f44b81532$exports = function(key, value) {
    return $57d8028dbf98ff37$exports[key] || ($57d8028dbf98ff37$exports[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.26.0",
    mode: $5d5c4c593c1d2043$exports ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});



var $680298eee503d67f$exports = {};

var $680298eee503d67f$var$id = 0;
var $680298eee503d67f$var$postfix = Math.random();
var $680298eee503d67f$var$toString = $7b4f3c8a74701aef$exports(1.0.toString);
$680298eee503d67f$exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + $680298eee503d67f$var$toString(++$680298eee503d67f$var$id + $680298eee503d67f$var$postfix, 36);
};




var $8cc62a0933c33a92$var$WellKnownSymbolsStore = $fa5ce61f44b81532$exports("wks");
var $8cc62a0933c33a92$var$Symbol = $c37e2bb3cd4230fb$exports.Symbol;
var $8cc62a0933c33a92$var$symbolFor = $8cc62a0933c33a92$var$Symbol && $8cc62a0933c33a92$var$Symbol["for"];
var $8cc62a0933c33a92$var$createWellKnownSymbol = $353525392ad16de1$exports ? $8cc62a0933c33a92$var$Symbol : $8cc62a0933c33a92$var$Symbol && $8cc62a0933c33a92$var$Symbol.withoutSetter || $680298eee503d67f$exports;
$8cc62a0933c33a92$exports = function(name) {
    if (!$71e39cc8f61a3cf5$exports($8cc62a0933c33a92$var$WellKnownSymbolsStore, name) || !($7a04d93b26eb4ffb$exports || typeof $8cc62a0933c33a92$var$WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if ($7a04d93b26eb4ffb$exports && $71e39cc8f61a3cf5$exports($8cc62a0933c33a92$var$Symbol, name)) $8cc62a0933c33a92$var$WellKnownSymbolsStore[name] = $8cc62a0933c33a92$var$Symbol[name];
        else if ($353525392ad16de1$exports && $8cc62a0933c33a92$var$symbolFor) $8cc62a0933c33a92$var$WellKnownSymbolsStore[name] = $8cc62a0933c33a92$var$symbolFor(description);
        else $8cc62a0933c33a92$var$WellKnownSymbolsStore[name] = $8cc62a0933c33a92$var$createWellKnownSymbol(description);
    }
    return $8cc62a0933c33a92$var$WellKnownSymbolsStore[name];
};


var $50c92c0872e413ee$var$$TypeError = TypeError;
var $50c92c0872e413ee$var$TO_PRIMITIVE = $8cc62a0933c33a92$exports("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$50c92c0872e413ee$exports = function(input, pref) {
    if (!$235e1036bb2ace49$exports(input) || $9b34af40e012e30d$exports(input)) return input;
    var exoticToPrim = $76976dda1c2615a3$exports(input, $50c92c0872e413ee$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = $b5e4b6a176f159a5$exports(exoticToPrim, input, pref);
        if (!$235e1036bb2ace49$exports(result) || $9b34af40e012e30d$exports(result)) return result;
        throw $50c92c0872e413ee$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return $186e9add60455392$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$fe6ef0f38d4ceb78$exports = function(argument) {
    var key = $50c92c0872e413ee$exports(argument, "string");
    return $9b34af40e012e30d$exports(key) ? key : key + "";
};


var $b5e5cd22dc728616$var$$TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $b5e5cd22dc728616$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $b5e5cd22dc728616$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $b5e5cd22dc728616$var$ENUMERABLE = "enumerable";
var $b5e5cd22dc728616$var$CONFIGURABLE = "configurable";
var $b5e5cd22dc728616$var$WRITABLE = "writable";
$b5e5cd22dc728616$export$2d1720544b23b823 = $c1eb488fb5d35ea0$exports ? $e86dcbbd87619dcf$exports ? function defineProperty(O, P, Attributes) {
    $f5b8cb055eb2e26c$exports(O);
    P = $fe6ef0f38d4ceb78$exports(P);
    $f5b8cb055eb2e26c$exports(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && $b5e5cd22dc728616$var$WRITABLE in Attributes && !Attributes[$b5e5cd22dc728616$var$WRITABLE]) {
        var current = $b5e5cd22dc728616$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$b5e5cd22dc728616$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $b5e5cd22dc728616$var$CONFIGURABLE in Attributes ? Attributes[$b5e5cd22dc728616$var$CONFIGURABLE] : current[$b5e5cd22dc728616$var$CONFIGURABLE],
                enumerable: $b5e5cd22dc728616$var$ENUMERABLE in Attributes ? Attributes[$b5e5cd22dc728616$var$ENUMERABLE] : current[$b5e5cd22dc728616$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $b5e5cd22dc728616$var$$defineProperty(O, P, Attributes);
} : $b5e5cd22dc728616$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $f5b8cb055eb2e26c$exports(O);
    P = $fe6ef0f38d4ceb78$exports(P);
    $f5b8cb055eb2e26c$exports(Attributes);
    if ($48991caff473b43e$exports) try {
        return $b5e5cd22dc728616$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $b5e5cd22dc728616$var$$TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};


var $879a512b5bc98d6e$exports = {};
$879a512b5bc98d6e$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


$6208ea7a29906301$exports = $c1eb488fb5d35ea0$exports ? function(object, key, value) {
    return $b5e5cd22dc728616$export$2d1720544b23b823(object, key, $879a512b5bc98d6e$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};




var $70eafb5d2df022db$exports = {};


var $70eafb5d2df022db$var$keys = $fa5ce61f44b81532$exports("keys");
$70eafb5d2df022db$exports = function(key) {
    return $70eafb5d2df022db$var$keys[key] || ($70eafb5d2df022db$var$keys[key] = $680298eee503d67f$exports(key));
};


var $59f78f83a7048194$exports = {};
$59f78f83a7048194$exports = {};


var $a068b778bb31c429$var$OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var $a068b778bb31c429$var$TypeError = $c37e2bb3cd4230fb$exports.TypeError;
var $a068b778bb31c429$var$WeakMap = $c37e2bb3cd4230fb$exports.WeakMap;
var $a068b778bb31c429$var$set, $a068b778bb31c429$var$get, $a068b778bb31c429$var$has;
var $a068b778bb31c429$var$enforce = function(it) {
    return $a068b778bb31c429$var$has(it) ? $a068b778bb31c429$var$get(it) : $a068b778bb31c429$var$set(it, {});
};
var $a068b778bb31c429$var$getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!$235e1036bb2ace49$exports(it) || (state = $a068b778bb31c429$var$get(it)).type !== TYPE) throw $a068b778bb31c429$var$TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if ($d73a872fae8a27b4$exports || $57d8028dbf98ff37$exports.state) {
    var $a068b778bb31c429$var$store = $57d8028dbf98ff37$exports.state || ($57d8028dbf98ff37$exports.state = new $a068b778bb31c429$var$WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ $a068b778bb31c429$var$store.get = $a068b778bb31c429$var$store.get;
    $a068b778bb31c429$var$store.has = $a068b778bb31c429$var$store.has;
    $a068b778bb31c429$var$store.set = $a068b778bb31c429$var$store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ $a068b778bb31c429$var$set = function(it, metadata) {
        if ($a068b778bb31c429$var$store.has(it)) throw $a068b778bb31c429$var$TypeError($a068b778bb31c429$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $a068b778bb31c429$var$store.set(it, metadata);
        return metadata;
    };
    $a068b778bb31c429$var$get = function(it) {
        return $a068b778bb31c429$var$store.get(it) || {};
    };
    $a068b778bb31c429$var$has = function(it) {
        return $a068b778bb31c429$var$store.has(it);
    };
} else {
    var $a068b778bb31c429$var$STATE = $70eafb5d2df022db$exports("state");
    $59f78f83a7048194$exports[$a068b778bb31c429$var$STATE] = true;
    $a068b778bb31c429$var$set = function(it, metadata) {
        if ($71e39cc8f61a3cf5$exports(it, $a068b778bb31c429$var$STATE)) throw $a068b778bb31c429$var$TypeError($a068b778bb31c429$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $6208ea7a29906301$exports(it, $a068b778bb31c429$var$STATE, metadata);
        return metadata;
    };
    $a068b778bb31c429$var$get = function(it) {
        return $71e39cc8f61a3cf5$exports(it, $a068b778bb31c429$var$STATE) ? it[$a068b778bb31c429$var$STATE] : {};
    };
    $a068b778bb31c429$var$has = function(it) {
        return $71e39cc8f61a3cf5$exports(it, $a068b778bb31c429$var$STATE);
    };
}
$a068b778bb31c429$exports = {
    set: $a068b778bb31c429$var$set,
    get: $a068b778bb31c429$var$get,
    has: $a068b778bb31c429$var$has,
    enforce: $a068b778bb31c429$var$enforce,
    getterFor: $a068b778bb31c429$var$getterFor
};


var $0ec9f7d9cac97159$var$enforceInternalState = $a068b778bb31c429$exports.enforce;
var $0ec9f7d9cac97159$var$getInternalState = $a068b778bb31c429$exports.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $0ec9f7d9cac97159$var$defineProperty = Object.defineProperty;
var $0ec9f7d9cac97159$var$CONFIGURABLE_LENGTH = $c1eb488fb5d35ea0$exports && !$06dd7a9465fc92a1$exports(function() {
    return $0ec9f7d9cac97159$var$defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var $0ec9f7d9cac97159$var$TEMPLATE = String(String).split("String");
var $0ec9f7d9cac97159$var$makeBuiltIn = $0ec9f7d9cac97159$exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!$71e39cc8f61a3cf5$exports(value, "name") || $0ec9f7d9cac97159$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if ($c1eb488fb5d35ea0$exports) $0ec9f7d9cac97159$var$defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if ($0ec9f7d9cac97159$var$CONFIGURABLE_LENGTH && options && $71e39cc8f61a3cf5$exports(options, "arity") && value.length !== options.arity) $0ec9f7d9cac97159$var$defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && $71e39cc8f61a3cf5$exports(options, "constructor") && options.constructor) {
            if ($c1eb488fb5d35ea0$exports) $0ec9f7d9cac97159$var$defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $0ec9f7d9cac97159$var$enforceInternalState(value);
    if (!$71e39cc8f61a3cf5$exports(state, "source")) state.source = $0ec9f7d9cac97159$var$TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $0ec9f7d9cac97159$var$makeBuiltIn(function toString() {
    return $747a6f98fde2f989$exports(this) && $0ec9f7d9cac97159$var$getInternalState(this).source || $5a04f31420870e9d$exports(this);
}, "toString");



$b0b67739de8a76ce$exports = function(target, name, descriptor) {
    if (descriptor.get) $0ec9f7d9cac97159$exports(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) $0ec9f7d9cac97159$exports(descriptor.set, name, {
        setter: true
    });
    return $b5e5cd22dc728616$export$2d1720544b23b823(target, name, descriptor);
};


var $9bc05de9b1f62c76$exports = {};
"use strict";

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
$9bc05de9b1f62c76$exports = function() {
    var that = $f5b8cb055eb2e26c$exports(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};



// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var $df79555abb6d091c$var$RegExp = $c37e2bb3cd4230fb$exports.RegExp;
var $df79555abb6d091c$var$RegExpPrototype = $df79555abb6d091c$var$RegExp.prototype;
var $df79555abb6d091c$var$FORCED = $c1eb488fb5d35ea0$exports && $06dd7a9465fc92a1$exports(function() {
    var INDICES_SUPPORT = true;
    try {
        $df79555abb6d091c$var$RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor($df79555abb6d091c$var$RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if ($df79555abb6d091c$var$FORCED) $b0b67739de8a76ce$exports($df79555abb6d091c$var$RegExpPrototype, "flags", {
    configurable: true,
    get: $9bc05de9b1f62c76$exports
});


// TODO: Remove this module from `core-js@4` since it's split to modules listed below
var $5a014f62d5b77e57$exports = {};

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $7ff97e42b60a2fb3$export$2d1720544b23b823;


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $dd275e6b6cd587e9$export$2d1720544b23b823;
"use strict";
var $dd275e6b6cd587e9$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $dd275e6b6cd587e9$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $dd275e6b6cd587e9$var$NASHORN_BUG = $dd275e6b6cd587e9$var$getOwnPropertyDescriptor && !$dd275e6b6cd587e9$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$dd275e6b6cd587e9$export$2d1720544b23b823 = $dd275e6b6cd587e9$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $dd275e6b6cd587e9$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $dd275e6b6cd587e9$var$$propertyIsEnumerable;



var $9e2f2d7c5dd9df52$exports = {};
// toObject with fallback for non-array-like ES3 strings
var $1d4f1a7da923ecb9$exports = {};



var $1d4f1a7da923ecb9$var$$Object = Object;
var $1d4f1a7da923ecb9$var$split = $7b4f3c8a74701aef$exports("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$1d4f1a7da923ecb9$exports = $06dd7a9465fc92a1$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$1d4f1a7da923ecb9$var$$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return $dc74592fb3ae22d0$exports(it) == "String" ? $1d4f1a7da923ecb9$var$split(it, "") : $1d4f1a7da923ecb9$var$$Object(it);
} : $1d4f1a7da923ecb9$var$$Object;



$9e2f2d7c5dd9df52$exports = function(it) {
    return $1d4f1a7da923ecb9$exports($f3a5ed4a30f637eb$exports(it));
};





// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $7ff97e42b60a2fb3$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$7ff97e42b60a2fb3$export$2d1720544b23b823 = $c1eb488fb5d35ea0$exports ? $7ff97e42b60a2fb3$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $9e2f2d7c5dd9df52$exports(O);
    P = $fe6ef0f38d4ceb78$exports(P);
    if ($48991caff473b43e$exports) try {
        return $7ff97e42b60a2fb3$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($71e39cc8f61a3cf5$exports(O, P)) return $879a512b5bc98d6e$exports(!$b5e4b6a176f159a5$exports($dd275e6b6cd587e9$export$2d1720544b23b823, O, P), O[P]);
};


var $5a014f62d5b77e57$require$getOwnPropertyDescriptor = $7ff97e42b60a2fb3$export$2d1720544b23b823;

var $890d20c1bdb6eea3$exports = {};




$890d20c1bdb6eea3$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($747a6f98fde2f989$exports(value)) $0ec9f7d9cac97159$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $b3239f2659018a4d$exports(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else $b5e5cd22dc728616$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $537f36ff51c7dcac$exports = {};

var $69906263af02c36d$exports = {};


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var $9a2e3b737a4fde2f$export$2d1720544b23b823;
var $931b95507edf5296$exports = {};



var $0574d78675ae9774$exports = {};

var $f8c2ad1b3d495e79$exports = {};
var $9a0e1dd92a4860b2$exports = {};
var $45291d81357ac29e$exports = {};
var $45291d81357ac29e$var$ceil = Math.ceil;
var $45291d81357ac29e$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
$45291d81357ac29e$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $45291d81357ac29e$var$floor : $45291d81357ac29e$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$9a0e1dd92a4860b2$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $45291d81357ac29e$exports(number);
};


var $f8c2ad1b3d495e79$var$max = Math.max;
var $f8c2ad1b3d495e79$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$f8c2ad1b3d495e79$exports = function(index, length) {
    var integer = $9a0e1dd92a4860b2$exports(index);
    return integer < 0 ? $f8c2ad1b3d495e79$var$max(integer + length, 0) : $f8c2ad1b3d495e79$var$min(integer, length);
};


var $5438f3b6bfae249e$exports = {};
var $23229330edb0c0a3$exports = {};

var $23229330edb0c0a3$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$23229330edb0c0a3$exports = function(argument) {
    return argument > 0 ? $23229330edb0c0a3$var$min($9a0e1dd92a4860b2$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$5438f3b6bfae249e$exports = function(obj) {
    return $23229330edb0c0a3$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $0574d78675ae9774$var$createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $9e2f2d7c5dd9df52$exports($this);
        var length = $5438f3b6bfae249e$exports(O);
        var index = $f8c2ad1b3d495e79$exports(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
$0574d78675ae9774$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $0574d78675ae9774$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $0574d78675ae9774$var$createMethod(false)
};


var $931b95507edf5296$require$indexOf = $0574d78675ae9774$exports.indexOf;

var $931b95507edf5296$var$push = $7b4f3c8a74701aef$exports([].push);
$931b95507edf5296$exports = function(object, names) {
    var O = $9e2f2d7c5dd9df52$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$71e39cc8f61a3cf5$exports($59f78f83a7048194$exports, key) && $71e39cc8f61a3cf5$exports(O, key) && $931b95507edf5296$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($71e39cc8f61a3cf5$exports(O, key = names[i++])) ~$931b95507edf5296$require$indexOf(result, key) || $931b95507edf5296$var$push(result, key);
    return result;
};


var $b1d9ca6cff68c044$exports = {};
// IE8- don't enum bug keys
$b1d9ca6cff68c044$exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];


var $9a2e3b737a4fde2f$var$hiddenKeys = $b1d9ca6cff68c044$exports.concat("length", "prototype");
$9a2e3b737a4fde2f$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $931b95507edf5296$exports(O, $9a2e3b737a4fde2f$var$hiddenKeys);
};


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var $481660d150565261$export$2d1720544b23b823;
$481660d150565261$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $69906263af02c36d$var$concat = $7b4f3c8a74701aef$exports([].concat);
// all object keys, includes non-enumerable and symbols
$69906263af02c36d$exports = $62975857517e83d8$exports("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = $9a2e3b737a4fde2f$export$2d1720544b23b823($f5b8cb055eb2e26c$exports(it));
    var getOwnPropertySymbols = $481660d150565261$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $69906263af02c36d$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$537f36ff51c7dcac$exports = function(target, source, exceptions) {
    var keys = $69906263af02c36d$exports(source);
    var defineProperty = $b5e5cd22dc728616$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $7ff97e42b60a2fb3$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$71e39cc8f61a3cf5$exports(target, key) && !(exceptions && $71e39cc8f61a3cf5$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $b23321cf4c6d7d7d$exports = {};


var $b23321cf4c6d7d7d$var$replacement = /#|\.prototype\./;
var $b23321cf4c6d7d7d$var$isForced = function(feature, detection) {
    var value = $b23321cf4c6d7d7d$var$data[$b23321cf4c6d7d7d$var$normalize(feature)];
    return value == $b23321cf4c6d7d7d$var$POLYFILL ? true : value == $b23321cf4c6d7d7d$var$NATIVE ? false : $747a6f98fde2f989$exports(detection) ? $06dd7a9465fc92a1$exports(detection) : !!detection;
};
var $b23321cf4c6d7d7d$var$normalize = $b23321cf4c6d7d7d$var$isForced.normalize = function(string) {
    return String(string).replace($b23321cf4c6d7d7d$var$replacement, ".").toLowerCase();
};
var $b23321cf4c6d7d7d$var$data = $b23321cf4c6d7d7d$var$isForced.data = {};
var $b23321cf4c6d7d7d$var$NATIVE = $b23321cf4c6d7d7d$var$isForced.NATIVE = "N";
var $b23321cf4c6d7d7d$var$POLYFILL = $b23321cf4c6d7d7d$var$isForced.POLYFILL = "P";
$b23321cf4c6d7d7d$exports = $b23321cf4c6d7d7d$var$isForced;


/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ $5a014f62d5b77e57$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $c37e2bb3cd4230fb$exports;
    else if (STATIC) target = $c37e2bb3cd4230fb$exports[TARGET] || $b3239f2659018a4d$exports(TARGET, {});
    else target = ($c37e2bb3cd4230fb$exports[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $5a014f62d5b77e57$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $b23321cf4c6d7d7d$exports(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            $537f36ff51c7dcac$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $6208ea7a29906301$exports(sourceProperty, "sham", true);
        $890d20c1bdb6eea3$exports(target, key, sourceProperty, options);
    }
};



var $e2f8ea8443f20371$exports = {};

var $4f3661ccd8af91c6$exports = {};

var $4f3661ccd8af91c6$var$FunctionPrototype = Function.prototype;
var $4f3661ccd8af91c6$var$apply = $4f3661ccd8af91c6$var$FunctionPrototype.apply;
var $4f3661ccd8af91c6$var$call = $4f3661ccd8af91c6$var$FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
$4f3661ccd8af91c6$exports = typeof Reflect == "object" && Reflect.apply || ($9b37b8b9006cf4ac$exports ? $4f3661ccd8af91c6$var$call.bind($4f3661ccd8af91c6$var$apply) : function() {
    return $4f3661ccd8af91c6$var$call.apply($4f3661ccd8af91c6$var$apply, arguments);
});


var $40a1730abd0f64ec$exports = {};



var $40a1730abd0f64ec$var$bind = $7b4f3c8a74701aef$exports($7b4f3c8a74701aef$exports.bind);
// optional / simple context binding
$40a1730abd0f64ec$exports = function(fn, that) {
    $518001e477af4662$exports(fn);
    return that === undefined ? fn : $9b37b8b9006cf4ac$exports ? $40a1730abd0f64ec$var$bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};





var $98ac08dca2d42cc7$exports = {};

$98ac08dca2d42cc7$exports = $62975857517e83d8$exports("document", "documentElement");


var $b96ff4ea99744d48$exports = {};

$b96ff4ea99744d48$exports = $7b4f3c8a74701aef$exports([].slice);



var $d284000c904fcfd2$exports = {};
var $d284000c904fcfd2$var$$TypeError = TypeError;
$d284000c904fcfd2$exports = function(passed, required) {
    if (passed < required) throw $d284000c904fcfd2$var$$TypeError("Not enough arguments");
    return passed;
};


var $df853309969a1bcf$exports = {};

$df853309969a1bcf$exports = /(?:ipad|iphone|ipod).*applewebkit/i.test($6c9d21df15d3051e$exports);


var $ec0bbe9d5466c5c3$exports = {};


$ec0bbe9d5466c5c3$exports = $dc74592fb3ae22d0$exports($c37e2bb3cd4230fb$exports.process) == "process";


var $e2f8ea8443f20371$var$set = $c37e2bb3cd4230fb$exports.setImmediate;
var $e2f8ea8443f20371$var$clear = $c37e2bb3cd4230fb$exports.clearImmediate;
var $e2f8ea8443f20371$var$process = $c37e2bb3cd4230fb$exports.process;
var $e2f8ea8443f20371$var$Dispatch = $c37e2bb3cd4230fb$exports.Dispatch;
var $e2f8ea8443f20371$var$Function = $c37e2bb3cd4230fb$exports.Function;
var $e2f8ea8443f20371$var$MessageChannel = $c37e2bb3cd4230fb$exports.MessageChannel;
var $e2f8ea8443f20371$var$String = $c37e2bb3cd4230fb$exports.String;
var $e2f8ea8443f20371$var$counter = 0;
var $e2f8ea8443f20371$var$queue = {};
var $e2f8ea8443f20371$var$ONREADYSTATECHANGE = "onreadystatechange";
var $e2f8ea8443f20371$var$$location, $e2f8ea8443f20371$var$defer, $e2f8ea8443f20371$var$channel, $e2f8ea8443f20371$var$port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $e2f8ea8443f20371$var$$location = $c37e2bb3cd4230fb$exports.location;
} catch (error) {}
var $e2f8ea8443f20371$var$run = function(id) {
    if ($71e39cc8f61a3cf5$exports($e2f8ea8443f20371$var$queue, id)) {
        var fn = $e2f8ea8443f20371$var$queue[id];
        delete $e2f8ea8443f20371$var$queue[id];
        fn();
    }
};
var $e2f8ea8443f20371$var$runner = function(id) {
    return function() {
        $e2f8ea8443f20371$var$run(id);
    };
};
var $e2f8ea8443f20371$var$listener = function(event) {
    $e2f8ea8443f20371$var$run(event.data);
};
var $e2f8ea8443f20371$var$post = function(id) {
    // old engines have not location.origin
    $c37e2bb3cd4230fb$exports.postMessage($e2f8ea8443f20371$var$String(id), $e2f8ea8443f20371$var$$location.protocol + "//" + $e2f8ea8443f20371$var$$location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!$e2f8ea8443f20371$var$set || !$e2f8ea8443f20371$var$clear) {
    $e2f8ea8443f20371$var$set = function setImmediate(handler) {
        $d284000c904fcfd2$exports(arguments.length, 1);
        var fn = $747a6f98fde2f989$exports(handler) ? handler : $e2f8ea8443f20371$var$Function(handler);
        var args = $b96ff4ea99744d48$exports(arguments, 1);
        $e2f8ea8443f20371$var$queue[++$e2f8ea8443f20371$var$counter] = function() {
            $4f3661ccd8af91c6$exports(fn, undefined, args);
        };
        $e2f8ea8443f20371$var$defer($e2f8ea8443f20371$var$counter);
        return $e2f8ea8443f20371$var$counter;
    };
    $e2f8ea8443f20371$var$clear = function clearImmediate(id) {
        delete $e2f8ea8443f20371$var$queue[id];
    };
    // Node.js 0.8-
    if ($ec0bbe9d5466c5c3$exports) $e2f8ea8443f20371$var$defer = function(id) {
        $e2f8ea8443f20371$var$process.nextTick($e2f8ea8443f20371$var$runner(id));
    };
    else if ($e2f8ea8443f20371$var$Dispatch && $e2f8ea8443f20371$var$Dispatch.now) $e2f8ea8443f20371$var$defer = function(id) {
        $e2f8ea8443f20371$var$Dispatch.now($e2f8ea8443f20371$var$runner(id));
    };
    else if ($e2f8ea8443f20371$var$MessageChannel && !$df853309969a1bcf$exports) {
        $e2f8ea8443f20371$var$channel = new $e2f8ea8443f20371$var$MessageChannel();
        $e2f8ea8443f20371$var$port = $e2f8ea8443f20371$var$channel.port2;
        $e2f8ea8443f20371$var$channel.port1.onmessage = $e2f8ea8443f20371$var$listener;
        $e2f8ea8443f20371$var$defer = $40a1730abd0f64ec$exports($e2f8ea8443f20371$var$port.postMessage, $e2f8ea8443f20371$var$port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if ($c37e2bb3cd4230fb$exports.addEventListener && $747a6f98fde2f989$exports($c37e2bb3cd4230fb$exports.postMessage) && !$c37e2bb3cd4230fb$exports.importScripts && $e2f8ea8443f20371$var$$location && $e2f8ea8443f20371$var$$location.protocol !== "file:" && !$06dd7a9465fc92a1$exports($e2f8ea8443f20371$var$post)) {
        $e2f8ea8443f20371$var$defer = $e2f8ea8443f20371$var$post;
        $c37e2bb3cd4230fb$exports.addEventListener("message", $e2f8ea8443f20371$var$listener, false);
    // IE8-
    } else if ($e2f8ea8443f20371$var$ONREADYSTATECHANGE in $0e584ce24182bf8c$exports("script")) $e2f8ea8443f20371$var$defer = function(id) {
        $98ac08dca2d42cc7$exports.appendChild($0e584ce24182bf8c$exports("script"))[$e2f8ea8443f20371$var$ONREADYSTATECHANGE] = function() {
            $98ac08dca2d42cc7$exports.removeChild(this);
            $e2f8ea8443f20371$var$run(id);
        };
    };
    else $e2f8ea8443f20371$var$defer = function(id) {
        setTimeout($e2f8ea8443f20371$var$runner(id), 0);
    };
}
$e2f8ea8443f20371$exports = {
    set: $e2f8ea8443f20371$var$set,
    clear: $e2f8ea8443f20371$var$clear
};


var $f1e9b10096d9ab1a$require$clearImmediate = $e2f8ea8443f20371$exports.clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$5a014f62d5b77e57$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $c37e2bb3cd4230fb$exports.clearImmediate !== $f1e9b10096d9ab1a$require$clearImmediate
}, {
    clearImmediate: $f1e9b10096d9ab1a$require$clearImmediate
});





var $d79318b0acb022ac$require$setImmediate = $e2f8ea8443f20371$exports.set;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$5a014f62d5b77e57$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $c37e2bb3cd4230fb$exports.setImmediate !== $d79318b0acb022ac$require$setImmediate
}, {
    setImmediate: $d79318b0acb022ac$require$setImmediate
});




const $7c20b6b1206bfad9$export$923ea8233b386e99 = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const $7c20b6b1206bfad9$export$196440f71ed9f601 = 10;
const $7c20b6b1206bfad9$export$faa2b466ca10a03 = 1;
const $7c20b6b1206bfad9$export$5feaddb1377b7f5e = 10;
const $7c20b6b1206bfad9$export$3ce8858248d89a69 = 2.5;


const $4aa5c58d1e89c784$var$timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const $4aa5c58d1e89c784$export$2b3ff41fecbef7c8 = async function(url, uploadData) {
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
            $4aa5c58d1e89c784$var$timeout((0, $7c20b6b1206bfad9$export$196440f71ed9f601))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const $4aa5c58d1e89c784$export$d047a7c56db64af4 = async function(url) {
    try {
        const fetchPro = fetch(url);
        const res = await Promise.race([
            fetchPro,
            $4aa5c58d1e89c784$var$timeout((0, $7c20b6b1206bfad9$export$196440f71ed9f601))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};
const $4aa5c58d1e89c784$export$39e0fd3547bcb345 = async function(url, uploadData) {
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
            $4aa5c58d1e89c784$var$timeout((0, $7c20b6b1206bfad9$export$196440f71ed9f601))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};
const $4aa5c58d1e89c784$export$2753bdb0d7b42232 = function(data) {
    const { recipe: recipe  } = data.data;
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
const $4aa5c58d1e89c784$export$50538080491de5d2 = function(selector) {
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
/* test block */ $4aa5c58d1e89c784$export$50538080491de5d2(".search-results").then((elm)=>{
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
const $4aa5c58d1e89c784$export$93e3f66e23f39efc = async function(file) {
    const response = await fetch(file);
    const text = await response.text();
    return text;
};
const $4aa5c58d1e89c784$export$5fe5bb8e8123e760 = function(baseClass, interfaces) {
    class Component extends baseClass {
        constructor(){
            super();
            this.setInterfaces(interfaces);
            this.checkIfImplemented();
        }
        setInterfaces(interfaces) {
            this.interfaces = interfaces;
        }
        getPrototype() {
            return Object.getPrototypeOf(this);
        }
        getPrototypeMethods() {
            return Object.getOwnPropertyNames(this.getPrototype());
        }
        getClassName() {
            return this.getPrototype().constructor.name;
        }
        checkIfImplemented() {
            this.interfaces.forEach((subInterface)=>{
                let proto = subInterface.prototype;
                Object.getOwnPropertyNames(proto).forEach((methodName)=>{
                    if (methodName !== "constructor" && typeof proto[methodName] === "function" && !this.getPrototypeMethods().includes(methodName)) console.warn("WARNING! Method " + methodName + " is not implemented in " + this.getClassName());
                });
            });
        }
    }
    return Component;
};


class $687bf33038c0e83e$export$9069f73e2a6ebf48 {
    constructor(){}
    _WARNING(fname = "unknown method") {
        console.warn(`${fname} is not implemented`);
    }
}


class $2d6afd91477dfeab$export$6931971ec8087668 extends (0, $687bf33038c0e83e$export$9069f73e2a6ebf48) {
    constructor(){
        super();
    }
    afterViewInit() {
        this._WARNING("afterViewInit");
    }
}


// classes


var $8e05a87072528d3c$exports = {};
$8e05a87072528d3c$exports = new URL("icons.d04996bd.svg", import.meta.url).toString();


class $b69f470961da6d21$var$ViewService {
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
          <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports)))}#icon-loader"></use>
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
          <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports)))}#icon-alert-triangle"></use>
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
            <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports)))}#icon-smile"></use>
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
var $b69f470961da6d21$export$2e2bcd8739ae039 = new $b69f470961da6d21$var$ViewService();


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
***************************************************************************** */ /* global Reflect, Promise */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
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
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
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
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
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
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
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
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
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
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
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
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
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
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
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
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}




function $aba51950c962bcc0$export$f6e2535fb5126e54(value) {
    return typeof value === "function";
}




function $8924b98fe88dc572$export$128a15b65d1b6041(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}


var $99e267bc00846c20$export$c9648b76fd580c34 = (0, $8924b98fe88dc572$export$128a15b65d1b6041)(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
    };
});


function $d336f495c98cb9d3$export$dae3f38077fc36c0(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}


var $99f8173495214a55$export$f55210826850c514 = function() {
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
                    for(var _parentage_1 = (0, $24c52f343453d62d$export$19a8beecd37a4c45)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
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
            if ((0, $aba51950c962bcc0$export$f6e2535fb5126e54)(initialFinalizer)) try {
                initialFinalizer();
            } catch (e) {
                errors = e instanceof (0, $99e267bc00846c20$export$c9648b76fd580c34) ? e.errors : [
                    e
                ];
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for(var _finalizers_1 = (0, $24c52f343453d62d$export$19a8beecd37a4c45)(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()){
                        var finalizer = _finalizers_1_1.value;
                        try {
                            $99f8173495214a55$var$execFinalizer(finalizer);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof (0, $99e267bc00846c20$export$c9648b76fd580c34)) errors = (0, $24c52f343453d62d$export$1216008129fb82ed)((0, $24c52f343453d62d$export$1216008129fb82ed)([], (0, $24c52f343453d62d$export$8d051b38c9118094)(errors)), (0, $24c52f343453d62d$export$8d051b38c9118094)(err.errors));
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
            if (errors) throw new (0, $99e267bc00846c20$export$c9648b76fd580c34)(errors);
        }
    };
    Subscription.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) $99f8173495214a55$var$execFinalizer(teardown);
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
        else if (Array.isArray(_parentage)) (0, $d336f495c98cb9d3$export$dae3f38077fc36c0)(_parentage, parent);
    };
    Subscription.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && (0, $d336f495c98cb9d3$export$dae3f38077fc36c0)(_finalizers, teardown);
        if (teardown instanceof Subscription) teardown._removeParent(this);
    };
    Subscription.EMPTY = function() {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    }();
    return Subscription;
}();
var $99f8173495214a55$export$610f9c3ca1a38dd8 = $99f8173495214a55$export$f55210826850c514.EMPTY;
function $99f8173495214a55$export$4f9221cbada3c4fc(value) {
    return value instanceof $99f8173495214a55$export$f55210826850c514 || value && "closed" in value && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value.remove) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value.add) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value.unsubscribe);
}
function $99f8173495214a55$var$execFinalizer(finalizer) {
    if ((0, $aba51950c962bcc0$export$f6e2535fb5126e54)(finalizer)) finalizer();
    else finalizer.unsubscribe();
}


var $38ce846ee208f922$export$e506a1d27d1eaa20 = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};




var $60831abd9daaabfa$export$365aa6bd3c788e3d = {
    setTimeout: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var delegate = $60831abd9daaabfa$export$365aa6bd3c788e3d.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) return delegate.setTimeout.apply(delegate, (0, $24c52f343453d62d$export$1216008129fb82ed)([
            handler,
            timeout
        ], (0, $24c52f343453d62d$export$8d051b38c9118094)(args)));
        return setTimeout.apply(void 0, (0, $24c52f343453d62d$export$1216008129fb82ed)([
            handler,
            timeout
        ], (0, $24c52f343453d62d$export$8d051b38c9118094)(args)));
    },
    clearTimeout: function(handle) {
        var delegate = $60831abd9daaabfa$export$365aa6bd3c788e3d.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
};


function $df2d12efb0044931$export$ebf645db02d3e99f(err) {
    (0, $60831abd9daaabfa$export$365aa6bd3c788e3d).setTimeout(function() {
        var onUnhandledError = (0, $38ce846ee208f922$export$e506a1d27d1eaa20).onUnhandledError;
        if (onUnhandledError) onUnhandledError(err);
        else throw err;
    });
}


function $30056e43f9ae4004$export$8793edee2d425525() {}


var $39aac4b1b0064730$export$b7f97edb34bc1f87 = function() {
    return $39aac4b1b0064730$export$9c8f6e8d39c60cf3("C", undefined, undefined);
}();
function $39aac4b1b0064730$export$dd472c3d8fe5a85a(error) {
    return $39aac4b1b0064730$export$9c8f6e8d39c60cf3("E", undefined, error);
}
function $39aac4b1b0064730$export$ff9346b0d1d30313(value) {
    return $39aac4b1b0064730$export$9c8f6e8d39c60cf3("N", value, undefined);
}
function $39aac4b1b0064730$export$9c8f6e8d39c60cf3(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}




var $d49fcc1e893a8543$var$context = null;
function $d49fcc1e893a8543$export$d974811edc77eafa(cb) {
    if ((0, $38ce846ee208f922$export$e506a1d27d1eaa20).useDeprecatedSynchronousErrorHandling) {
        var isRoot = !$d49fcc1e893a8543$var$context;
        if (isRoot) $d49fcc1e893a8543$var$context = {
            errorThrown: false,
            error: null
        };
        cb();
        if (isRoot) {
            var _a = $d49fcc1e893a8543$var$context, errorThrown = _a.errorThrown, error = _a.error;
            $d49fcc1e893a8543$var$context = null;
            if (errorThrown) throw error;
        }
    } else cb();
}
function $d49fcc1e893a8543$export$3e205fbb5df021e0(err) {
    if ((0, $38ce846ee208f922$export$e506a1d27d1eaa20).useDeprecatedSynchronousErrorHandling && $d49fcc1e893a8543$var$context) {
        $d49fcc1e893a8543$var$context.errorThrown = true;
        $d49fcc1e893a8543$var$context.error = err;
    }
}


var $39787920176197bf$export$60959659b2c22881 = function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0, $99f8173495214a55$export$4f9221cbada3c4fc)(destination)) destination.add(_this);
        } else _this.destination = $39787920176197bf$export$88d395d20619a0af;
        return _this;
    }
    Subscriber.create = function(next, error, complete) {
        return new $39787920176197bf$export$94eeb6a328cab6c7(next, error, complete);
    };
    Subscriber.prototype.next = function(value) {
        if (this.isStopped) $39787920176197bf$var$handleStoppedNotification((0, $39aac4b1b0064730$export$ff9346b0d1d30313)(value), this);
        else this._next(value);
    };
    Subscriber.prototype.error = function(err) {
        if (this.isStopped) $39787920176197bf$var$handleStoppedNotification((0, $39aac4b1b0064730$export$dd472c3d8fe5a85a)(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (this.isStopped) $39787920176197bf$var$handleStoppedNotification((0, $39aac4b1b0064730$export$b7f97edb34bc1f87), this);
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
}((0, $99f8173495214a55$export$f55210826850c514));
var $39787920176197bf$var$_bind = Function.prototype.bind;
function $39787920176197bf$var$bind(fn, thisArg) {
    return $39787920176197bf$var$_bind.call(fn, thisArg);
}
var $39787920176197bf$var$ConsumerObserver = function() {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) try {
            partialObserver.next(value);
        } catch (error) {
            $39787920176197bf$var$handleUnhandledError(error);
        }
    };
    ConsumerObserver.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) try {
            partialObserver.error(err);
        } catch (error) {
            $39787920176197bf$var$handleUnhandledError(error);
        }
        else $39787920176197bf$var$handleUnhandledError(err);
    };
    ConsumerObserver.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) try {
            partialObserver.complete();
        } catch (error) {
            $39787920176197bf$var$handleUnhandledError(error);
        }
    };
    return ConsumerObserver;
}();
var $39787920176197bf$export$94eeb6a328cab6c7 = function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if ((0, $aba51950c962bcc0$export$f6e2535fb5126e54)(observerOrNext) || !observerOrNext) partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
            error: error !== null && error !== void 0 ? error : undefined,
            complete: complete !== null && complete !== void 0 ? complete : undefined
        };
        else {
            var context_1;
            if (_this && (0, $38ce846ee208f922$export$e506a1d27d1eaa20).useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
                partialObserver = {
                    next: observerOrNext.next && $39787920176197bf$var$bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && $39787920176197bf$var$bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && $39787920176197bf$var$bind(observerOrNext.complete, context_1)
                };
            } else partialObserver = observerOrNext;
        }
        _this.destination = new $39787920176197bf$var$ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}($39787920176197bf$export$60959659b2c22881);
function $39787920176197bf$var$handleUnhandledError(error) {
    if ((0, $38ce846ee208f922$export$e506a1d27d1eaa20).useDeprecatedSynchronousErrorHandling) (0, $d49fcc1e893a8543$export$3e205fbb5df021e0)(error);
    else (0, $df2d12efb0044931$export$ebf645db02d3e99f)(error);
}
function $39787920176197bf$var$defaultErrorHandler(err) {
    throw err;
}
function $39787920176197bf$var$handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = (0, $38ce846ee208f922$export$e506a1d27d1eaa20).onStoppedNotification;
    onStoppedNotification && (0, $60831abd9daaabfa$export$365aa6bd3c788e3d).setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
var $39787920176197bf$export$88d395d20619a0af = {
    closed: true,
    next: (0, $30056e43f9ae4004$export$8793edee2d425525),
    error: $39787920176197bf$var$defaultErrorHandler,
    complete: (0, $30056e43f9ae4004$export$8793edee2d425525)
};



var $4851da5db82697ea$export$5ab46cbf6120b33a = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();


function $88f4bc66c8b97c9b$export$f0954fd7d5368655(x) {
    return x;
}


function $4c95b251c9210019$export$a4627e546088548d() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return $4c95b251c9210019$export$71f88a61afaa14d7(fns);
}
function $4c95b251c9210019$export$71f88a61afaa14d7(fns) {
    if (fns.length === 0) return 0, $88f4bc66c8b97c9b$export$f0954fd7d5368655;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}





var $d05641f88a6e359d$export$77cea355fa80b5f4 = function() {
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
        var subscriber = $d05641f88a6e359d$var$isSubscriber(observerOrNext) ? observerOrNext : new (0, $39787920176197bf$export$94eeb6a328cab6c7)(observerOrNext, error, complete);
        (0, $d49fcc1e893a8543$export$d974811edc77eafa)(function() {
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
        promiseCtor = $d05641f88a6e359d$var$getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscriber = new (0, $39787920176197bf$export$94eeb6a328cab6c7)({
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
    Observable.prototype[0, $4851da5db82697ea$export$5ab46cbf6120b33a] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        return (0, $4c95b251c9210019$export$71f88a61afaa14d7)(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = $d05641f88a6e359d$var$getPromiseCtor(promiseCtor);
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
function $d05641f88a6e359d$var$getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : (0, $38ce846ee208f922$export$e506a1d27d1eaa20).Promise) !== null && _a !== void 0 ? _a : Promise;
}
function $d05641f88a6e359d$var$isObserver(value) {
    return value && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value.next) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value.error) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value.complete);
}
function $d05641f88a6e359d$var$isSubscriber(value) {
    return value && value instanceof (0, $39787920176197bf$export$60959659b2c22881) || $d05641f88a6e359d$var$isObserver(value) && (0, $99f8173495214a55$export$4f9221cbada3c4fc)(value);
}




var $888c6995415de226$export$f708eee25634bc80 = (0, $8924b98fe88dc572$export$128a15b65d1b6041)(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
    };
});




var $0cb00b85ea02a5e1$export$b6bbab5a9b109038 = function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(Subject, _super);
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
        var subject = new $0cb00b85ea02a5e1$export$155189cde295587d(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function() {
        if (this.closed) throw new (0, $888c6995415de226$export$f708eee25634bc80)();
    };
    Subject.prototype.next = function(value) {
        var _this = this;
        (0, $d49fcc1e893a8543$export$d974811edc77eafa)(function() {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) _this.currentObservers = Array.from(_this.observers);
                try {
                    for(var _b = (0, $24c52f343453d62d$export$19a8beecd37a4c45)(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()){
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
        (0, $d49fcc1e893a8543$export$d974811edc77eafa)(function() {
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
        (0, $d49fcc1e893a8543$export$d974811edc77eafa)(function() {
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
        if (hasError || isStopped) return 0, $99f8173495214a55$export$610f9c3ca1a38dd8;
        this.currentObservers = null;
        observers.push(subscriber);
        return new (0, $99f8173495214a55$export$f55210826850c514)(function() {
            _this.currentObservers = null;
            (0, $d336f495c98cb9d3$export$dae3f38077fc36c0)(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) subscriber.complete();
    };
    Subject.prototype.asObservable = function() {
        var observable = new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new $0cb00b85ea02a5e1$export$155189cde295587d(destination, source);
    };
    return Subject;
}((0, $d05641f88a6e359d$export$77cea355fa80b5f4));
var $0cb00b85ea02a5e1$export$155189cde295587d = function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(AnonymousSubject, _super);
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
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : (0, $99f8173495214a55$export$610f9c3ca1a38dd8);
    };
    return AnonymousSubject;
}($0cb00b85ea02a5e1$export$b6bbab5a9b109038);


var $ae5288954551eccd$export$cc3d42e6b2b9cf8b = function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(BehaviorSubject, _super);
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
}((0, $0cb00b85ea02a5e1$export$b6bbab5a9b109038));


class $f844749fb48c2ba1$var$BookmarkService {
    bookmarksObservable = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)([]);
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
var $f844749fb48c2ba1$export$2e2bcd8739ae039 = new $f844749fb48c2ba1$var$BookmarkService();



var $0cda1c6dd59a4828$export$1e2f57719e155213 = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
};



function $8b2dd2161406ec3c$export$4369c812aac99591(value) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(value === null || value === void 0 ? void 0 : value.then);
}





function $dbdfff9df420b143$export$48c0cddbc99c45c2(input) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(input[0, $4851da5db82697ea$export$5ab46cbf6120b33a]);
}



function $be176c234c83d50d$export$edb10ab8dd75a915(obj) {
    return Symbol.asyncIterator && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}


function $8301fd13cdffc629$export$7cbe71b9fa263484(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}


function $6ca18b093ce664af$export$aa9956be4ae4fe8() {
    if (typeof Symbol !== "function" || !Symbol.iterator) return "@@iterator";
    return Symbol.iterator;
}
var $6ca18b093ce664af$export$6f58e2338da23f4d = $6ca18b093ce664af$export$aa9956be4ae4fe8();



function $a63f0168c5760b16$export$9652023d9040757(input) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(input === null || input === void 0 ? void 0 : input[0, $6ca18b093ce664af$export$6f58e2338da23f4d]);
}




function $c412bff867cdade8$export$cf4785e597badab3(readableStream) {
    return (0, $24c52f343453d62d$export$e427f37a30a4de9b)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0, $24c52f343453d62d$export$67ebef60e6f28a6)(this, function(_b) {
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
                        (0, $24c52f343453d62d$export$10c90e4f7922046c)(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        (0, $24c52f343453d62d$export$10c90e4f7922046c)(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        (0, $24c52f343453d62d$export$10c90e4f7922046c)(value)
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
function $c412bff867cdade8$export$c088ffafdba7405f(obj) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}





function $364eb1b6adbbe903$export$6a9cfa3ebc765910(input) {
    if (input instanceof (0, $d05641f88a6e359d$export$77cea355fa80b5f4)) return input;
    if (input != null) {
        if ((0, $dbdfff9df420b143$export$48c0cddbc99c45c2)(input)) return $364eb1b6adbbe903$export$aa3d41784b3267fa(input);
        if ((0, $0cda1c6dd59a4828$export$1e2f57719e155213)(input)) return $364eb1b6adbbe903$export$4cb2acdbcda2c253(input);
        if ((0, $8b2dd2161406ec3c$export$4369c812aac99591)(input)) return $364eb1b6adbbe903$export$60f45028237c39d1(input);
        if ((0, $be176c234c83d50d$export$edb10ab8dd75a915)(input)) return $364eb1b6adbbe903$export$e073fccf36d78cc1(input);
        if ((0, $a63f0168c5760b16$export$9652023d9040757)(input)) return $364eb1b6adbbe903$export$dcccc29c315dd646(input);
        if ((0, $c412bff867cdade8$export$c088ffafdba7405f)(input)) return $364eb1b6adbbe903$export$b2dcb11d46e7a4ad(input);
    }
    throw (0, $8301fd13cdffc629$export$7cbe71b9fa263484)(input);
}
function $364eb1b6adbbe903$export$aa3d41784b3267fa(obj) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        var obs = obj[0, $4851da5db82697ea$export$5ab46cbf6120b33a]();
        if ((0, $aba51950c962bcc0$export$f6e2535fb5126e54)(obs.subscribe)) return obs.subscribe(subscriber);
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
}
function $364eb1b6adbbe903$export$4cb2acdbcda2c253(array) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
function $364eb1b6adbbe903$export$60f45028237c39d1(promise) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, (0, $df2d12efb0044931$export$ebf645db02d3e99f));
    });
}
function $364eb1b6adbbe903$export$dcccc29c315dd646(iterable) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = (0, $24c52f343453d62d$export$19a8beecd37a4c45)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
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
function $364eb1b6adbbe903$export$e073fccf36d78cc1(asyncIterable) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        $364eb1b6adbbe903$var$process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function $364eb1b6adbbe903$export$b2dcb11d46e7a4ad(readableStream) {
    return $364eb1b6adbbe903$export$e073fccf36d78cc1((0, $c412bff867cdade8$export$cf4785e597badab3)(readableStream));
}
function $364eb1b6adbbe903$var$process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0, $24c52f343453d62d$export$1050f835b63b671e)(this, void 0, void 0, function() {
        var value, e_2_1;
        return (0, $24c52f343453d62d$export$67ebef60e6f28a6)(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = (0, $24c52f343453d62d$export$e3b29a3d6162315f)(asyncIterable);
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


function $8f66b637e97d9fa3$export$a2b7447487315232(parentSubscription, scheduler, work, delay, repeat) {
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



function $a2fef0bb4bf5bb57$export$ebec8610810318c5(source) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(source === null || source === void 0 ? void 0 : source.lift);
}
function $a2fef0bb4bf5bb57$export$871731df685d7753(init) {
    return function(source) {
        if ($a2fef0bb4bf5bb57$export$ebec8610810318c5(source)) return source.lift(function(liftedSource) {
            try {
                return init(liftedSource, this);
            } catch (err) {
                this.error(err);
            }
        });
        throw new TypeError("Unable to lift unknown Observable type");
    };
}




function $e73adbf98bc148c1$export$b9e075132cc6937f(destination, onNext, onComplete, onError, onFinalize) {
    return new $e73adbf98bc148c1$export$8fbbf0c4d80268e5(destination, onNext, onComplete, onError, onFinalize);
}
var $e73adbf98bc148c1$export$8fbbf0c4d80268e5 = function(_super) {
    (0, $24c52f343453d62d$export$a8ba968b8961cb8a)(OperatorSubscriber, _super);
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
}((0, $39787920176197bf$export$60959659b2c22881));


function $5cd0f946eea4af2c$export$9007f49c319d1ac7(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return (0, $a2fef0bb4bf5bb57$export$871731df685d7753)(function(source, subscriber) {
        source.subscribe((0, $e73adbf98bc148c1$export$b9e075132cc6937f)(subscriber, function(value) {
            return (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
                return subscriber.next(value);
            }, delay);
        }, function() {
            return (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
                return subscriber.complete();
            }, delay);
        }, function(err) {
            return (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
                return subscriber.error(err);
            }, delay);
        }));
    });
}



function $1f95087e347ad29a$export$1eb44d8f5f64733b(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return (0, $a2fef0bb4bf5bb57$export$871731df685d7753)(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}


function $28abc0a403c5e5cd$export$ed8bd553a12b6a30(input, scheduler) {
    return (0, $364eb1b6adbbe903$export$6a9cfa3ebc765910)(input).pipe((0, $1f95087e347ad29a$export$1eb44d8f5f64733b)(scheduler), (0, $5cd0f946eea4af2c$export$9007f49c319d1ac7)(scheduler));
}





function $0f45cb69a74730da$export$fc9afd948577f0a8(input, scheduler) {
    return (0, $364eb1b6adbbe903$export$6a9cfa3ebc765910)(input).pipe((0, $1f95087e347ad29a$export$1eb44d8f5f64733b)(scheduler), (0, $5cd0f946eea4af2c$export$9007f49c319d1ac7)(scheduler));
}



function $af03851f3a7ff47d$export$b34673931371729a(input, scheduler) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
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






function $afeb4ddeae3295cd$export$2b75c58ab9b5b766(input, scheduler) {
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        var iterator;
        (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
            iterator = input[0, $6ca18b093ce664af$export$6f58e2338da23f4d]();
            (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
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
            return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}




function $65651e534aba3db2$export$7c7f0979b56a32f3(input, scheduler) {
    if (!input) throw new Error("Iterable cannot be null");
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
        (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
            var iterator = input[Symbol.asyncIterator]();
            (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, scheduler, function() {
                iterator.next().then(function(result) {
                    if (result.done) subscriber.complete();
                    else subscriber.next(result.value);
                });
            }, 0, true);
        });
    });
}











function $ce8cd29e174cc0b5$export$3385251aeecad28a(input, scheduler) {
    return (0, $65651e534aba3db2$export$7c7f0979b56a32f3)((0, $c412bff867cdade8$export$cf4785e597badab3)(input), scheduler);
}


function $2d9ddc4fd88001d0$export$49c44dfc2bb21d70(input, scheduler) {
    if (input != null) {
        if ((0, $dbdfff9df420b143$export$48c0cddbc99c45c2)(input)) return (0, $28abc0a403c5e5cd$export$ed8bd553a12b6a30)(input, scheduler);
        if ((0, $0cda1c6dd59a4828$export$1e2f57719e155213)(input)) return (0, $af03851f3a7ff47d$export$b34673931371729a)(input, scheduler);
        if ((0, $8b2dd2161406ec3c$export$4369c812aac99591)(input)) return (0, $0f45cb69a74730da$export$fc9afd948577f0a8)(input, scheduler);
        if ((0, $be176c234c83d50d$export$edb10ab8dd75a915)(input)) return (0, $65651e534aba3db2$export$7c7f0979b56a32f3)(input, scheduler);
        if ((0, $a63f0168c5760b16$export$9652023d9040757)(input)) return (0, $afeb4ddeae3295cd$export$2b75c58ab9b5b766)(input, scheduler);
        if ((0, $c412bff867cdade8$export$c088ffafdba7405f)(input)) return (0, $ce8cd29e174cc0b5$export$3385251aeecad28a)(input, scheduler);
    }
    throw (0, $8301fd13cdffc629$export$7cbe71b9fa263484)(input);
}



function $cac710b5d02c8072$export$6788812c4e6611e6(input, scheduler) {
    return scheduler ? (0, $2d9ddc4fd88001d0$export$49c44dfc2bb21d70)(input, scheduler) : (0, $364eb1b6adbbe903$export$6a9cfa3ebc765910)(input);
}


class $b9f53355e41ddece$var$AddRecipeModel {
    parentElementObserver = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)(undefined);
    recipeObservable = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)({});
    constructor(){}
    setParentElement(parentElement) {
        this.parentElementObserver.next(parentElement);
    }
    uploadRecipe(parentElement, newRecipe) {
        // 1) render spinner
        (0, $b69f470961da6d21$export$2e2bcd8739ae039).renderSpinner(parentElement);
        // 2) upload recipe to server
        this.postRecipe(newRecipe);
        // 3) success message
        const message = "Recipe was successfully uploaded :)";
        (0, $b69f470961da6d21$export$2e2bcd8739ae039).renderMessage(parentElement, message);
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
                (0, $f844749fb48c2ba1$export$2e2bcd8739ae039).getBookmarksObservable().next(bookmarks);
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
                    unit: unit,
                    description: description
                };
            });
            const recipe = {
                title: newRecipe.title,
                source_url: newRecipe.sourceUrl,
                image_url: newRecipe.image,
                publisher: newRecipe.publisher,
                cooking_time: +newRecipe.cookingTime,
                servings: +newRecipe.servings,
                ingredients: ingredients
            };
            // POST request
            // return from(AJAX(`${API_URL}?key=${process.env.FORKIFY_API_KEY}`, recipe));
            (0, $cac710b5d02c8072$export$6788812c4e6611e6)((0, $4aa5c58d1e89c784$export$2b3ff41fecbef7c8)(`${(0, $7c20b6b1206bfad9$export$923ea8233b386e99)}?key=${"b1f8f5d1-f59d-4444-b99c-a12bb1d2ff02"}`, recipe)).subscribe((data)=>{
                console.log(data);
                // update recipe state
                this.recipeObservable.next((0, $4aa5c58d1e89c784$export$2753bdb0d7b42232)(data));
            });
        } catch (error) {
            throw error;
        }
    }
}
var $b9f53355e41ddece$export$2e2bcd8739ae039 = new $b9f53355e41ddece$var$AddRecipeModel();








function $84763dee3eae43dc$export$871de8747c9eaa88(project, thisArg) {
    return (0, $a2fef0bb4bf5bb57$export$871731df685d7753)(function(source, subscriber) {
        var index = 0;
        source.subscribe((0, $e73adbf98bc148c1$export$b9e075132cc6937f)(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}







function $a0ba59950ab04705$export$600918ebaa9e0a1b(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
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
        (0, $364eb1b6adbbe903$export$6a9cfa3ebc765910)(project(value, index++)).subscribe((0, $e73adbf98bc148c1$export$b9e075132cc6937f)(subscriber, function(innerValue) {
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
                    if (innerSubScheduler) (0, $8f66b637e97d9fa3$export$a2b7447487315232)(subscriber, innerSubScheduler, function() {
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
    source.subscribe((0, $e73adbf98bc148c1$export$b9e075132cc6937f)(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 || additionalFinalizer();
    };
}



function $72030fe19283476c$export$6b9f6c0d32c093f9(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if ((0, $aba51950c962bcc0$export$f6e2535fb5126e54)(resultSelector)) return $72030fe19283476c$export$6b9f6c0d32c093f9(function(a, i) {
        return (0, $84763dee3eae43dc$export$871de8747c9eaa88)(function(b, ii) {
            return resultSelector(a, b, i, ii);
        })((0, $364eb1b6adbbe903$export$6a9cfa3ebc765910)(project(a, i)));
    }, concurrent);
    else if (typeof resultSelector === "number") concurrent = resultSelector;
    return (0, $a2fef0bb4bf5bb57$export$871731df685d7753)(function(source, subscriber) {
        return (0, $a0ba59950ab04705$export$600918ebaa9e0a1b)(source, subscriber, project, concurrent);
    });
}






var $4f91c8a053ac2d08$var$isArray = Array.isArray;
function $4f91c8a053ac2d08$var$callOrApply(fn, args) {
    return $4f91c8a053ac2d08$var$isArray(args) ? fn.apply(void 0, (0, $24c52f343453d62d$export$1216008129fb82ed)([], (0, $24c52f343453d62d$export$8d051b38c9118094)(args))) : fn(args);
}
function $4f91c8a053ac2d08$export$559affaa48f4288d(fn) {
    return (0, $84763dee3eae43dc$export$871de8747c9eaa88)(function(args) {
        return $4f91c8a053ac2d08$var$callOrApply(fn, args);
    });
}


var $1df03abfc654dde2$var$nodeEventEmitterMethods = [
    "addListener",
    "removeListener"
];
var $1df03abfc654dde2$var$eventTargetMethods = [
    "addEventListener",
    "removeEventListener"
];
var $1df03abfc654dde2$var$jqueryMethods = [
    "on",
    "off"
];
function $1df03abfc654dde2$export$a36e16046ae8f1bb(target, eventName, options, resultSelector) {
    if ((0, $aba51950c962bcc0$export$f6e2535fb5126e54)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return $1df03abfc654dde2$export$a36e16046ae8f1bb(target, eventName, options).pipe((0, $4f91c8a053ac2d08$export$559affaa48f4288d)(resultSelector));
    var _a = (0, $24c52f343453d62d$export$8d051b38c9118094)($1df03abfc654dde2$var$isEventTarget(target) ? $1df03abfc654dde2$var$eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : $1df03abfc654dde2$var$isNodeStyleEventEmitter(target) ? $1df03abfc654dde2$var$nodeEventEmitterMethods.map($1df03abfc654dde2$var$toCommonHandlerRegistry(target, eventName)) : $1df03abfc654dde2$var$isJQueryStyleEventEmitter(target) ? $1df03abfc654dde2$var$jqueryMethods.map($1df03abfc654dde2$var$toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if ((0, $0cda1c6dd59a4828$export$1e2f57719e155213)(target)) return (0, $72030fe19283476c$export$6b9f6c0d32c093f9)(function(subTarget) {
            return $1df03abfc654dde2$export$a36e16046ae8f1bb(subTarget, eventName, options);
        })((0, $364eb1b6adbbe903$export$6a9cfa3ebc765910)(target));
    }
    if (!add) throw new TypeError("Invalid event target");
    return new (0, $d05641f88a6e359d$export$77cea355fa80b5f4)(function(subscriber) {
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
function $1df03abfc654dde2$var$toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function $1df03abfc654dde2$var$isNodeStyleEventEmitter(target) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(target.addListener) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(target.removeListener);
}
function $1df03abfc654dde2$var$isJQueryStyleEventEmitter(target) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(target.on) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(target.off);
}
function $1df03abfc654dde2$var$isEventTarget(target) {
    return (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(target.addEventListener) && (0, $aba51950c962bcc0$export$f6e2535fb5126e54)(target.removeEventListener);
}



class $5b031787f1729979$export$a889349a22c2b11d extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    _parentElement;
    _message;
    _window;
    _overlay;
    _btnOpen;
    _btnClose;
    model = (0, $b9f53355e41ddece$export$2e2bcd8739ae039);
    constructor(){
        super();
    }
    resetInnerHTML() {
        this._parentElement.innerHTML = this._innerHTML;
    }
    afterViewInit() {
        (0, $4aa5c58d1e89c784$export$50538080491de5d2)(".overlay").then(()=>{
            // waiting for the element from the nav-bar component
            (0, $4aa5c58d1e89c784$export$50538080491de5d2)(".nav__btn--add-recipe").then(()=>{
                const parentElement = document.querySelector(".upload");
                this._parentElement = parentElement;
                if (!this._innerHTML) this._innerHTML = parentElement.innerHTML;
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
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(this._btnOpen, "click").subscribe(()=>{
            this._innerHTML && this.resetInnerHTML();
            this._overlay.classList.remove("hidden");
            this._window.classList.remove("hidden");
        });
    }
    addHandlerCloseWindow() {
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(this._btnClose, "click").subscribe(()=>{
            this._overlay.classList.add("hidden");
            this._window.classList.add("hidden");
        });
    }
    addHandlerUploadRecipe(parentElement, model) {
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(parentElement, "submit").subscribe((e)=>{
            // 1) stop form from submitting
            e.preventDefault();
            const originalHTML = parentElement.innerHTML;
            // this._innerHTML = originalHTML;
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
            // reset form and re-activate event listeners
            setTimeout(()=>{
                this._overlay.classList.add("hidden");
                this._window.classList.add("hidden");
                this.afterViewInit();
            }, 1500);
        });
    }
}




class $39aa6174b7bfddd0$export$7b024d8cdfcd6192 extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    constructor(){
        super();
    }
    afterViewInit() {}
}




class $08870f650a2ab348$var$PreviewService {
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
                <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
var $08870f650a2ab348$export$2e2bcd8739ae039 = new $08870f650a2ab348$var$PreviewService();



class $f90b9bc28346325a$var$BookMarkModel {
    _parentElement;
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    constructor(){
        this.setViewService((0, $b69f470961da6d21$export$2e2bcd8739ae039));
        this.setPreviewService((0, $08870f650a2ab348$export$2e2bcd8739ae039));
        this.setBookmarkService((0, $f844749fb48c2ba1$export$2e2bcd8739ae039));
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
        return bookmarks.map((bookmark)=>(0, $08870f650a2ab348$export$2e2bcd8739ae039).generateMarkup(bookmark)).join("");
    }
    renderBookmarks() {
        this.bookmarkService.getBookmarksObservable().subscribe((bookmarks)=>{
            bookmarks && bookmarks.length > 0 ? this.viewService.render(true, this._parentElement, this.generateMarkup(bookmarks)) : this.viewService.renderMessage(this._parentElement, this._errorMessage);
        });
    }
}
var $f90b9bc28346325a$export$2e2bcd8739ae039 = new $f90b9bc28346325a$var$BookMarkModel();



var $3629dd84db482f84$exports = {};
$3629dd84db482f84$exports = new URL("bookmark-view.228a28fe.html", import.meta.url).toString();


class $f8fc312720b33e37$export$c89bce5a82b63ccf extends HTMLElement {
    model = (0, $f90b9bc28346325a$export$2e2bcd8739ae039);
    constructor(){
        super();
    }
    connectedCallback() {
        (0, $4aa5c58d1e89c784$export$93e3f66e23f39efc)((0, (/*@__PURE__*/$parcel$interopDefault($3629dd84db482f84$exports)))).then((html)=>{
            this.innerHTML = html;
            this.model.setParentElement(this.querySelector(".bookmarks__list"));
            // the parent element is valid after setting the innerHTML
            this.model.renderBookmarks();
        });
    }
}




customElements.define("app-bookmark-view", (0, $f8fc312720b33e37$export$c89bce5a82b63ccf));
class $45c107a1c3aeb610$export$ef8da11641c635de extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    constructor(){
        super();
    }
    afterViewInit() {}
}








class $72d84744963ab5ed$var$QueryService {
    queryObservable = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)("");
    getQuery(selector) {
        const parentElement = document.querySelector(`.${selector}`);
        const recipe = parentElement.querySelector(`.${selector}__field`).value;
        parentElement.querySelector(`.${selector}__field`).value = "";
        return recipe;
    }
    searchResultsSubscription(query) {
        try {
            return (0, $cac710b5d02c8072$export$6788812c4e6611e6)((0, $4aa5c58d1e89c784$export$2b3ff41fecbef7c8)(`${(0, $7c20b6b1206bfad9$export$923ea8233b386e99)}?search=${query}&key=${"b1f8f5d1-f59d-4444-b99c-a12bb1d2ff02"}`));
        } catch (error) {
            throw error;
        }
    }
    recipeSubscrption(id) {
        try {
            return (0, $cac710b5d02c8072$export$6788812c4e6611e6)((0, $4aa5c58d1e89c784$export$2b3ff41fecbef7c8)(`${(0, $7c20b6b1206bfad9$export$923ea8233b386e99)}/${id}?key=${"b1f8f5d1-f59d-4444-b99c-a12bb1d2ff02"}`));
        } catch (error) {
            throw error;
        }
    }
}
var $72d84744963ab5ed$export$2e2bcd8739ae039 = new $72d84744963ab5ed$var$QueryService();




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
 */ var $1dc2e314f7ef79f9$export$b336c2702c498be5;
Fraction = function(numerator, denominator) {
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
$1dc2e314f7ef79f9$export$b336c2702c498be5 = Fraction;


class $8abc55b71c2a631a$var$RecipeService {
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
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${recipe.servings - 1}">
            <svg>
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-minus-circle" ></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${recipe.servings + 1}">
            <svg>
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${recipe.key ? "" : "hidden"}">
        <svg>
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-bookmark${recipe.bookmarked ? "-fill" : ""}"></use>
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
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
    }
    generateIngredientsMarkup(ing) {
        return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new (0, $1dc2e314f7ef79f9$export$b336c2702c498be5)(ing.quantity) : ""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit ?? ""}</span>
          ${ing.description}
        </div>
      </li>
    `;
    }
}
var $8abc55b71c2a631a$export$2e2bcd8739ae039 = new $8abc55b71c2a631a$var$RecipeService();


class $8d077c73d8ae0c6b$var$RecipeModel {
    _parentElement;
    recipeObservable = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)(null);
    bookmarks = [];
    constructor(){}
    setParentElement(element) {
        this._parentElement = element;
    }
    subscribeLoadAndHashChange() {
        (0, $cac710b5d02c8072$export$6788812c4e6611e6)([
            "load",
            "hashchange"
        ]).pipe((0, $72030fe19283476c$export$6b9f6c0d32c093f9)((event)=>(0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(window, event))).subscribe(()=>{
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
        (0, $f844749fb48c2ba1$export$2e2bcd8739ae039).setBookmarkObservable(this.bookmarks);
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
        (0, $f844749fb48c2ba1$export$2e2bcd8739ae039).setBookmarkObservable(this.bookmarks);
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
        this._parentElement ?? (0, $b69f470961da6d21$export$2e2bcd8739ae039).renderSpinner(this._parentElement.querySelector(".message"));
        try {
            (0, $72d84744963ab5ed$export$2e2bcd8739ae039).recipeSubscrption(id).subscribe((data)=>{
                if (data) {
                    // 1) create recipe object
                    const recipe = (0, $4aa5c58d1e89c784$export$2753bdb0d7b42232)(data);
                    // 2) update recipe observable; if bookmarked, push to bookmarks
                    (0, $f844749fb48c2ba1$export$2e2bcd8739ae039).bookmarks.some((bookmark)=>bookmark.id === id) ? recipe.bookmarked = this.bookmarks.push(recipe) : recipe.bookmarked = false;
                    // 3) update recipe observable
                    this.recipeObservable.next(recipe);
                }
            });
        } catch (error) {
            throw error;
        }
    }
    updateView() {
        this._parentElement ?? (0, $b69f470961da6d21$export$2e2bcd8739ae039).renderSpinner(this._parentElement.querySelector(".message"));
        try {
            this.recipeObservable.subscribe((recipe)=>{
                if (recipe) {
                    const markup = (0, $8abc55b71c2a631a$export$2e2bcd8739ae039).generateRecipeMarkup(recipe);
                    this._parentElement ?? this.clear();
                    (0, $b69f470961da6d21$export$2e2bcd8739ae039).render(true, this._parentElement, markup);
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
var $8d077c73d8ae0c6b$export$2e2bcd8739ae039 = new $8d077c73d8ae0c6b$var$RecipeModel();






class $d2be71865b6e5e72$export$41b9f6ec320e4352 extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    _errorMessage = "We could not find that recipe. Please try another one!";
    _message = "Start by searching for a recipe or an ingredient. Have fun!";
    model = (0, $8d077c73d8ae0c6b$export$2e2bcd8739ae039);
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = window.location.hash ? `
      <div class="message">
        <div class="spinner">
          <svg>
            <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-loader"></use>
          </svg>
        </div>
      </div>
    ` : `
      <div class="message">
        <div>
          <svg>
            <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-smile"></use>
          </svg>
        </div>
        <p>Start by searching for a recipe or an ingredient. Have fun!</p>
      </div>
    `;
        this.afterViewInit();
    }
    afterViewInit() {
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
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(element, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler.updateServings(updateTo);
        });
    }
    addHandlerAddBookmark(element, handler) {
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(element, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler.switchCurrentBookmark();
        });
    }
}








class $3e8cd902d1ff2c98$var$PaginationService {
    pageObservable = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)((0, $7c20b6b1206bfad9$export$faa2b466ca10a03));
    constructor(){}
    addHandlerClick(element, handler) {
        // should pass document.querySelector('.pagination') as element
        console.log("element", element);
        console.log("handler", handler);
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(element, "click").subscribe((e)=>{
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    clear(parentElement) {
        parentElement.innerHTML = "";
    }
    generateMarkup(results, page = (0, $7c20b6b1206bfad9$export$faa2b466ca10a03)) {
        if (!results) return "";
        const curPage = page;
        const numPages = Math.ceil(results.length / (0, $7c20b6b1206bfad9$export$5feaddb1377b7f5e));
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
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }
    generatePrevMarkup(curPage) {
        return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
    }
}
var $3e8cd902d1ff2c98$export$2e2bcd8739ae039 = new $3e8cd902d1ff2c98$var$PaginationService();




class $3bfbfb51366d2edd$var$ResultModel {
    searchResultsObservable = new (0, $ae5288954551eccd$export$cc3d42e6b2b9cf8b)([]);
    searchResults = [];
    _parentElement;
    constructor(){}
    setParentElement(parentElement) {
        this._parentElement = parentElement;
    }
    render(page = (0, $7c20b6b1206bfad9$export$faa2b466ca10a03), paginationElement) {
        try {
            (0, $72d84744963ab5ed$export$2e2bcd8739ae039).queryObservable.subscribe((query)=>{
                if (query) {
                    // console.log('query in result-model', query);
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
        (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(paginationElement, "click").subscribe((e)=>{
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
            (0, $b69f470961da6d21$export$2e2bcd8739ae039).renderSpinner(this._parentElement);
            // 2) load the search results
            (0, $72d84744963ab5ed$export$2e2bcd8739ae039).searchResultsSubscription(query).subscribe((data)=>{
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
                (0, $b69f470961da6d21$export$2e2bcd8739ae039).render(true, this._parentElement, markup);
                // // 2) pagination buttons
                (0, $3e8cd902d1ff2c98$export$2e2bcd8739ae039).clear(paginationElement);
                const paginationMarkup = (0, $3e8cd902d1ff2c98$export$2e2bcd8739ae039).generateMarkup(data, page);
                (0, $b69f470961da6d21$export$2e2bcd8739ae039).render(true, paginationElement, paginationMarkup);
            // console.log('data ', data);
            }
        });
    }
    getSearchResultsPaginationPage(results, page = (0, $7c20b6b1206bfad9$export$faa2b466ca10a03)) {
        const start = (page - 1) * (0, $7c20b6b1206bfad9$export$5feaddb1377b7f5e);
        const end = page * (0, $7c20b6b1206bfad9$export$5feaddb1377b7f5e);
        return results.slice(start, end);
    }
    generatePreviewMarkup(results) {
        return results.map((result)=>(0, $b69f470961da6d21$export$2e2bcd8739ae039).render(false, "", (0, $08870f650a2ab348$export$2e2bcd8739ae039).generateMarkup(result))).join("");
    }
}
var $3bfbfb51366d2edd$export$2e2bcd8739ae039 = new $3bfbfb51366d2edd$var$ResultModel();




class $0e82c1652fa557c8$var$PaginationModel {
    constructor(){}
    generateMarkup(results, page = (0, $7c20b6b1206bfad9$export$faa2b466ca10a03)) {
        if (!results) return "";
        const curPage = page;
        const numPages = Math.ceil(results.length / (0, $7c20b6b1206bfad9$export$5feaddb1377b7f5e));
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
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }
    generatePrevMarkup(curPage) {
        return `
      <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${0, (/*@__PURE__*/$parcel$interopDefault($8e05a87072528d3c$exports))}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>
    `;
    }
}
var $0e82c1652fa557c8$export$2e2bcd8739ae039 = new $0e82c1652fa557c8$var$PaginationModel();


class $82e7f761b77ab459$export$417802b99ddd7c99 extends HTMLElement {
    _parentElement;
    model;
    constructor(){
        super();
    }
    connectedCallback() {
        // nested custom element cannot use fetch
        // since it's the asynchronous operation
        // ouside custom element won't wait for it
        this.innerHTML = `
    <div class="pagination"></div>
    `;
        this._parentElement = document.querySelector(".pagination");
        this.setModel((0, $0e82c1652fa557c8$export$2e2bcd8739ae039));
    }
    setModel(model) {
        this.model = model;
    }
}




customElements.define("app-pagination-view", (0, $82e7f761b77ab459$export$417802b99ddd7c99));
class $d5f2add56e235dfa$export$7e5333f99680078 extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    selector = "results";
    model;
    constructor(){
        super();
        this.setModel((0, $3bfbfb51366d2edd$export$2e2bcd8739ae039));
    }
    setModel(model) {
        this.model = model;
    }
    afterViewInit() {
        const parentElement = this.querySelector(`.${this.selector}`);
        const paginationElement = this.querySelector(".pagination");
        this.model.setParentElement(parentElement);
        this.model.render(1, paginationElement);
    }
}






class $c561160641742cb1$export$79d13b60110f33be extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    _selector = "search";
    constructor(){
        super();
    }
    afterViewInit() {
        this.addHandlerSearch((0, $72d84744963ab5ed$export$2e2bcd8739ae039), this._selector);
    }
    addHandlerSearch(service, selector) {
        (0, $4aa5c58d1e89c784$export$50538080491de5d2)(`.${selector}`).then(()=>{
            (0, $1df03abfc654dde2$export$a36e16046ae8f1bb)(this, "submit").subscribe((e)=>{
                e.preventDefault();
                const query = service.getQuery(selector);
                service.queryObservable.next(query);
            });
        });
    }
}


var $f74af23e81b5ead1$exports = {};
$f74af23e81b5ead1$exports = new URL("add-recipe-view.0064894d.html", import.meta.url).toString();


var $cf1f0d8b2890f515$exports = {};
$cf1f0d8b2890f515$exports = new URL("copyright.da2df34f.html", import.meta.url).toString();


var $0c77b367297995ef$exports = {};
$0c77b367297995ef$exports = new URL("nav-bar.1b451b41.html", import.meta.url).toString();


var $250c78877d77b187$exports = {};
$250c78877d77b187$exports = new URL("result-view.a9b900f6.html", import.meta.url).toString();


var $43d5cb05e01bb045$exports = {};
$43d5cb05e01bb045$exports = new URL("search-bar.13f314cb.html", import.meta.url).toString();


const $2bbbc5e37c3a3ece$export$268f3d7f53f9a17 = [
    {
        class: (0, $5b031787f1729979$export$a889349a22c2b11d),
        selector: "app-add-recipe-view",
        html: (0, (/*@__PURE__*/$parcel$interopDefault($f74af23e81b5ead1$exports)))
    },
    {
        class: (0, $c561160641742cb1$export$79d13b60110f33be),
        selector: "app-search-bar",
        html: (0, (/*@__PURE__*/$parcel$interopDefault($43d5cb05e01bb045$exports)))
    },
    {
        class: (0, $45c107a1c3aeb610$export$ef8da11641c635de),
        selector: "app-nav-bar",
        html: (0, (/*@__PURE__*/$parcel$interopDefault($0c77b367297995ef$exports)))
    },
    {
        class: (0, $d5f2add56e235dfa$export$7e5333f99680078),
        selector: "app-result-view",
        html: (0, (/*@__PURE__*/$parcel$interopDefault($250c78877d77b187$exports)))
    },
    {
        class: (0, $39aa6174b7bfddd0$export$7b024d8cdfcd6192),
        selector: "app-copyright",
        html: (0, (/*@__PURE__*/$parcel$interopDefault($cf1f0d8b2890f515$exports)))
    },
    {
        class: (0, $d2be71865b6e5e72$export$41b9f6ec320e4352),
        selector: "app-recipe-view",
        html: ""
    }
];


var $ac71402d39927349$exports = {};
$ac71402d39927349$exports = new URL("app.fb2142a4.html", import.meta.url).toString();


var $7d012cd6c5dc34ef$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $7d012cd6c5dc34ef$var$runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}($7d012cd6c5dc34ef$exports);
try {
    regeneratorRuntime = $7d012cd6c5dc34ef$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $7d012cd6c5dc34ef$var$runtime;
    else Function("r", "regeneratorRuntime = r")($7d012cd6c5dc34ef$var$runtime);
}


if (null) null.accept(function() {
    location.reload();
});
class $0a80b9c5cac1db17$var$App extends (0, $4aa5c58d1e89c784$export$5fe5bb8e8123e760)(HTMLElement, [
    (0, $2d6afd91477dfeab$export$6931971ec8087668)
]) {
    constructor(){
        super();
        this.declare();
    }
    connectedCallback() {
        (0, $4aa5c58d1e89c784$export$93e3f66e23f39efc)((0, (/*@__PURE__*/$parcel$interopDefault($ac71402d39927349$exports)))).then((html)=>{
            this.innerHTML = html;
            this.afterViewInit();
        });
    }
    declare() {
        (0, $2bbbc5e37c3a3ece$export$268f3d7f53f9a17).forEach((declaration)=>{
            customElements.define(declaration.selector, declaration.class);
        });
    }
    afterViewInit() {
        (0, $2bbbc5e37c3a3ece$export$268f3d7f53f9a17).forEach((declaration)=>{
            // console.log('build ' + declaration.selector);
            const component = document.querySelector(declaration.selector);
            if (declaration.html) (0, $4aa5c58d1e89c784$export$93e3f66e23f39efc)(declaration.html).then((html)=>{
                component.innerHTML = html;
                component.afterViewInit();
            });
        });
    }
}
customElements.define("app-root", $0a80b9c5cac1db17$var$App);


//# sourceMappingURL=index.e9493ae5.js.map
