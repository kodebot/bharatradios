System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "app.bundle.js": [
      "app/boot.js",
      "app/shell/shell.component.js",
      "github:twbs/bootstrap@3.3.6",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-css@0.1.20",
      "npm:animate.css@3.4.0//animate.css!github:systemjs/plugin-css@0.1.20",
      "npm:font-awesome@4.5.0/css/font-awesome.css!github:systemjs/plugin-css@0.1.20",
      "npm:simple-line-icons@2.2.3/css/simple-line-icons.css!github:systemjs/plugin-css@0.1.20",
      "assets/css/font.css!github:systemjs/plugin-css@0.1.20",
      "assets/css/jplayer.flat.css!github:systemjs/plugin-css@0.1.20",
      "assets/css/app.css!github:systemjs/plugin-css@0.1.20",
      "assets/css/styles.css!github:systemjs/plugin-css@0.1.20",
      "app/player/player.component.js",
      "app/radio/radio-list.component.js",
      "npm:react-dom@0.14.6",
      "npm:react@0.14.6",
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "app/player/audioPlayerService.js",
      "app/radio/radio.component.js",
      "npm:react-dom@0.14.6/index",
      "npm:react@0.14.6/react",
      "npm:jplayer@2.9.2",
      "github:components/jquery@2.2.0",
      "npm:jquery@2.2.0",
      "npm:react@0.14.6/lib/ReactDOM",
      "npm:react@0.14.6/lib/React",
      "npm:jplayer@2.9.2/dist/jplayer/jquery.jplayer",
      "github:components/jquery@2.2.0/jquery",
      "npm:jquery@2.2.0/dist/jquery",
      "npm:react@0.14.6/lib/ReactCurrentOwner",
      "npm:react@0.14.6/lib/ReactVersion",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment",
      "npm:react@0.14.6/lib/ReactReconciler",
      "npm:react@0.14.6/lib/renderSubtreeIntoContainer",
      "npm:react@0.14.6/lib/ReactDOMTextComponent",
      "npm:react@0.14.6/lib/ReactPerf",
      "npm:fbjs@0.6.1/lib/warning",
      "npm:react@0.14.6/lib/ReactDefaultInjection",
      "npm:react@0.14.6/lib/ReactInstanceHandles",
      "npm:react@0.14.6/lib/ReactMount",
      "npm:react@0.14.6/lib/ReactUpdates",
      "npm:react@0.14.6/lib/findDOMNode",
      "npm:react@0.14.6/lib/Object.assign",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:react@0.14.6/lib/ReactDOMServer",
      "npm:react@0.14.6/lib/ReactIsomorphic",
      "npm:react@0.14.6/lib/deprecated",
      "npm:react@0.14.6/lib/escapeTextContentForBrowser",
      "npm:fbjs@0.6.1/lib/emptyFunction",
      "npm:react@0.14.6/lib/ClientReactRootIndex",
      "npm:react@0.14.6/lib/ServerReactRootIndex",
      "npm:react@0.14.6/lib/ReactRootIndex",
      "npm:react@0.14.6/lib/ReactDOMFeatureFlags",
      "npm:react@0.14.6/lib/ReactEmptyComponentRegistry",
      "npm:react@0.14.6/lib/ReactInstanceMap",
      "npm:react@0.14.6/lib/shouldUpdateReactComponent",
      "npm:react@0.14.6/lib/ReactInjection",
      "npm:react@0.14.6/lib/ReactReconcileTransaction",
      "npm:react@0.14.6/lib/SVGDOMPropertyConfig",
      "npm:react@0.14.6/lib/ReactMarkupChecksum",
      "npm:fbjs@0.6.1/lib/containsNode",
      "npm:react@0.14.6/lib/ReactRef",
      "npm:react@0.14.6/lib/ReactComponentBrowserEnvironment",
      "npm:fbjs@0.6.1/lib/invariant",
      "npm:react@0.14.6/lib/ReactBrowserEventEmitter",
      "npm:react@0.14.6/lib/ReactElement",
      "npm:fbjs@0.6.1/lib/emptyObject",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:react@0.14.6/lib/DOMChildrenOperations",
      "npm:react@0.14.6/lib/DOMPropertyOperations",
      "npm:react@0.14.6/lib/setTextContent",
      "npm:react@0.14.6/lib/validateDOMNesting",
      "npm:react@0.14.6/lib/BeforeInputEventPlugin",
      "npm:react@0.14.6/lib/ChangeEventPlugin",
      "npm:react@0.14.6/lib/DefaultEventPluginOrder",
      "npm:react@0.14.6/lib/EnterLeaveEventPlugin",
      "npm:react@0.14.6/lib/ReactBrowserComponentMixin",
      "npm:react@0.14.6/lib/HTMLDOMPropertyConfig",
      "npm:react@0.14.6/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.14.6/lib/ReactDOMComponent",
      "npm:react@0.14.6/lib/ReactEventListener",
      "npm:react@0.14.6/lib/SelectEventPlugin",
      "npm:react@0.14.6/lib/SimpleEventPlugin",
      "npm:react@0.14.6/lib/ReactDefaultPerf",
      "npm:react@0.14.6/lib/DOMProperty",
      "npm:react@0.14.6/lib/ReactUpdateQueue",
      "npm:react@0.14.6/lib/instantiateReactComponent",
      "npm:react@0.14.6/lib/setInnerHTML",
      "npm:react@0.14.6/lib/CallbackQueue",
      "npm:react@0.14.6/lib/PooledClass",
      "npm:react@0.14.6/lib/Transaction",
      "npm:react@0.14.6/lib/ReactServerRendering",
      "npm:react@0.14.6/lib/ReactChildren",
      "npm:react@0.14.6/lib/ReactClass",
      "npm:react@0.14.6/lib/ReactComponent",
      "npm:react@0.14.6/lib/ReactDOMFactories",
      "npm:react@0.14.6/lib/ReactElementValidator",
      "npm:react@0.14.6/lib/ReactPropTypes",
      "npm:react@0.14.6/lib/onlyChild",
      "npm:react@0.14.6/lib/adler32",
      "npm:react@0.14.6/lib/ViewportMetrics",
      "npm:fbjs@0.6.1/lib/keyOf",
      "npm:react@0.14.6/lib/getEventTarget",
      "npm:react@0.14.6/lib/isTextInputElement",
      "npm:react@0.14.6/lib/ReactDOMButton",
      "npm:fbjs@0.6.1/lib/shallowEqual",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition",
      "npm:fbjs@0.6.1/lib/getActiveElement",
      "npm:react@0.14.6/lib/getEventCharCode",
      "npm:react@0.14.6/lib/ReactServerBatchingStrategy",
      "npm:react@0.14.6/lib/ReactEmptyComponent",
      "npm:fbjs@0.6.1/lib/isTextNode",
      "npm:react@0.14.6/lib/ReactEventEmitterMixin",
      "npm:process@0.11.2",
      "npm:react@0.14.6/lib/quoteAttributeValueForBrowser",
      "npm:react@0.14.6/lib/FallbackCompositionState",
      "npm:react@0.14.6/lib/SyntheticCompositionEvent",
      "npm:react@0.14.6/lib/SyntheticInputEvent",
      "npm:react@0.14.6/lib/SyntheticMouseEvent",
      "npm:react@0.14.6/lib/SyntheticClipboardEvent",
      "npm:react@0.14.6/lib/SyntheticFocusEvent",
      "npm:react@0.14.6/lib/SyntheticKeyboardEvent",
      "npm:react@0.14.6/lib/SyntheticDragEvent",
      "npm:react@0.14.6/lib/SyntheticTouchEvent",
      "npm:react@0.14.6/lib/SyntheticUIEvent",
      "npm:react@0.14.6/lib/SyntheticWheelEvent",
      "npm:react@0.14.6/lib/ReactDefaultPerfAnalysis",
      "npm:fbjs@0.6.1/lib/performanceNow",
      "npm:react@0.14.6/lib/canDefineProperty",
      "npm:react@0.14.6/lib/ReactMultiChild",
      "npm:fbjs@0.6.1/lib/EventListener",
      "npm:react@0.14.6/lib/ReactComponentEnvironment",
      "npm:react@0.14.6/lib/EventPluginHub",
      "npm:react@0.14.6/lib/ReactNativeComponent",
      "npm:react@0.14.6/lib/ReactInputSelection",
      "npm:react@0.14.6/lib/ReactOwner",
      "npm:react@0.14.6/lib/ReactDOMIDOperations",
      "npm:react@0.14.6/lib/EventConstants",
      "npm:react@0.14.6/lib/EventPluginRegistry",
      "npm:react@0.14.6/lib/isEventSupported",
      "npm:react@0.14.6/lib/Danger",
      "npm:react@0.14.6/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.14.6/lib/EventPropagators",
      "npm:react@0.14.6/lib/SyntheticEvent",
      "npm:react@0.14.6/lib/AutoFocusUtils",
      "npm:react@0.14.6/lib/CSSPropertyOperations",
      "npm:react@0.14.6/lib/ReactDOMInput",
      "npm:react@0.14.6/lib/ReactDOMOption",
      "npm:react@0.14.6/lib/ReactDOMSelect",
      "npm:react@0.14.6/lib/ReactDOMTextarea",
      "npm:react@0.14.6/lib/ReactCompositeComponent",
      "npm:react@0.14.6/lib/ReactServerRenderingTransaction",
      "npm:fbjs@0.6.1/lib/mapObject",
      "npm:react@0.14.6/lib/getIteratorFn",
      "npm:react@0.14.6/lib/ReactPropTypeLocationNames",
      "npm:fbjs@0.6.1/lib/keyMirror",
      "npm:react@0.14.6/lib/traverseAllChildren",
      "npm:react@0.14.6/lib/ReactPropTypeLocations",
      "npm:react@0.14.6/lib/ReactNoopUpdateQueue",
      "npm:fbjs@0.6.1/lib/isNode",
      "npm:react@0.14.6/lib/getEventModifierState",
      "npm:process@0.11.2/browser",
      "npm:react@0.14.6/lib/forEachAccumulated",
      "npm:fbjs@0.6.1/lib/focusNode",
      "npm:react@0.14.6/lib/CSSProperty",
      "npm:react@0.14.6/lib/getEventKey",
      "npm:fbjs@0.6.1/lib/performance",
      "npm:fbjs@0.6.1/lib/camelizeStyleName",
      "npm:react@0.14.6/lib/ReactErrorUtils",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup",
      "npm:fbjs@0.6.1/lib/getMarkupWrap",
      "npm:react@0.14.6/lib/getTextContentAccessor",
      "npm:react@0.14.6/lib/ReactChildReconciler",
      "npm:react@0.14.6/lib/flattenChildren",
      "npm:react@0.14.6/lib/EventPluginUtils",
      "npm:react@0.14.6/lib/accumulateInto",
      "npm:react@0.14.6/lib/ReactDOMSelection",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly",
      "npm:react@0.14.6/lib/dangerousStyleValue",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName",
      "npm:react@0.14.6/lib/LinkedValueUtils",
      "npm:fbjs@0.6.1/lib/camelize",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed",
      "npm:react@0.14.6/lib/getNodeForCharacterOffset",
      "npm:fbjs@0.6.1/lib/hyphenate",
      "npm:fbjs@0.6.1/lib/toArray"
    ]
  },

  map: {
    "animate.css": "npm:animate.css@3.4.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "bootstrap-slider": "github:seiyria/bootstrap-slider@6.0.6",
    "clean-css": "npm:clean-css@3.4.9",
    "css": "github:systemjs/plugin-css@0.1.20",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jplayer": "npm:jplayer@2.9.2",
    "jquery": "npm:jquery@2.2.0",
    "jquery-slimscroll": "npm:jquery-slimscroll@1.3.6",
    "react": "npm:react@0.14.6",
    "react-dom": "npm:react-dom@0.14.6",
    "simple-line-icons": "npm:simple-line-icons@2.2.3",
    "slimscroll": "npm:slimscroll@0.9.1",
    "text": "github:systemjs/plugin-text@0.0.4",
    "typescript": "npm:typescript@1.8.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.0"
    },
    "npm:JSONStream@1.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "jsonparse": "npm:jsonparse@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:astw@2.0.0": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:brace-expansion@1.1.2": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browser-pack@6.0.1": {
      "JSONStream": "npm:JSONStream@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combine-source-map": "npm:combine-source-map@0.7.1",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.0",
      "umd": "npm:umd@3.0.1"
    },
    "npm:browser-resolve@1.11.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.6"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify@13.0.0": {
      "JSONStream": "npm:JSONStream@1.0.7",
      "assert": "npm:assert@1.3.0",
      "browser-pack": "npm:browser-pack@6.0.1",
      "browser-resolve": "npm:browser-resolve@1.11.0",
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "buffer": "npm:buffer@4.3.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.5.1",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@1.0.0",
      "crypto-browserify": "npm:crypto-browserify@3.11.0",
      "defined": "npm:defined@1.0.0",
      "deps-sort": "npm:deps-sort@2.0.0",
      "domain-browser": "npm:domain-browser@1.1.7",
      "duplexer2": "npm:duplexer2@0.1.4",
      "events": "npm:events@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "has": "npm:has@1.0.1",
      "htmlescape": "npm:htmlescape@1.1.0",
      "https-browserify": "npm:https-browserify@0.0.1",
      "inherits": "npm:inherits@2.0.1",
      "insert-module-globals": "npm:insert-module-globals@7.0.1",
      "isarray": "npm:isarray@0.0.1",
      "labeled-stream-splicer": "npm:labeled-stream-splicer@2.0.0",
      "module-deps": "npm:module-deps@4.0.5",
      "os-browserify": "npm:os-browserify@0.1.2",
      "parents": "npm:parents@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.2",
      "punycode": "npm:punycode@1.3.2",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "read-only-stream": "npm:read-only-stream@2.0.0",
      "readable-stream": "npm:readable-stream@2.0.5",
      "resolve": "npm:resolve@1.1.6",
      "shasum": "npm:shasum@1.0.2",
      "shell-quote": "npm:shell-quote@1.4.3",
      "stream-browserify": "npm:stream-browserify@2.0.1",
      "stream-http": "npm:stream-http@2.1.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "subarg": "npm:subarg@1.0.0",
      "syntax-error": "npm:syntax-error@1.1.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "through2": "npm:through2@2.0.0",
      "timers-browserify": "npm:timers-browserify@1.4.2",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.11.0",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@4.3.0": {
      "base64-js": "npm:base64-js@1.0.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:builtin-status-codes@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:combine-source-map@0.7.1": {
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "inline-source-map": "npm:inline-source-map@0.6.1",
      "lodash.memoize": "npm:lodash.memoize@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.2"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:concat-stream@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.5",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:deps-sort@2.0.0": {
      "JSONStream": "npm:JSONStream@1.0.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shasum": "npm:shasum@1.0.2",
      "subarg": "npm:subarg@1.0.0",
      "through2": "npm:through2@2.0.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detective@4.3.1": {
      "acorn": "npm:acorn@1.2.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:diffie-hellman@5.0.1": {
      "bn.js": "npm:bn.js@4.6.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:domhelper@0.9.1": {
      "browserify": "npm:browserify@13.0.0",
      "classie": "npm:classie@1.0.0",
      "util-extend": "npm:util-extend@1.0.3"
    },
    "npm:duplexer2@0.1.4": {
      "readable-stream": "npm:readable-stream@2.0.5"
    },
    "npm:elliptic@6.1.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.0.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:https-browserify@0.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-source-map@0.6.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "source-map": "npm:source-map@0.4.2"
    },
    "npm:insert-module-globals@7.0.1": {
      "JSONStream": "npm:JSONStream@1.0.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combine-source-map": "npm:combine-source-map@0.7.1",
      "concat-stream": "npm:concat-stream@1.5.1",
      "is-buffer": "npm:is-buffer@1.1.1",
      "lexical-scope": "npm:lexical-scope@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "npm:process@0.11.2",
      "through2": "npm:through2@2.0.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-buffer@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jplayer@2.9.2": {
      "jquery": "npm:jquery@2.2.0"
    },
    "npm:jquery-slimscroll@1.3.6": {
      "jquery": "npm:jquery@2.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:json-stable-stringify@0.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:jsonparse@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:labeled-stream-splicer@2.0.0": {
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "stream-splicer": "npm:stream-splicer@2.0.0"
    },
    "npm:lexical-scope@1.2.0": {
      "astw": "npm:astw@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:module-deps@4.0.5": {
      "JSONStream": "npm:JSONStream@1.0.7",
      "browser-resolve": "npm:browser-resolve@1.11.0",
      "concat-stream": "npm:concat-stream@1.5.1",
      "defined": "npm:defined@1.0.0",
      "detective": "npm:detective@4.3.1",
      "duplexer2": "npm:duplexer2@0.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "parents": "npm:parents@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "resolve": "npm:resolve@1.1.6",
      "stream-combiner2": "npm:stream-combiner2@1.1.1",
      "subarg": "npm:subarg@1.0.0",
      "through2": "npm:through2@2.0.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parents@1.0.1": {
      "path-platform": "npm:path-platform@0.11.15",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.3.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-platform@0.11.15": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.6.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.6": {
      "react": "npm:react@0.14.6"
    },
    "npm:react@0.14.6": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:read-only-stream@2.0.0": {
      "readable-stream": "npm:readable-stream@2.0.5"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shasum@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "json-stable-stringify": "npm:json-stable-stringify@0.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:shell-quote@1.4.3": {
      "array-filter": "npm:array-filter@0.0.1",
      "array-map": "npm:array-map@0.0.0",
      "array-reduce": "npm:array-reduce@0.0.0",
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:slimscroll@0.9.1": {
      "browserify": "npm:browserify@13.0.0",
      "classie": "npm:classie@1.0.0",
      "domhelper": "npm:domhelper@0.9.1",
      "util-extend": "npm:util-extend@1.0.3"
    },
    "npm:source-map@0.4.2": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:stream-browserify@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.5"
    },
    "npm:stream-combiner2@1.1.1": {
      "duplexer2": "npm:duplexer2@0.1.4",
      "readable-stream": "npm:readable-stream@2.0.5"
    },
    "npm:stream-http@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "builtin-status-codes": "npm:builtin-status-codes@1.0.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:stream-splicer@2.0.0": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:subarg@1.0.0": {
      "minimist": "npm:minimist@1.2.0"
    },
    "npm:syntax-error@1.1.4": {
      "acorn": "npm:acorn@1.2.2"
    },
    "npm:through2@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.5",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.2"
    },
    "npm:to-arraybuffer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:umd@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-extend@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
