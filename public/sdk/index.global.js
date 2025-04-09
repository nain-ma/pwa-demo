function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _array_without_holes(arr) {
  if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _async_to_generator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _class_call_check(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _create_class(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}
function _iterable_to_array(iter) {
  if (
    (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
    iter["@@iterator"] != null
  )
    return Array.from(iter);
}
function _non_iterable_spread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function _to_consumable_array(arr) {
  return (
    _array_without_holes(arr) ||
    _iterable_to_array(arr) ||
    _unsupported_iterable_to_array(arr) ||
    _non_iterable_spread()
  );
}
function _type_of(obj) {
  "@swc/helpers - typeof";
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol
    ? "symbol"
    : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _array_like_to_array(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
  var f,
    y,
    t,
    g,
    _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (g = {
      next: verb(0),
      throw: verb(1),
      return: verb(2),
    }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false,
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true,
    };
  }
}
(function () {
  "use strict";
  // ../../node_modules/.pnpm/ua-parser-js@2.0.3/node_modules/ua-parser-js/src/main/ua-parser.mjs
  var LIBVERSION = "2.0.3";
  var UA_MAX_LENGTH = 500;
  var USER_AGENT = "user-agent";
  var EMPTY = "";
  var UNKNOWN = "?";
  var FUNC_TYPE = "function";
  var UNDEF_TYPE = "undefined";
  var OBJ_TYPE = "object";
  var STR_TYPE = "string";
  var UA_BROWSER = "browser";
  var UA_CPU = "cpu";
  var UA_DEVICE = "device";
  var UA_ENGINE = "engine";
  var UA_OS = "os";
  var UA_RESULT = "result";
  var NAME = "name";
  var TYPE = "type";
  var VENDOR = "vendor";
  var VERSION = "version";
  var ARCHITECTURE = "architecture";
  var MAJOR = "major";
  var MODEL = "model";
  var CONSOLE = "console";
  var MOBILE = "mobile";
  var TABLET = "tablet";
  var SMARTTV = "smarttv";
  var WEARABLE = "wearable";
  var XR = "xr";
  var EMBEDDED = "embedded";
  var INAPP = "inapp";
  var BRANDS = "brands";
  var FORMFACTORS = "formFactors";
  var FULLVERLIST = "fullVersionList";
  var PLATFORM = "platform";
  var PLATFORMVER = "platformVersion";
  var BITNESS = "bitness";
  var CH_HEADER = "sec-ch-ua";
  var CH_HEADER_FULL_VER_LIST = CH_HEADER + "-full-version-list";
  var CH_HEADER_ARCH = CH_HEADER + "-arch";
  var CH_HEADER_BITNESS = CH_HEADER + "-" + BITNESS;
  var CH_HEADER_FORM_FACTORS = CH_HEADER + "-form-factors";
  var CH_HEADER_MOBILE = CH_HEADER + "-" + MOBILE;
  var CH_HEADER_MODEL = CH_HEADER + "-" + MODEL;
  var CH_HEADER_PLATFORM = CH_HEADER + "-" + PLATFORM;
  var CH_HEADER_PLATFORM_VER = CH_HEADER_PLATFORM + "-version";
  var CH_ALL_VALUES = [
    BRANDS,
    FULLVERLIST,
    MOBILE,
    MODEL,
    PLATFORM,
    PLATFORMVER,
    ARCHITECTURE,
    FORMFACTORS,
    BITNESS,
  ];
  var AMAZON = "Amazon";
  var APPLE = "Apple";
  var ASUS = "ASUS";
  var BLACKBERRY = "BlackBerry";
  var GOOGLE = "Google";
  var HUAWEI = "Huawei";
  var LENOVO = "Lenovo";
  var HONOR = "Honor";
  var LG = "LG";
  var MICROSOFT = "Microsoft";
  var MOTOROLA = "Motorola";
  var NVIDIA = "Nvidia";
  var ONEPLUS = "OnePlus";
  var OPPO = "OPPO";
  var SAMSUNG = "Samsung";
  var SHARP = "Sharp";
  var SONY = "Sony";
  var XIAOMI = "Xiaomi";
  var ZEBRA = "Zebra";
  var CHROME = "Chrome";
  var CHROMIUM = "Chromium";
  var CHROMECAST = "Chromecast";
  var EDGE = "Edge";
  var FIREFOX = "Firefox";
  var OPERA = "Opera";
  var FACEBOOK = "Facebook";
  var SOGOU = "Sogou";
  var PREFIX_MOBILE = "Mobile ";
  var SUFFIX_BROWSER = " Browser";
  var WINDOWS = "Windows";
  var isWindow =
    (typeof window === "undefined" ? "undefined" : _type_of(window)) !==
    UNDEF_TYPE;
  var NAVIGATOR = isWindow && window.navigator ? window.navigator : void 0;
  var NAVIGATOR_UADATA =
    NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : void 0;
  var extend = function extend(defaultRgx, extensions) {
    var mergedRgx = {};
    var extraRgx = extensions;
    if (!isExtensions(extensions)) {
      extraRgx = {};
      for (var i in extensions) {
        for (var j in extensions[i]) {
          extraRgx[j] = extensions[i][j].concat(extraRgx[j] ? extraRgx[j] : []);
        }
      }
    }
    for (var k in defaultRgx) {
      mergedRgx[k] =
        extraRgx[k] && extraRgx[k].length % 2 === 0
          ? extraRgx[k].concat(defaultRgx[k])
          : defaultRgx[k];
    }
    return mergedRgx;
  };
  var enumerize = function enumerize(arr) {
    var enums = {};
    for (var i = 0; i < arr.length; i++) {
      enums[arr[i].toUpperCase()] = arr[i];
    }
    return enums;
  };
  var has = function has(str1, str2) {
    if (
      (typeof str1 === "undefined" ? "undefined" : _type_of(str1)) ===
        OBJ_TYPE &&
      str1.length > 0
    ) {
      for (var i in str1) {
        if (lowerize(str1[i]) == lowerize(str2)) return true;
      }
      return false;
    }
    return isString(str1)
      ? lowerize(str2).indexOf(lowerize(str1)) !== -1
      : false;
  };
  var isExtensions = function isExtensions1(obj, deep) {
    for (var prop in obj) {
      return (
        /^(browser|cpu|device|engine|os)$/.test(prop) ||
        (deep ? isExtensions(obj[prop]) : false)
      );
    }
  };
  var isString = function isString(val) {
    return (
      (typeof val === "undefined" ? "undefined" : _type_of(val)) === STR_TYPE
    );
  };
  var itemListToArray = function itemListToArray(header) {
    if (!header) return void 0;
    var arr = [];
    var tokens = strip(/\\?\"/g, header).split(",");
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i].indexOf(";") > -1) {
        var token = trim(tokens[i]).split(";v=");
        arr[i] = {
          brand: token[0],
          version: token[1],
        };
      } else {
        arr[i] = trim(tokens[i]);
      }
    }
    return arr;
  };
  var lowerize = function lowerize(str) {
    return isString(str) ? str.toLowerCase() : str;
  };
  var majorize = function majorize(version) {
    return isString(version)
      ? strip(/[^\d\.]/g, version).split(".")[0]
      : void 0;
  };
  var setProps = function setProps(arr) {
    for (var i in arr) {
      var propName = arr[i];
      if (
        (typeof propName === "undefined" ? "undefined" : _type_of(propName)) ==
          OBJ_TYPE &&
        propName.length == 2
      ) {
        this[propName[0]] = propName[1];
      } else {
        this[propName] = void 0;
      }
    }
    return this;
  };
  var strip = function strip(pattern, str) {
    return isString(str) ? str.replace(pattern, EMPTY) : str;
  };
  var stripQuotes = function stripQuotes(str) {
    return strip(/\\?\"/g, str);
  };
  var trim = function trim(str, len) {
    if (isString(str)) {
      str = strip(/^\s\s*/, str);
      return (typeof len === "undefined" ? "undefined" : _type_of(len)) ===
        UNDEF_TYPE
        ? str
        : str.substring(0, UA_MAX_LENGTH);
    }
  };
  var rgxMapper = function rgxMapper(ua, arrays) {
    if (!ua || !arrays) return;
    var i = 0,
      j,
      k,
      p,
      q,
      matches,
      match;
    while (i < arrays.length && !matches) {
      var regex = arrays[i],
        props = arrays[i + 1];
      j = k = 0;
      while (j < regex.length && !matches) {
        if (!regex[j]) {
          break;
        }
        matches = regex[j++].exec(ua);
        if (!!matches) {
          for (p = 0; p < props.length; p++) {
            match = matches[++k];
            q = props[p];
            if (
              (typeof q === "undefined" ? "undefined" : _type_of(q)) ===
                OBJ_TYPE &&
              q.length > 0
            ) {
              if (q.length === 2) {
                if (_type_of(q[1]) == FUNC_TYPE) {
                  this[q[0]] = q[1].call(this, match);
                } else {
                  this[q[0]] = q[1];
                }
              } else if (q.length === 3) {
                if (_type_of(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                  this[q[0]] = match ? q[1].call(this, match, q[2]) : void 0;
                } else {
                  this[q[0]] = match ? match.replace(q[1], q[2]) : void 0;
                }
              } else if (q.length === 4) {
                this[q[0]] = match
                  ? q[3].call(this, match.replace(q[1], q[2]))
                  : void 0;
              }
            } else {
              this[q] = match ? match : void 0;
            }
          }
        }
      }
      i += 2;
    }
  };
  var strMapper = function strMapper(str, map) {
    for (var i in map) {
      if (_type_of(map[i]) === OBJ_TYPE && map[i].length > 0) {
        for (var j = 0; j < map[i].length; j++) {
          if (has(map[i][j], str)) {
            return i === UNKNOWN ? void 0 : i;
          }
        }
      } else if (has(map[i], str)) {
        return i === UNKNOWN ? void 0 : i;
      }
    }
    return map.hasOwnProperty("*") ? map["*"] : str;
  };
  var windowsVersionMap = {
    ME: "4.90",
    "NT 3.11": "NT3.51",
    "NT 4.0": "NT4.0",
    2000: "NT 5.0",
    XP: ["NT 5.1", "NT 5.2"],
    Vista: "NT 6.0",
    7: "NT 6.1",
    8: "NT 6.2",
    8.1: "NT 6.3",
    10: ["NT 6.4", "NT 10.0"],
    RT: "ARM",
  };
  var formFactorsMap = {
    embedded: "Automotive",
    mobile: "Mobile",
    tablet: ["Tablet", "EInk"],
    smarttv: "TV",
    wearable: "Watch",
    xr: ["VR", "XR"],
    "?": ["Desktop", "Unknown"],
    "*": void 0,
  };
  var defaultRegexes = {
    browser: [
      [
        // Most common regardless engine
        /\b(?:crmo|crios)\/([\w\.]+)/i,
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
      [/edg(?:e|ios|a)?\/([\w\.]+)/i],
      [VERSION, [NAME, "Edge"]],
      [
        // Presto based
        /(opera mini)\/([-\w\.]+)/i,
        // Opera Mini
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        // Opera Mobi/Tablet
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
      ],
      [NAME, VERSION],
      [/opios[\/ ]+([\w\.]+)/i],
      [VERSION, [NAME, OPERA + " Mini"]],
      [/\bop(?:rg)?x\/([\w\.]+)/i],
      [VERSION, [NAME, OPERA + " GX"]],
      [/\bopr\/([\w\.]+)/i],
      [VERSION, [NAME, OPERA]],
      [
        // Mixed
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i,
      ],
      [VERSION, [NAME, "Baidu"]],
      [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
      [VERSION, [NAME, "Maxthon"]],
      [
        /(kindle)\/([\w\.]+)/i,
        // Kindle
        /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
        // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
        // Trident based
        /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
        // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
        /(?:ms|\()(ie) ([\w\.]+)/i,
        // Internet Explorer
        // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
        /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
        // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
        /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
        // HeyTap/Ovi/115/Surf
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i,
      ],
      [NAME, VERSION],
      [/quark(?:pc)?\/([-\w\.]+)/i],
      [VERSION, [NAME, "Quark"]],
      [/\bddg\/([\w\.]+)/i],
      [VERSION, [NAME, "DuckDuckGo"]],
      [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
      [VERSION, [NAME, "UCBrowser"]],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        // WeChat Desktop for Windows Built-in Browser
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i,
      ],
      [VERSION, [NAME, "WeChat"]],
      [/konqueror\/([\w\.]+)/i],
      [VERSION, [NAME, "Konqueror"]],
      [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
      [VERSION, [NAME, "IE"]],
      [/ya(?:search)?browser\/([\w\.]+)/i],
      [VERSION, [NAME, "Yandex"]],
      [/slbrowser\/([\w\.]+)/i],
      [VERSION, [NAME, "Smart " + LENOVO + SUFFIX_BROWSER]],
      [/(avast|avg)\/([\w\.]+)/i],
      [[NAME, /(.+)/, "$1 Secure" + SUFFIX_BROWSER], VERSION],
      [/\bfocus\/([\w\.]+)/i],
      [VERSION, [NAME, FIREFOX + " Focus"]],
      [/\bopt\/([\w\.]+)/i],
      [VERSION, [NAME, OPERA + " Touch"]],
      [/coc_coc\w+\/([\w\.]+)/i],
      [VERSION, [NAME, "Coc Coc"]],
      [/dolfin\/([\w\.]+)/i],
      [VERSION, [NAME, "Dolphin"]],
      [/coast\/([\w\.]+)/i],
      [VERSION, [NAME, OPERA + " Coast"]],
      [/miuibrowser\/([\w\.]+)/i],
      [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
      [/fxios\/([\w\.-]+)/i],
      [VERSION, [NAME, PREFIX_MOBILE + FIREFOX]],
      [/\bqihoobrowser\/?([\w\.]*)/i],
      [VERSION, [NAME, "360"]],
      [/\b(qq)\/([\w\.]+)/i],
      [[NAME, /(.+)/, "$1Browser"], VERSION],
      [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
      [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
      [
        // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
        /samsungbrowser\/([\w\.]+)/i,
      ],
      [VERSION, [NAME, SAMSUNG + " Internet"]],
      [/metasr[\/ ]?([\d\.]+)/i],
      [VERSION, [NAME, SOGOU + " Explorer"]],
      [/(sogou)mo\w+\/([\d\.]+)/i],
      [[NAME, SOGOU + " Mobile"], VERSION],
      [
        /(electron)\/([\w\.]+) safari/i,
        // Electron-based App
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        // Tesla
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
      ],
      [NAME, VERSION],
      [/(lbbrowser|rekonq)/i],
      [NAME],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        // Iron
        /ome\/([\w\.]+).+qihu (360)[es]e/i,
      ],
      [VERSION, NAME],
      [
        // WebView
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
      ],
      [[NAME, FACEBOOK], VERSION, [TYPE, INAPP]],
      [
        /(Klarna)\/([\w\.]+)/i,
        // Klarna Shopping Browser for iOS & Android
        /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
        // Kakao App
        /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
        // Naver InApp
        /(daum)apps[\/ ]([\w\.]+)/i,
        // Daum App
        /safari (line)\/([\w\.]+)/i,
        // Line App for iOS
        /\b(line)\/([\w\.]+)\/iab/i,
        // Line App for Android
        /(alipay)client\/([\w\.]+)/i,
        // Alipay
        /(twitter)(?:and| f.+e\/([\w\.]+))/i,
        // Twitter
        /(instagram|snapchat)[\/ ]([-\w\.]+)/i,
      ],
      [NAME, VERSION, [TYPE, INAPP]],
      [/\bgsa\/([\w\.]+) .*safari\//i],
      [VERSION, [NAME, "GSA"], [TYPE, INAPP]],
      [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
      [VERSION, [NAME, "TikTok"], [TYPE, INAPP]],
      [/\[(linkedin)app\]/i],
      [NAME, [TYPE, INAPP]],
      [/(chromium)[\/ ]([-\w\.]+)/i],
      [NAME, VERSION],
      [/headlesschrome(?:\/([\w\.]+)| )/i],
      [VERSION, [NAME, CHROME + " Headless"]],
      [/ wv\).+(chrome)\/([\w\.]+)/i],
      [[NAME, CHROME + " WebView"], VERSION],
      [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
      [VERSION, [NAME, "Android" + SUFFIX_BROWSER]],
      [/chrome\/([\w\.]+) mobile/i],
      [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
      [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
      [NAME, VERSION],
      [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
      [VERSION, [NAME, PREFIX_MOBILE + "Safari"]],
      [/iphone .*mobile(?:\/\w+ | ?)safari/i],
      [[NAME, PREFIX_MOBILE + "Safari"]],
      [/version\/([\w\.\,]+) .*(safari)/i],
      [VERSION, NAME],
      [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
      [NAME, [VERSION, "1"]],
      [/(webkit|khtml)\/([\w\.]+)/i],
      [NAME, VERSION],
      [
        // Gecko based
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i,
      ],
      [[NAME, PREFIX_MOBILE + FIREFOX], VERSION],
      [/(navigator|netscape\d?)\/([-\w\.]+)/i],
      [[NAME, "Netscape"], VERSION],
      [/(wolvic|librewolf)\/([\w\.]+)/i],
      [NAME, VERSION],
      [/mobile vr; rv:([\w\.]+)\).+firefox/i],
      [VERSION, [NAME, FIREFOX + " Reality"]],
      [
        /ekiohf.+(flow)\/([\w\.]+)/i,
        // Flow
        /(swiftfox)/i,
        // Swiftfox
        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
        // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
        // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
        /(firefox)\/([\w\.]+)/i,
        // Other Firefox-based
        /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
        // Mozilla
        // Other
        /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
        /\b(links) \(([\w\.]+)/i,
      ],
      [NAME, [VERSION, /_/g, "."]],
      [/(cobalt)\/([\w\.]+)/i],
      [NAME, [VERSION, /[^\d\.]+./, EMPTY]],
    ],
    cpu: [
      [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
      [[ARCHITECTURE, "amd64"]],
      [
        /(ia32(?=;))/i,
        // IA32 (quicktime)
        /\b((i[346]|x)86)(pc)?\b/i,
      ],
      [[ARCHITECTURE, "ia32"]],
      [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
      [[ARCHITECTURE, "arm64"]],
      [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
      [[ARCHITECTURE, "armhf"]],
      [
        // PocketPC mistakenly identified as PowerPC
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i,
      ],
      [[ARCHITECTURE, "arm"]],
      [/((ppc|powerpc)(64)?)( mac|;|\))/i],
      [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
      [/ sun4\w[;\)]/i],
      [[ARCHITECTURE, "sparc"]],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
      ],
      [[ARCHITECTURE, lowerize]],
    ],
    device: [
      [
        //////////////////////////
        // MOBILES & TABLETS
        /////////////////////////
        // Samsung
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr])[-\w]+)/i,
        /sec-(sgh\w+)/i,
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
      [
        // Apple
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i,
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
      [
        /\((ipad);[-\w\),; ]+apple/i,
        // iPad
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
      [/(macintosh);/i],
      [MODEL, [VENDOR, APPLE]],
      [
        // Sharp
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i,
      ],
      [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
      [
        // Honor
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
      ],
      [MODEL, [VENDOR, HONOR], [TYPE, TABLET]],
      [/honor([-\w ]+)[;\)]/i],
      [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]],
      [
        // Huawei
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
      ],
      [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
      ],
      [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
      [
        // Xiaomi
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
      ],
      [
        [MODEL, /_/g, " "],
        [VENDOR, XIAOMI],
        [TYPE, TABLET],
      ],
      [
        /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
        // Xiaomi POCO
        /\b; (\w+) build\/hm\1/i,
        // Xiaomi Hongmi 'numeric' models
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
        // Xiaomi Hongmi
        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
        // Xiaomi Redmi
        /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
        // Xiaomi Redmi 'numeric' models
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
        // Xiaomi Mi
        / ([\w ]+) miui\/v?\d/i,
      ],
      [
        [MODEL, /_/g, " "],
        [VENDOR, XIAOMI],
        [TYPE, MOBILE],
      ],
      [
        // OPPO
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
      ],
      [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]],
      [/\b(opd2(\d{3}a?))(?: bui|\))/i],
      [
        MODEL,
        [
          VENDOR,
          strMapper,
          {
            OnePlus: ["304", "403", "203"],
            "*": OPPO,
          },
        ],
        [TYPE, TABLET],
      ],
      [
        // BLU Vivo Series
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i,
      ],
      [MODEL, [VENDOR, "BLU"], [TYPE, MOBILE]],
      [
        // Vivo
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
      ],
      [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
      [
        // Realme
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i,
      ],
      [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
      [
        // Motorola
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ](\w*)/i,
        /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
      [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
      [
        // LG
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
      ],
      [MODEL, [VENDOR, LG], [TYPE, TABLET]],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
        /\blg-?([\d\w]+) bui/i,
      ],
      [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
      [
        // Lenovo
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
      ],
      [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]],
      [
        // Nokia
        /(nokia) (t[12][01])/i,
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*))/i,
      ],
      [
        [MODEL, /_/g, " "],
        [TYPE, MOBILE],
        [VENDOR, "Nokia"],
      ],
      [
        // Google
        /(pixel (c|tablet))\b/i,
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
      [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
      [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
      [
        // Sony
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
      ],
      [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
      [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
      [
        [MODEL, "Xperia Tablet"],
        [VENDOR, SONY],
        [TYPE, TABLET],
      ],
      [
        // OnePlus
        / (kb2005|in20[12]5|be20[12][59])\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
      ],
      [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]],
      [
        // Amazon
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        // Kindle Fire without Silk / Echo Show
        /(kf[a-z]+)( bui|\)).+silk\//i,
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
      [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
      [
        [MODEL, /(.+)/g, "Fire Phone $1"],
        [VENDOR, AMAZON],
        [TYPE, MOBILE],
      ],
      [
        // BlackBerry
        /(playbook);[-\w\),; ]+(rim)/i,
      ],
      [MODEL, VENDOR, [TYPE, TABLET]],
      [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
      [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
      [
        // Asus
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
      ],
      [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
      [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
      [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
      [
        // HTC
        /(nexus 9)/i,
      ],
      [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        // HTC
        // ZTE
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
      ],
      [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
      [
        // TCL
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
      ],
      [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
      ],
      [MODEL, [VENDOR, "TCL"], [TYPE, MOBILE]],
      [
        // itel
        /(itel) ((\w+))/i,
      ],
      [
        [VENDOR, lowerize],
        MODEL,
        [
          TYPE,
          strMapper,
          {
            tablet: ["p10001l", "w7001"],
            "*": "mobile",
          },
        ],
      ],
      [
        // Acer
        /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i,
      ],
      [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
      [
        // Meizu
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i,
      ],
      [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
      [
        // Ulefone
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i,
      ],
      [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
      [
        // Energizer
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i,
      ],
      [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
      [
        // Cat
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i,
      ],
      [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
      [
        // Smartfren
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i,
      ],
      [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
      [
        // Nothing
        /droid.+; (a(?:015|06[35]|142p?))/i,
      ],
      [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
      [
        // Archos
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
      ],
      [MODEL, [VENDOR, "Archos"], [TYPE, TABLET]],
      [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
      [MODEL, [VENDOR, "Archos"], [TYPE, MOBILE]],
      [
        // MIXED
        /(imo) (tab \w+)/i,
        // IMO
        /(infinix) (x1101b?)/i,
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
        // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
        /; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
        // BLU/HMD/IMO/TCL
        /(hp) ([\w ]+\w)/i,
        // HP iPAQ
        /(microsoft); (lumia[\w ]+)/i,
        // Microsoft Lumia
        /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
        // Lenovo
        /(oppo) ?([\w ]+) bui/i,
      ],
      [VENDOR, MODEL, [TYPE, MOBILE]],
      [
        /(kobo)\s(ereader|touch)/i,
        // Kobo
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        // HP TouchPad
        /(kindle)\/([\w\.]+)/i,
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [/(surface duo)/i],
      [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
      [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
      [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
      [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
      [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]],
      [/(sprint) (\w+)/i],
      [VENDOR, MODEL, [TYPE, MOBILE]],
      [/(kin\.[onetw]{3})/i],
      [
        [MODEL, /\./g, " "],
        [VENDOR, MICROSOFT],
        [TYPE, MOBILE],
      ],
      [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
      [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
      [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
      [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
      [
        ///////////////////
        // SMARTTVS
        ///////////////////
        /smart-tv.+(samsung)/i,
      ],
      [VENDOR, [TYPE, SMARTTV]],
      [/hbbtv.+maple;(\d+)/i],
      [
        [MODEL, /^/, "SmartTV"],
        [VENDOR, SAMSUNG],
        [TYPE, SMARTTV],
      ],
      [/tcast.+(lg)e?. ([-\w]+)/i],
      [VENDOR, MODEL, [TYPE, SMARTTV]],
      [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
      [
        [VENDOR, LG],
        [TYPE, SMARTTV],
      ],
      [/(apple) ?tv/i],
      [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
      [/crkey.*devicetype\/chromecast/i],
      [
        [MODEL, CHROMECAST + " Third Generation"],
        [VENDOR, GOOGLE],
        [TYPE, SMARTTV],
      ],
      [/crkey.*devicetype\/([^/]*)/i],
      [
        [MODEL, /^/, "Chromecast "],
        [VENDOR, GOOGLE],
        [TYPE, SMARTTV],
      ],
      [/fuchsia.*crkey/i],
      [
        [MODEL, CHROMECAST + " Nest Hub"],
        [VENDOR, GOOGLE],
        [TYPE, SMARTTV],
      ],
      [/crkey/i],
      [
        [MODEL, CHROMECAST],
        [VENDOR, GOOGLE],
        [TYPE, SMARTTV],
      ],
      [/(portaltv)/i],
      [MODEL, [VENDOR, FACEBOOK], [TYPE, SMARTTV]],
      [/droid.+aft(\w+)( bui|\))/i],
      [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
      [/(shield \w+ tv)/i],
      [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]],
      [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
      [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
      [/(bravia[\w ]+)( bui|\))/i],
      [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
      [/(mi(tv|box)-?\w+) bui/i],
      [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
      [/Hbbtv.*(technisat) (.*);/i],
      [VENDOR, MODEL, [TYPE, SMARTTV]],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        // Roku
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
      ],
      [
        [VENDOR, trim],
        [MODEL, trim],
        [TYPE, SMARTTV],
      ],
      [
        // SmartTV from Unidentified Vendors
        /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i,
      ],
      [MODEL, [TYPE, SMARTTV]],
      [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
      [[TYPE, SMARTTV]],
      [
        ///////////////////
        // CONSOLES
        ///////////////////
        /(ouya)/i,
        // Ouya
        /(nintendo) (\w+)/i,
      ],
      [VENDOR, MODEL, [TYPE, CONSOLE]],
      [/droid.+; (shield)( bui|\))/i],
      [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]],
      [/(playstation \w+)/i],
      [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
      [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
      [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
      [
        ///////////////////
        // WEARABLES
        ///////////////////
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i,
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
      [
        /((pebble))app/i,
        // Pebble
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
      ],
      [VENDOR, MODEL, [TYPE, WEARABLE]],
      [/(ow(?:19|20)?we?[1-3]{1,3})/i],
      [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]],
      [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
      [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
      [/(opwwe\d{3})/i],
      [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]],
      [/(moto 360)/i],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]],
      [/(smartwatch 3)/i],
      [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]],
      [/(g watch r)/i],
      [MODEL, [VENDOR, LG], [TYPE, WEARABLE]],
      [/droid.+; (wt63?0{2,3})\)/i],
      [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
      [
        ///////////////////
        // XR
        ///////////////////
        /droid.+; (glass) \d/i,
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, XR]],
      [/(pico) (4|neo3(?: link|pro)?)/i],
      [VENDOR, MODEL, [TYPE, XR]],
      [/(quest( \d| pro)?s?).+vr/i],
      [MODEL, [VENDOR, FACEBOOK], [TYPE, XR]],
      [
        ///////////////////
        // EMBEDDED
        ///////////////////
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i,
      ],
      [VENDOR, [TYPE, EMBEDDED]],
      [/(aeobc)\b/i],
      [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
      [/(homepod).+mac os/i],
      [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]],
      [/windows iot/i],
      [[TYPE, EMBEDDED]],
      [
        ////////////////////
        // MIXED (GENERIC)
        ///////////////////
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i,
      ],
      [
        MODEL,
        [
          TYPE,
          strMapper,
          {
            mobile: "Mobile",
            xr: "VR",
            "*": TABLET,
          },
        ],
      ],
      [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
      [[TYPE, TABLET]],
      [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
      [[TYPE, MOBILE]],
      [/droid .+?; ([\w\. -]+)( bui|\))/i],
      [MODEL, [VENDOR, "Generic"]],
    ],
    engine: [
      [/windows.+ edge\/([\w\.]+)/i],
      [VERSION, [NAME, EDGE + "HTML"]],
      [/(arkweb)\/([\w\.]+)/i],
      [NAME, VERSION],
      [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
      [VERSION, [NAME, "Blink"]],
      [
        /(presto)\/([\w\.]+)/i,
        // Presto
        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
        // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
        /ekioh(flow)\/([\w\.]+)/i,
        // Flow
        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
        // KHTML/Tasman/Links
        /(icab)[\/ ]([23]\.[\d\.]+)/i,
        // iCab
        /\b(libweb)/i,
      ],
      [NAME, VERSION],
      [/ladybird\//i],
      [[NAME, "LibWeb"]],
      [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
      [VERSION, NAME],
    ],
    os: [
      [
        // Windows
        /microsoft (windows) (vista|xp)/i,
      ],
      [NAME, VERSION],
      [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
      [NAME, [VERSION, strMapper, windowsVersionMap]],
      [
        /windows nt 6\.2; (arm)/i,
        // Windows RT
        /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
        /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
      ],
      [
        [VERSION, strMapper, windowsVersionMap],
        [NAME, WINDOWS],
      ],
      [
        // iOS/macOS
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        // iOS
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i,
      ],
      [
        [VERSION, /_/g, "."],
        [NAME, "iOS"],
      ],
      [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
      [
        [NAME, "macOS"],
        [VERSION, /_/g, "."],
      ],
      [
        // Google Chromecast
        /android ([\d\.]+).*crkey/i,
      ],
      [VERSION, [NAME, CHROMECAST + " Android"]],
      [/fuchsia.*crkey\/([\d\.]+)/i],
      [VERSION, [NAME, CHROMECAST + " Fuchsia"]],
      [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
      [VERSION, [NAME, CHROMECAST + " SmartSpeaker"]],
      [/linux.*crkey\/([\d\.]+)/i],
      [VERSION, [NAME, CHROMECAST + " Linux"]],
      [/crkey\/([\d\.]+)/i],
      [VERSION, [NAME, CHROMECAST]],
      [
        // Mobile OSes
        /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i,
      ],
      [VERSION, NAME],
      [/(ubuntu) ([\w\.]+) like android/i],
      [[NAME, /(.+)/, "$1 Touch"], VERSION],
      [
        // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i,
      ],
      [NAME, VERSION],
      [/\(bb(10);/i],
      [VERSION, [NAME, BLACKBERRY]],
      [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
      [VERSION, [NAME, "Symbian"]],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
      ],
      [VERSION, [NAME, FIREFOX + " OS"]],
      [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
      [VERSION, [NAME, "webOS"]],
      [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
      [VERSION, [NAME, "watchOS"]],
      [
        // Google ChromeOS
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i,
      ],
      [[NAME, "Chrome OS"], VERSION],
      [
        // Smart TVs
        /panasonic;(viera)/i,
        // Panasonic Viera
        /(netrange)mmh/i,
        // Netrange
        /(nettv)\/(\d+\.[\w\.]+)/i,
        // NetTV
        // Console
        /(nintendo|playstation) (\w+)/i,
        // Nintendo/Playstation
        /(xbox); +xbox ([^\);]+)/i,
        // Microsoft Xbox (360, One, X, S, Series X, Series S)
        /(pico) .+os([\w\.]+)/i,
        // Pico
        // Other
        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
        // Joli/Palm
        /(mint)[\/\(\) ]?(\w*)/i,
        // Mint
        /(mageia|vectorlinux)[; ]/i,
        // Mageia/VectorLinux
        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
        // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
        /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
        // Hurd/Linux
        /(gnu) ?([\w\.]*)/i,
        // GNU
        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
        // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
        /(haiku) (\w+)/i,
      ],
      [NAME, VERSION],
      [/(sunos) ?([\w\.\d]*)/i],
      [[NAME, "Solaris"], VERSION],
      [
        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
        // Solaris
        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
        // AIX
        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
        // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
        /(unix) ?([\w\.]*)/i,
      ],
      [NAME, VERSION],
    ],
  };
  var defaultProps = (function () {
    var props = {
      init: {},
      isIgnore: {},
      isIgnoreRgx: {},
      toString: {},
    };
    setProps.call(props.init, [
      [UA_BROWSER, [NAME, VERSION, MAJOR, TYPE]],
      [UA_CPU, [ARCHITECTURE]],
      [UA_DEVICE, [TYPE, MODEL, VENDOR]],
      [UA_ENGINE, [NAME, VERSION]],
      [UA_OS, [NAME, VERSION]],
    ]);
    setProps.call(props.isIgnore, [
      [UA_BROWSER, [VERSION, MAJOR]],
      [UA_ENGINE, [VERSION]],
      [UA_OS, [VERSION]],
    ]);
    setProps.call(props.isIgnoreRgx, [
      [UA_BROWSER, / ?browser$/i],
      [UA_OS, / ?os$/i],
    ]);
    setProps.call(props.toString, [
      [UA_BROWSER, [NAME, VERSION]],
      [UA_CPU, [ARCHITECTURE]],
      [UA_DEVICE, [VENDOR, MODEL]],
      [UA_ENGINE, [NAME, VERSION]],
      [UA_OS, [NAME, VERSION]],
    ]);
    return props;
  })();
  var createIData = function createIData(item, itemType) {
    var init_props = defaultProps.init[itemType],
      is_ignoreProps = defaultProps.isIgnore[itemType] || 0,
      is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0,
      toString_props = defaultProps.toString[itemType] || 0;
    function IData() {
      setProps.call(this, init_props);
    }
    IData.prototype.getItem = function () {
      return item;
    };
    IData.prototype.withClientHints = function () {
      if (!NAVIGATOR_UADATA) {
        return item.parseCH().get();
      }
      return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(
        function (res) {
          return item.setCH(new UACHData(res, false)).parseCH().get();
        }
      );
    };
    IData.prototype.withFeatureCheck = function () {
      return item.detectFeature().get();
    };
    if (itemType != UA_RESULT) {
      IData.prototype.is = function (strToCheck) {
        var is = false;
        for (var i in this) {
          if (
            this.hasOwnProperty(i) &&
            !has(is_ignoreProps, i) &&
            lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) ==
              lowerize(
                is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck
              )
          ) {
            is = true;
            if (strToCheck != UNDEF_TYPE) break;
          } else if (strToCheck == UNDEF_TYPE && is) {
            is = !is;
            break;
          }
        }
        return is;
      };
      IData.prototype.toString = function () {
        var str = EMPTY;
        for (var i in toString_props) {
          if (_type_of(this[toString_props[i]]) !== UNDEF_TYPE) {
            str += (str ? " " : EMPTY) + this[toString_props[i]];
          }
        }
        return str || UNDEF_TYPE;
      };
    }
    if (!NAVIGATOR_UADATA) {
      IData.prototype.then = function (cb) {
        var that = this;
        var IDataResolve = function IDataResolve() {
          for (var prop in that) {
            if (that.hasOwnProperty(prop)) {
              this[prop] = that[prop];
            }
          }
        };
        IDataResolve.prototype = {
          is: IData.prototype.is,
          toString: IData.prototype.toString,
        };
        var resolveData = new IDataResolve();
        cb(resolveData);
        return resolveData;
      };
    }
    return new IData();
  };
  function UACHData(uach, isHttpUACH) {
    uach = uach || {};
    setProps.call(this, CH_ALL_VALUES);
    if (isHttpUACH) {
      setProps.call(this, [
        [BRANDS, itemListToArray(uach[CH_HEADER])],
        [FULLVERLIST, itemListToArray(uach[CH_HEADER_FULL_VER_LIST])],
        [MOBILE, /\?1/.test(uach[CH_HEADER_MOBILE])],
        [MODEL, stripQuotes(uach[CH_HEADER_MODEL])],
        [PLATFORM, stripQuotes(uach[CH_HEADER_PLATFORM])],
        [PLATFORMVER, stripQuotes(uach[CH_HEADER_PLATFORM_VER])],
        [ARCHITECTURE, stripQuotes(uach[CH_HEADER_ARCH])],
        [FORMFACTORS, itemListToArray(uach[CH_HEADER_FORM_FACTORS])],
        [BITNESS, stripQuotes(uach[CH_HEADER_BITNESS])],
      ]);
    } else {
      for (var prop in uach) {
        if (this.hasOwnProperty(prop) && _type_of(uach[prop]) !== UNDEF_TYPE)
          this[prop] = uach[prop];
      }
    }
  }
  function UAItem(itemType, ua, rgxMap, uaCH) {
    this.get = function (prop) {
      if (!prop) return this.data;
      return this.data.hasOwnProperty(prop) ? this.data[prop] : void 0;
    };
    this.set = function (prop, val) {
      this.data[prop] = val;
      return this;
    };
    this.setCH = function (ch) {
      this.uaCH = ch;
      return this;
    };
    this.detectFeature = function () {
      if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
        switch (this.itemType) {
          case UA_BROWSER:
            if (
              NAVIGATOR.brave &&
              _type_of(NAVIGATOR.brave.isBrave) == FUNC_TYPE
            ) {
              this.set(NAME, "Brave");
            }
            break;
          case UA_DEVICE:
            if (
              !this.get(TYPE) &&
              NAVIGATOR_UADATA &&
              NAVIGATOR_UADATA[MOBILE]
            ) {
              this.set(TYPE, MOBILE);
            }
            if (
              this.get(MODEL) == "Macintosh" &&
              NAVIGATOR &&
              _type_of(NAVIGATOR.standalone) !== UNDEF_TYPE &&
              NAVIGATOR.maxTouchPoints &&
              NAVIGATOR.maxTouchPoints > 2
            ) {
              this.set(MODEL, "iPad").set(TYPE, TABLET);
            }
            break;
          case UA_OS:
            if (
              !this.get(NAME) &&
              NAVIGATOR_UADATA &&
              NAVIGATOR_UADATA[PLATFORM]
            ) {
              this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
            }
            break;
          case UA_RESULT:
            var data = this.data;
            var detect = function detect(itemType2) {
              return data[itemType2].getItem().detectFeature().get();
            };
            this.set(UA_BROWSER, detect(UA_BROWSER))
              .set(UA_CPU, detect(UA_CPU))
              .set(UA_DEVICE, detect(UA_DEVICE))
              .set(UA_ENGINE, detect(UA_ENGINE))
              .set(UA_OS, detect(UA_OS));
        }
      }
      return this;
    };
    this.parseUA = function () {
      if (this.itemType != UA_RESULT) {
        rgxMapper.call(this.data, this.ua, this.rgxMap);
      }
      if (this.itemType == UA_BROWSER) {
        this.set(MAJOR, majorize(this.get(VERSION)));
      }
      return this;
    };
    this.parseCH = function () {
      var uaCH2 = this.uaCH,
        rgxMap2 = this.rgxMap;
      switch (this.itemType) {
        case UA_BROWSER:
        case UA_ENGINE:
          var brands = uaCH2[FULLVERLIST] || uaCH2[BRANDS],
            prevName;
          if (brands) {
            for (var i in brands) {
              var brandName = brands[i].brand || brands[i],
                brandVersion = brands[i].version;
              if (
                this.itemType == UA_BROWSER &&
                !/not.a.brand/i.test(brandName) &&
                (!prevName ||
                  (/chrom/i.test(prevName) && brandName != CHROMIUM))
              ) {
                brandName = strMapper(brandName, {
                  Chrome: "Google Chrome",
                  Edge: "Microsoft Edge",
                  "Chrome WebView": "Android WebView",
                  "Chrome Headless": "HeadlessChrome",
                  "Huawei Browser": "HuaweiBrowser",
                  "MIUI Browser": "Miui Browser",
                  "Opera Mobi": "OperaMobile",
                  Yandex: "YaBrowser",
                });
                this.set(NAME, brandName)
                  .set(VERSION, brandVersion)
                  .set(MAJOR, majorize(brandVersion));
                prevName = brandName;
              }
              if (this.itemType == UA_ENGINE && brandName == CHROMIUM) {
                this.set(VERSION, brandVersion);
              }
            }
          }
          break;
        case UA_CPU:
          var archName = uaCH2[ARCHITECTURE];
          if (archName) {
            if (archName && uaCH2[BITNESS] == "64") archName += "64";
            rgxMapper.call(this.data, archName + ";", rgxMap2);
          }
          break;
        case UA_DEVICE:
          if (uaCH2[MOBILE]) {
            this.set(TYPE, MOBILE);
          }
          if (uaCH2[MODEL]) {
            this.set(MODEL, uaCH2[MODEL]);
            if (!this.get(TYPE) || !this.get(VENDOR)) {
              var reParse = {};
              rgxMapper.call(
                reParse,
                "droid 9; " + uaCH2[MODEL] + ")",
                rgxMap2
              );
              if (!this.get(TYPE) && !!reParse.type) {
                this.set(TYPE, reParse.type);
              }
              if (!this.get(VENDOR) && !!reParse.vendor) {
                this.set(VENDOR, reParse.vendor);
              }
            }
          }
          if (uaCH2[FORMFACTORS]) {
            var ff;
            if (typeof uaCH2[FORMFACTORS] !== "string") {
              var idx = 0;
              while (!ff && idx < uaCH2[FORMFACTORS].length) {
                ff = strMapper(uaCH2[FORMFACTORS][idx++], formFactorsMap);
              }
            } else {
              ff = strMapper(uaCH2[FORMFACTORS], formFactorsMap);
            }
            this.set(TYPE, ff);
          }
          break;
        case UA_OS:
          var osName = uaCH2[PLATFORM];
          if (osName) {
            var osVersion = uaCH2[PLATFORMVER];
            if (osName == WINDOWS)
              osVersion = parseInt(majorize(osVersion), 10) >= 13 ? "11" : "10";
            this.set(NAME, osName).set(VERSION, osVersion);
          }
          if (this.get(NAME) == WINDOWS && uaCH2[MODEL] == "Xbox") {
            this.set(NAME, "Xbox").set(VERSION, void 0);
          }
          break;
        case UA_RESULT:
          var data = this.data;
          var parse = function parse(itemType2) {
            return data[itemType2].getItem().setCH(uaCH2).parseCH().get();
          };
          this.set(UA_BROWSER, parse(UA_BROWSER))
            .set(UA_CPU, parse(UA_CPU))
            .set(UA_DEVICE, parse(UA_DEVICE))
            .set(UA_ENGINE, parse(UA_ENGINE))
            .set(UA_OS, parse(UA_OS));
      }
      return this;
    };
    setProps.call(this, [
      ["itemType", itemType],
      ["ua", ua],
      ["uaCH", uaCH],
      ["rgxMap", rgxMap],
      ["data", createIData(this, itemType)],
    ]);
    return this;
  }
  function UAParser(ua, extensions, headers) {
    if ((typeof ua === "undefined" ? "undefined" : _type_of(ua)) === OBJ_TYPE) {
      if (isExtensions(ua, true)) {
        if (
          (typeof extensions === "undefined"
            ? "undefined"
            : _type_of(extensions)) === OBJ_TYPE
        ) {
          headers = extensions;
        }
        extensions = ua;
      } else {
        headers = ua;
        extensions = void 0;
      }
      ua = void 0;
    } else if (
      (typeof ua === "undefined" ? "undefined" : _type_of(ua)) === STR_TYPE &&
      !isExtensions(extensions, true)
    ) {
      headers = extensions;
      extensions = void 0;
    }
    if (headers && _type_of(headers.append) === FUNC_TYPE) {
      var kv = {};
      headers.forEach(function (v, k) {
        kv[k] = v;
      });
      headers = kv;
    }
    if (!_instanceof(this, UAParser)) {
      return new UAParser(ua, extensions, headers).getResult();
    }
    var userAgent =
        (typeof ua === "undefined" ? "undefined" : _type_of(ua)) === STR_TYPE
          ? ua // Passed user-agent string
          : headers && headers[USER_AGENT]
          ? headers[USER_AGENT] // User-Agent from passed headers
          : NAVIGATOR && NAVIGATOR.userAgent
          ? NAVIGATOR.userAgent // navigator.userAgent
          : EMPTY,
      httpUACH = new UACHData(headers, true),
      regexMap = extensions
        ? extend(defaultRegexes, extensions)
        : defaultRegexes,
      createItemFunc = function createItemFunc(itemType) {
        if (itemType == UA_RESULT) {
          return function () {
            return new UAItem(itemType, userAgent, regexMap, httpUACH)
              .set("ua", userAgent)
              .set(UA_BROWSER, this.getBrowser())
              .set(UA_CPU, this.getCPU())
              .set(UA_DEVICE, this.getDevice())
              .set(UA_ENGINE, this.getEngine())
              .set(UA_OS, this.getOS())
              .get();
          };
        } else {
          return function () {
            return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH)
              .parseUA()
              .get();
          };
        }
      };
    setProps
      .call(this, [
        ["getBrowser", createItemFunc(UA_BROWSER)],
        ["getCPU", createItemFunc(UA_CPU)],
        ["getDevice", createItemFunc(UA_DEVICE)],
        ["getEngine", createItemFunc(UA_ENGINE)],
        ["getOS", createItemFunc(UA_OS)],
        ["getResult", createItemFunc(UA_RESULT)],
        [
          "getUA",
          function () {
            return userAgent;
          },
        ],
        [
          "setUA",
          function (ua2) {
            if (isString(ua2))
              userAgent =
                ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
            return this;
          },
        ],
      ])
      .setUA(userAgent);
    return this;
  }
  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR, TYPE]);
  UAParser.CPU = enumerize([ARCHITECTURE]);
  UAParser.DEVICE = enumerize([
    MODEL,
    VENDOR,
    TYPE,
    CONSOLE,
    MOBILE,
    SMARTTV,
    TABLET,
    WEARABLE,
    EMBEDDED,
  ]);
  UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);
  // src/platform.ts
  var PlatformDetector = /*#__PURE__*/ (function () {
    function PlatformDetector() {
      _class_call_check(this, PlatformDetector);
      this.browserName = "";
      this.uaParser = new UAParser();
      var _this_uaParser_getBrowser_name;
      this.browserName =
        (_this_uaParser_getBrowser_name = this.uaParser.getBrowser().name) !==
          null && _this_uaParser_getBrowser_name !== void 0
          ? _this_uaParser_getBrowser_name
          : "";
    }
    _create_class(PlatformDetector, [
      {
        key: "isChrome",
        value: function isChrome() {
          return this.browserName.toLowerCase().endsWith("chrome");
        },
      },
      {
        key: "isAndroid",
        value: function isAndroid() {
          return this.uaParser.getOS().is("Android");
        },
      },
      {
        key: "isIOS",
        value: function isIOS() {
          return this.uaParser.getOS().is("iOS");
        },
      },
      {
        key: "isInStandaloneMode",
        value: function isInStandaloneMode() {
          var _window_navigator;
          return (
            window.matchMedia("(display-mode: standalone)").matches ||
            ((_window_navigator = window.navigator) === null ||
            _window_navigator === void 0
              ? void 0
              : _window_navigator.standalone) ||
            document.referrer.includes("android-app://")
          );
        },
      },
    ]);
    return PlatformDetector;
  })();
  // src/utils.ts
  function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 3) | 8, 1);
    s[8] = s[13] = s[18] = s[23];
    var uuid2 = s.join("");
    return uuid2;
  }
  function urlB64ToUint8Array(base64String) {
    var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  function getUrlParam(key) {
    var params = new URLSearchParams(window.location.search);
    return params.get(key);
  }
  function lockPortraitOrientation() {
    var s = screen;
    if (s.lockOrientation) {
      s.lockOrientation("portrait-primary");
    } else if (s.mozLockOrientation) {
      s.mozLockOrientation("portrait-primary");
    } else if (s.msLockOrientation) {
      s.msLockOrientation("portrait-primary");
    } else if (s.orientation && s.orientation.lock) {
      s.orientation.lock("portrait-primary");
    }
  }
  function openFullscreen() {
    var el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (
      el === null || el === void 0 ? void 0 : el.webkitRequestFullscreen
    ) {
      var _el_webkitRequestFullscreen;
      el === null || el === void 0
        ? void 0
        : (_el_webkitRequestFullscreen = el.webkitRequestFullscreen) === null ||
          _el_webkitRequestFullscreen === void 0
        ? void 0
        : _el_webkitRequestFullscreen.call(el);
    } else if (el === null || el === void 0 ? void 0 : el.msRequestFullscreen) {
      var _el_msRequestFullscreen;
      el === null || el === void 0
        ? void 0
        : (_el_msRequestFullscreen = el.msRequestFullscreen) === null ||
          _el_msRequestFullscreen === void 0
        ? void 0
        : _el_msRequestFullscreen.call(el);
    }
    lockPortraitOrientation();
  }
  // src/core.ts
  var defaultOptions = {
    appId: "pwa-app",
    swPath: "/sw.js",
    pushOptions: {
      userVisibleOnly: true,
      applicationServerKey: "",
    },
    promptInstallWhenReady: true,
  };
  var PWASDK = /*#__PURE__*/ (function () {
    function PWASDK(options) {
      _class_call_check(this, PWASDK);
      this.options = options;
      this.listeners = /* @__PURE__ */ new Map();
      this.platformDetector = new PlatformDetector();
      this.deferredPrompt = null;
      this.pushSubscription = null;
      this.isUserInteraction = false;
      this.options = _object_spread({}, defaultOptions, options);
    }
    _create_class(PWASDK, [
      {
        key: "appId",
        get: function get() {
          return this.options.appId;
        },
      },
      {
        key: "init",
        value: function init() {
          var _this = this;
          window.addEventListener("beforeinstallprompt", function (e) {
            e.preventDefault();
            _this.deferredPrompt = e;
            _this.setUnInstalled();
            _this.trigger("install-available", true);
          });
          document.addEventListener(
            "click",
            this.handleUserInteraction.bind(this)
          );
          this.registerServiceWorker();
          var handleSubcrib = function () {
            setTimeout(function () {
              _this.doSubscribe();
            }, 2e3);
          };
          this.on("install-prompt", handleSubcrib);
          this.on("install-cancel", handleSubcrib);
          this.on("notification-trigger", function () {
            _this.popoverLaunch();
          });
          if (
            // 带有启动参数
            getUrlParam("launch_flag") &&
            this.isInstalled() &&
            this.isChrome() &&
            !this.platformDetector.isInStandaloneMode()
          ) {
            this.launchFullScreen();
          }
        },
      },
      {
        key: "on",
        value: function on(event, callback) {
          this.listeners.set(
            event,
            _to_consumable_array(this.listeners.get(event) || []).concat([
              callback,
            ])
          );
        },
      },
      {
        key: "off",
        value: function off(event, callback) {
          var _this_listeners_get;
          this.listeners.set(
            event,
            ((_this_listeners_get = this.listeners.get(event)) === null ||
            _this_listeners_get === void 0
              ? void 0
              : _this_listeners_get.filter(function (cb) {
                  return cb !== callback;
                })) || []
          );
        },
      },
      {
        key: "trigger",
        value: function trigger(event, data) {
          var _this_listeners_get;
          (_this_listeners_get = this.listeners.get(event)) === null ||
          _this_listeners_get === void 0
            ? void 0
            : _this_listeners_get.forEach(function (cb) {
                return cb(data);
              });
        },
      },
      {
        key: "request",
        value: function request(url, data) {
          return _async_to_generator(function () {
            return _ts_generator(this, function (_state) {
              return [
                2,
                fetch(url, {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                })
                  .then(function (res) {
                    return res.json();
                  })
                  .catch(function (err) {
                    console.error(err);
                  }),
              ];
            });
          })();
        },
      },
      {
        key: "doSubscribe",
        value: function doSubscribe() {
          var _this = this;
          return _async_to_generator(function () {
            return _ts_generator(this, function (_state) {
              if (_this.isChrome()) {
                navigator.serviceWorker.ready
                  .then(function () {
                    return _this.requestNotificationPermission();
                  })
                  .then(function () {
                    var subscription = _this.subscribeAndDistribute();
                    _this.trigger("notification-subscribed", subscription);
                  })
                  .catch(function (err) {
                    console.log(err);
                    _this.trigger("notification-error", err);
                  })
                  .finally(function () {
                    _this.trigger("notification-trigger", true);
                  });
              }
              return [2];
            });
          })();
        },
      },
      {
        key: "fetchIsInstall",
        value: function fetchIsInstall() {
          return this.request("/event/install", {
            uuid: this.getUuid(),
            project_id: this.appId,
          });
        },
      },
      {
        /**
         * 检查浏览器是否支持 Service Worker
         */ key: "isServiceWorkerSupported",
        value: function isServiceWorkerSupported() {
          return "serviceWorker" in navigator;
        },
      },
      {
        key: "registerServiceWorker",
        value: function registerServiceWorker() {
          if (this.isServiceWorkerSupported()) {
            navigator.serviceWorker
              .register(this.options.swPath)
              .then(function (reg) {
                console.log("Successfully registered service worker", reg);
              })
              .catch(function (err) {
                console.warn("Error whilst registering service worker", err);
              });
          }
        },
      },
      {
        key: "setUuid",
        value: function setUuid(v) {
          if (!v || v === void 0 || v === "undefined") {
            return;
          }
          var t = "".concat(this.appId, "_pwa_uuid");
          localStorage.setItem(t, v);
        },
      },
      {
        key: "getUuid",
        value: function getUuid() {
          var t = "".concat(this.appId, "_pwa_uuid");
          var uid = localStorage.getItem(t);
          if (uid === null || uid === "") {
            uid = getUrlParam("pwaUuid");
            if (uid === null || uid === "") {
              uid = uuid();
            }
            this.setUuid(uid);
          }
          return uid;
        },
      },
      {
        key: "setInstalled",
        value: function setInstalled() {
          var t = "".concat(this.appId, "_pwa_install_flag");
          localStorage.setItem(t, "true");
        },
      },
      {
        key: "setUnInstalled",
        value: function setUnInstalled() {
          var t = "".concat(this.appId, "_pwa_install_flag");
          localStorage.setItem(t, "false");
        },
      },
      {
        key: "isInstalled",
        value: function isInstalled() {
          var t = "".concat(this.appId, "_pwa_install_flag");
          var v = localStorage.getItem(t);
          return v && v !== "false" ? v : false;
        },
      },
      {
        key: "popoverLaunch",
        value: function popoverLaunch() {
          var _this = this;
          var _popover_querySelector, _popover_querySelector1;
          if (document.getElementById("app-launch-popover")) {
            return;
          }
          var template =
            '\n      <div class="pwa-launch-popover" style="\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: #fff;\n        border-top-left-radius: 12px;\n        border-top-right-radius: 12px;\n        box-shadow: 0 -2px 12px rgba(0,0,0,0.15);\n        padding: 16px;\n        font-family: sans-serif;\n        z-index: 9999;\n      ">\n        <div class="pwa-launch-content" style="margin-top: 12px; display: flex; align-items: center; gap: 12px;">\n          <img class="pwa-launch-icon" src="/icon.png" style="width: 64px; height: 64px; border-radius: 12px;" />\n          <div class="pwa-launch-info">\n            <div class="pwa-launch-title" style="font-weight: bold; font-size: 16px;">H5 Game</div>\n            <div class="pwa-launch-desc" style="font-size: 12px; color: #999;">卡牌策略 \xb7 4.5★ \xb7 1.1M</div>\n          </div>\n        </div>\n    \n        <button class="pwa-launch-btn" style="\n          width: 100%;\n          margin-top: 16px;\n          padding: 12px 0;\n          font-size: 16px;\n          font-weight: bold;\n          color: #fff;\n          background: #007bff;\n          border: none;\n          border-radius: 8px;\n        ">\n          Continue in App\n        </button>\n    \n        <div class="pwa-launch-close" style="\n          position: absolute;\n          top: 8px;\n          right: 12px;\n          font-size: 20px;\n          color: #999;\n          cursor: pointer;\n        ">&times;</div>\n      </div>\n    ';
          var popover = new DOMParser()
            .parseFromString(template, "text/html")
            .querySelector(".pwa-launch-popover");
          if (!popover) return;
          popover.id = "app-launch-popover";
          (_popover_querySelector =
            popover.querySelector(".pwa-launch-btn")) === null ||
          _popover_querySelector === void 0
            ? void 0
            : _popover_querySelector.addEventListener("click", function () {
                if (_this.isInstalled()) {
                  var ul = new URL(location.href);
                  ul.searchParams.set("launch_flag", "true");
                  window.open(ul.toString(), "_blank");
                } else {
                  _this.launchFullScreen();
                }
              });
          (_popover_querySelector1 =
            popover.querySelector(".pwa-launch-close")) === null ||
          _popover_querySelector1 === void 0
            ? void 0
            : _popover_querySelector1.addEventListener("click", function () {
                _this.closePopover(popover);
              });
          document.body.appendChild(popover);
        },
      },
      {
        key: "closePopover",
        value: function closePopover(popover) {
          popover.classList.add("leaving");
          setTimeout(function () {
            popover.remove();
          }, 300);
        },
      },
      {
        key: "requestNotificationPermission",
        value: function requestNotificationPermission() {
          return _async_to_generator(function () {
            return _ts_generator(this, function (_state) {
              if (!window.Notification) {
                return [
                  2,
                  Promise.reject(
                    "The system does not support desktop notifications"
                  ),
                ];
              }
              return [
                2,
                Notification.requestPermission().then(function (permission) {
                  if (permission === "granted") {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "User has disabled notification permissions"
                  );
                }),
              ];
            });
          })();
        },
      },
      {
        key: "handleUserInteraction",
        value: function handleUserInteraction() {
          var _this = this;
          return _async_to_generator(function () {
            return _ts_generator(this, function (_state) {
              switch (_state.label) {
                case 0:
                  _this.isUserInteraction = true;
                  if (_this.isInstalled()) {
                    document.removeEventListener(
                      "click",
                      _this.handleUserInteraction
                    );
                    return [2];
                  }
                  if (!_this.options.promptInstallWhenReady) return [3, 2];
                  return [4, _this.promptInstallWaitForReady()];
                case 1:
                  _state.sent();
                  _state.label = 2;
                case 2:
                  return [2];
              }
            });
          })();
        },
      },
      {
        key: "promptInstall",
        value: function promptInstall() {
          var _this = this;
          return _async_to_generator(function () {
            var choice;
            return _ts_generator(this, function (_state) {
              switch (_state.label) {
                case 0:
                  if (!(_this.deferredPrompt && _this.isUserInteraction))
                    return [3, 2];
                  _this.deferredPrompt.prompt();
                  return [4, _this.deferredPrompt.userChoice];
                case 1:
                  choice = _state.sent();
                  _this.deferredPrompt = null;
                  if (choice.outcome === "accepted") {
                    _this.trigger("install-prompt", choice);
                    _this.setInstalled();
                  } else {
                    _this.trigger("install-cancel", choice);
                  }
                  return [2, choice];
                case 2:
                  return [2, null];
              }
            });
          })();
        },
      },
      {
        key: "promptInstallWaitForReady",
        value: function promptInstallWaitForReady() {
          var _this = this;
          return _async_to_generator(function () {
            var count, maxCount;
            return _ts_generator(this, function (_state) {
              switch (_state.label) {
                case 0:
                  count = 0;
                  maxCount = 10;
                  _state.label = 1;
                case 1:
                  return [
                    4,
                    new Promise(function (resolve) {
                      return setTimeout(resolve, 300);
                    }),
                  ];
                case 2:
                  _state.sent();
                  if (_this.deferredPrompt) {
                    return [2, _this.promptInstall()];
                  }
                  count++;
                  _state.label = 3;
                case 3:
                  if (count < maxCount) return [3, 1];
                  _state.label = 4;
                case 4:
                  throw new Error("Failed to prompt install");
              }
            });
          })();
        },
      },
      {
        // 将订阅信息传给后端服务器
        // 为了方便之后的推送，为每个客户端简单生成一个标识
        key: "distributePushResource",
        value: function distributePushResource(subscription) {
          this.pushSubscription = subscription;
          ({
            subscriptionText: JSON.stringify(subscription),
            uuid: this.getUuid(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            timezoneOffset: /* @__PURE__ */ new Date().getTimezoneOffset() / 60,
          });
        },
      },
      {
        key: "subscribeAndDistribute",
        value: /**
         * 订阅推送并将订阅结果发送给后端
         */ function subscribeAndDistribute() {
          var _this = this;
          return _async_to_generator(function () {
            return _ts_generator(this, function (_state) {
              if (!window.PushManager) {
                return [
                  2,
                  Promise.reject("The system does not support message push"),
                ];
              }
              return [
                2,
                navigator.serviceWorker.ready.then(
                  /*#__PURE__*/ (function () {
                    var _ref = _async_to_generator(function (registration) {
                      return _ts_generator(this, function (_state) {
                        return [
                          2,
                          registration.pushManager
                            .getSubscription()
                            .then(function (subscription) {
                              if (subscription) {
                                _this.distributePushResource(subscription);
                              } else {
                                var _this_options_pushOptions;
                                var _this_options_pushOptions_applicationServerKey;
                                return (
                                  // 订阅
                                  registration.pushManager
                                    .subscribe({
                                      userVisibleOnly: true,
                                      applicationServerKey: urlB64ToUint8Array(
                                        (_this_options_pushOptions_applicationServerKey =
                                          (_this_options_pushOptions =
                                            _this.options.pushOptions) ===
                                            null ||
                                          _this_options_pushOptions === void 0
                                            ? void 0
                                            : _this_options_pushOptions.applicationServerKey) !==
                                          null &&
                                          _this_options_pushOptions_applicationServerKey !==
                                            void 0
                                          ? _this_options_pushOptions_applicationServerKey
                                          : ""
                                      ),
                                    })
                                    .then(function (subscription2) {
                                      _this.distributePushResource(
                                        subscription2
                                      );
                                    })
                                );
                              }
                            }),
                        ];
                      });
                    });
                    return function (registration) {
                      return _ref.apply(this, arguments);
                    };
                  })()
                ),
              ];
            });
          })();
        },
      },
      {
        key: "unsubscribePushNotification",
        // async subscribePushNotification() {
        value:
          //   if (!this.isServiceWorkerSupported()) {
          //     throw new Error('Push notifications are not supported')
          //   }
          //   try {
          //     const registration = await navigator.serviceWorker.ready
          //     const subscription = await registration.pushManager.subscribe({
          //       userVisibleOnly: this.options.pushOptions?.userVisibleOnly ?? true,
          //       applicationServerKey: urlB64ToUint8Array(this.options.pushOptions?.applicationServerKey ?? ''),
          //     }).finally(() => {
          //       this.popoverLaunch()
          //     })
          //     this.pushSubscription = subscription
          //     this.trigger('push-subscribed', subscription)
          //     return subscription
          //   }
          //   catch (error) {
          //     this.trigger('push-error', error)
          //     throw error
          //   }
          // }
          function unsubscribePushNotification() {
            var _this = this;
            return _async_to_generator(function () {
              return _ts_generator(this, function (_state) {
                switch (_state.label) {
                  case 0:
                    if (!_this.pushSubscription) return [3, 2];
                    return [4, _this.pushSubscription.unsubscribe()];
                  case 1:
                    _state.sent();
                    _this.pushSubscription = null;
                    _this.trigger("notification-unsubscribed", true);
                    return [2, true];
                  case 2:
                    return [2, false];
                }
              });
            })();
          },
      },
      {
        key: "isChrome",
        value: function isChrome() {
          return this.platformDetector.isChrome();
        },
      },
      {
        key: "toChrome",
        value: function toChrome() {
          var url =
            arguments.length > 0 && arguments[0] !== void 0
              ? arguments[0]
              : location.href;
          var ul = new URL(url);
          var uid = getUrlParam("pwaUuid");
          if (uid == null || uid === "") {
            ul.searchParams.set("pwaUuid", this.getUuid());
            window.history.pushState("", "", ul);
          }
          ul.searchParams.set("browser_flag", "external");
          var ulS = ul.toString();
          var href = "intent://".concat(ulS.replace(/(https|http):\/\//, ""));
          var u = "".concat(
            href,
            "#Intent;scheme=https;action=android.intent.action.VIEW;component=com.android.chrome;package=com.android.chrome;end"
          );
          var a = document.createElement("a");
          a.href = u;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
      },
      {
        key: "recordPwaInstallUser",
        value: function recordPwaInstallUser(name, ul) {
          var h = !ul
            ? location.href
            : "".concat(location.href, "####").concat(ul);
          this.request("", {
            name: name,
            uuid: this.getUuid(),
            href: h,
            userAgent: navigator.userAgent,
          })
            .then(function (res) {
              if (res.code !== 200) {
                console.log(res);
              }
            })
            .catch(function () {});
        },
      },
      {
        key: "launchFullScreen",
        value: function launchFullScreen() {
          openFullscreen();
        },
      },
    ]);
    return PWASDK;
  })();
  // src/interface.ts
  var SDK_NAME = "RB_SDK";
  // src/index.ts
  (function (global, sdkName, options) {
    var sdk = new PWASDK(options);
    global[sdkName] = sdk;
  })(window, SDK_NAME, {
    swPath: "/sw.js",
    pushOptions: {
      userVisibleOnly: true,
      applicationServerKey:
        "BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I",
    },
    appId: "com.qlj.pwa-game-demo",
  });
})();
