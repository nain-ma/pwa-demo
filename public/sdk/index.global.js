(function () {
  'use strict';

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
  var CH_ALL_VALUES = [BRANDS, FULLVERLIST, MOBILE, MODEL, PLATFORM, PLATFORMVER, ARCHITECTURE, FORMFACTORS, BITNESS];
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
  var isWindow = typeof window !== UNDEF_TYPE;
  var NAVIGATOR = isWindow && window.navigator ? window.navigator : void 0;
  var NAVIGATOR_UADATA = NAVIGATOR && NAVIGATOR.userAgentData ? NAVIGATOR.userAgentData : void 0;
  var extend = function(defaultRgx, extensions) {
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
      mergedRgx[k] = extraRgx[k] && extraRgx[k].length % 2 === 0 ? extraRgx[k].concat(defaultRgx[k]) : defaultRgx[k];
    }
    return mergedRgx;
  };
  var enumerize = function(arr) {
    var enums = {};
    for (var i = 0; i < arr.length; i++) {
      enums[arr[i].toUpperCase()] = arr[i];
    }
    return enums;
  };
  var has = function(str1, str2) {
    if (typeof str1 === OBJ_TYPE && str1.length > 0) {
      for (var i in str1) {
        if (lowerize(str1[i]) == lowerize(str2)) return true;
      }
      return false;
    }
    return isString(str1) ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
  };
  var isExtensions = function(obj, deep) {
    for (var prop in obj) {
      return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
    }
  };
  var isString = function(val) {
    return typeof val === STR_TYPE;
  };
  var itemListToArray = function(header) {
    if (!header) return void 0;
    var arr = [];
    var tokens = strip(/\\?\"/g, header).split(",");
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i].indexOf(";") > -1) {
        var token = trim(tokens[i]).split(";v=");
        arr[i] = { brand: token[0], version: token[1] };
      } else {
        arr[i] = trim(tokens[i]);
      }
    }
    return arr;
  };
  var lowerize = function(str) {
    return isString(str) ? str.toLowerCase() : str;
  };
  var majorize = function(version) {
    return isString(version) ? strip(/[^\d\.]/g, version).split(".")[0] : void 0;
  };
  var setProps = function(arr) {
    for (var i in arr) {
      var propName = arr[i];
      if (typeof propName == OBJ_TYPE && propName.length == 2) {
        this[propName[0]] = propName[1];
      } else {
        this[propName] = void 0;
      }
    }
    return this;
  };
  var strip = function(pattern, str) {
    return isString(str) ? str.replace(pattern, EMPTY) : str;
  };
  var stripQuotes = function(str) {
    return strip(/\\?\"/g, str);
  };
  var trim = function(str, len) {
    if (isString(str)) {
      str = strip(/^\s\s*/, str);
      return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
    }
  };
  var rgxMapper = function(ua, arrays) {
    if (!ua || !arrays) return;
    var i = 0, j, k, p, q, matches, match;
    while (i < arrays.length && !matches) {
      var regex = arrays[i], props = arrays[i + 1];
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
            if (typeof q === OBJ_TYPE && q.length > 0) {
              if (q.length === 2) {
                if (typeof q[1] == FUNC_TYPE) {
                  this[q[0]] = q[1].call(this, match);
                } else {
                  this[q[0]] = q[1];
                }
              } else if (q.length === 3) {
                if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                  this[q[0]] = match ? q[1].call(this, match, q[2]) : void 0;
                } else {
                  this[q[0]] = match ? match.replace(q[1], q[2]) : void 0;
                }
              } else if (q.length === 4) {
                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : void 0;
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
  var strMapper = function(str, map) {
    for (var i in map) {
      if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
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
    "ME": "4.90",
    "NT 3.11": "NT3.51",
    "NT 4.0": "NT4.0",
    "2000": "NT 5.0",
    "XP": ["NT 5.1", "NT 5.2"],
    "Vista": "NT 6.0",
    "7": "NT 6.1",
    "8": "NT 6.2",
    "8.1": "NT 6.3",
    "10": ["NT 6.4", "NT 10.0"],
    "RT": "ARM"
  };
  var formFactorsMap = {
    "embedded": "Automotive",
    "mobile": "Mobile",
    "tablet": ["Tablet", "EInk"],
    "smarttv": "TV",
    "wearable": "Watch",
    "xr": ["VR", "XR"],
    "?": ["Desktop", "Unknown"],
    "*": void 0
  };
  var defaultRegexes = {
    browser: [
      [
        // Most common regardless engine
        /\b(?:crmo|crios)\/([\w\.]+)/i
        // Chrome for Android/iOS
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
      [
        /edg(?:e|ios|a)?\/([\w\.]+)/i
        // Microsoft Edge
      ],
      [VERSION, [NAME, "Edge"]],
      [
        // Presto based
        /(opera mini)\/([-\w\.]+)/i,
        // Opera Mini
        /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
        // Opera Mobi/Tablet
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
        // Opera
      ],
      [NAME, VERSION],
      [
        /opios[\/ ]+([\w\.]+)/i
        // Opera mini on iphone >= 8.0
      ],
      [VERSION, [NAME, OPERA + " Mini"]],
      [
        /\bop(?:rg)?x\/([\w\.]+)/i
        // Opera GX
      ],
      [VERSION, [NAME, OPERA + " GX"]],
      [
        /\bopr\/([\w\.]+)/i
        // Opera Webkit
      ],
      [VERSION, [NAME, OPERA]],
      [
        // Mixed
        /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
        // Baidu
      ],
      [VERSION, [NAME, "Baidu"]],
      [
        /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i
        // Maxthon
      ],
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
        /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i
        // Ecosia/Weibo
      ],
      [NAME, VERSION],
      [
        /quark(?:pc)?\/([-\w\.]+)/i
        // Quark
      ],
      [VERSION, [NAME, "Quark"]],
      [
        /\bddg\/([\w\.]+)/i
        // DuckDuckGo
      ],
      [VERSION, [NAME, "DuckDuckGo"]],
      [
        /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
        // UCBrowser
      ],
      [VERSION, [NAME, "UCBrowser"]],
      [
        /microm.+\bqbcore\/([\w\.]+)/i,
        // WeChat Desktop for Windows Built-in Browser
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i
        // WeChat
      ],
      [VERSION, [NAME, "WeChat"]],
      [
        /konqueror\/([\w\.]+)/i
        // Konqueror
      ],
      [VERSION, [NAME, "Konqueror"]],
      [
        /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
        // IE11
      ],
      [VERSION, [NAME, "IE"]],
      [
        /ya(?:search)?browser\/([\w\.]+)/i
        // Yandex
      ],
      [VERSION, [NAME, "Yandex"]],
      [
        /slbrowser\/([\w\.]+)/i
        // Smart Lenovo Browser
      ],
      [VERSION, [NAME, "Smart " + LENOVO + SUFFIX_BROWSER]],
      [
        /(avast|avg)\/([\w\.]+)/i
        // Avast/AVG Secure Browser
      ],
      [[NAME, /(.+)/, "$1 Secure" + SUFFIX_BROWSER], VERSION],
      [
        /\bfocus\/([\w\.]+)/i
        // Firefox Focus
      ],
      [VERSION, [NAME, FIREFOX + " Focus"]],
      [
        /\bopt\/([\w\.]+)/i
        // Opera Touch
      ],
      [VERSION, [NAME, OPERA + " Touch"]],
      [
        /coc_coc\w+\/([\w\.]+)/i
        // Coc Coc Browser
      ],
      [VERSION, [NAME, "Coc Coc"]],
      [
        /dolfin\/([\w\.]+)/i
        // Dolphin
      ],
      [VERSION, [NAME, "Dolphin"]],
      [
        /coast\/([\w\.]+)/i
        // Opera Coast
      ],
      [VERSION, [NAME, OPERA + " Coast"]],
      [
        /miuibrowser\/([\w\.]+)/i
        // MIUI Browser
      ],
      [VERSION, [NAME, "MIUI" + SUFFIX_BROWSER]],
      [
        /fxios\/([\w\.-]+)/i
        // Firefox for iOS
      ],
      [VERSION, [NAME, PREFIX_MOBILE + FIREFOX]],
      [
        /\bqihoobrowser\/?([\w\.]*)/i
        // 360
      ],
      [VERSION, [NAME, "360"]],
      [
        /\b(qq)\/([\w\.]+)/i
        // QQ
      ],
      [[NAME, /(.+)/, "$1Browser"], VERSION],
      [
        /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
      ],
      [[NAME, /(.+)/, "$1" + SUFFIX_BROWSER], VERSION],
      [
        // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
        /samsungbrowser\/([\w\.]+)/i
        // Samsung Internet
      ],
      [VERSION, [NAME, SAMSUNG + " Internet"]],
      [
        /metasr[\/ ]?([\d\.]+)/i
        // Sogou Explorer
      ],
      [VERSION, [NAME, SOGOU + " Explorer"]],
      [
        /(sogou)mo\w+\/([\d\.]+)/i
        // Sogou Mobile
      ],
      [[NAME, SOGOU + " Mobile"], VERSION],
      [
        /(electron)\/([\w\.]+) safari/i,
        // Electron-based App
        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
        // Tesla
        /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i
        // QQ/2345
      ],
      [NAME, VERSION],
      [
        /(lbbrowser|rekonq)/i
        // LieBao Browser/Rekonq
      ],
      [NAME],
      [
        /ome\/([\w\.]+) \w* ?(iron) saf/i,
        // Iron
        /ome\/([\w\.]+).+qihu (360)[es]e/i
        // 360
      ],
      [VERSION, NAME],
      [
        // WebView
        /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
        // Facebook App for iOS & Android
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
        /(instagram|snapchat)[\/ ]([-\w\.]+)/i
        // Instagram/Snapchat
      ],
      [NAME, VERSION, [TYPE, INAPP]],
      [
        /\bgsa\/([\w\.]+) .*safari\//i
        // Google Search Appliance on iOS
      ],
      [VERSION, [NAME, "GSA"], [TYPE, INAPP]],
      [
        /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
        // TikTok
      ],
      [VERSION, [NAME, "TikTok"], [TYPE, INAPP]],
      [
        /\[(linkedin)app\]/i
        // LinkedIn App for iOS & Android
      ],
      [NAME, [TYPE, INAPP]],
      [
        /(chromium)[\/ ]([-\w\.]+)/i
        // Chromium
      ],
      [NAME, VERSION],
      [
        /headlesschrome(?:\/([\w\.]+)| )/i
        // Chrome Headless
      ],
      [VERSION, [NAME, CHROME + " Headless"]],
      [
        / wv\).+(chrome)\/([\w\.]+)/i
        // Chrome WebView
      ],
      [[NAME, CHROME + " WebView"], VERSION],
      [
        /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
        // Android Browser
      ],
      [VERSION, [NAME, "Android" + SUFFIX_BROWSER]],
      [
        /chrome\/([\w\.]+) mobile/i
        // Chrome Mobile
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Chrome"]],
      [
        /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
        // Chrome/OmniWeb/Arora/Tizen/Nokia
      ],
      [NAME, VERSION],
      [
        /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i
        // Safari Mobile
      ],
      [VERSION, [NAME, PREFIX_MOBILE + "Safari"]],
      [
        /iphone .*mobile(?:\/\w+ | ?)safari/i
      ],
      [[NAME, PREFIX_MOBILE + "Safari"]],
      [
        /version\/([\w\.\,]+) .*(safari)/i
        // Safari
      ],
      [VERSION, NAME],
      [
        /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
        // Safari < 3.0
      ],
      [NAME, [VERSION, "1"]],
      [
        /(webkit|khtml)\/([\w\.]+)/i
      ],
      [NAME, VERSION],
      [
        // Gecko based
        /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i
        // Firefox Mobile
      ],
      [[NAME, PREFIX_MOBILE + FIREFOX], VERSION],
      [
        /(navigator|netscape\d?)\/([-\w\.]+)/i
        // Netscape
      ],
      [[NAME, "Netscape"], VERSION],
      [
        /(wolvic|librewolf)\/([\w\.]+)/i
        // Wolvic/LibreWolf
      ],
      [NAME, VERSION],
      [
        /mobile vr; rv:([\w\.]+)\).+firefox/i
        // Firefox Reality
      ],
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
        /\b(links) \(([\w\.]+)/i
        // Links
      ],
      [NAME, [VERSION, /_/g, "."]],
      [
        /(cobalt)\/([\w\.]+)/i
        // Cobalt
      ],
      [NAME, [VERSION, /[^\d\.]+./, EMPTY]]
    ],
    cpu: [
      [
        /\b((amd|x|x86[-_]?|wow|win)64)\b/i
        // AMD64 (x64)
      ],
      [[ARCHITECTURE, "amd64"]],
      [
        /(ia32(?=;))/i,
        // IA32 (quicktime)
        /\b((i[346]|x)86)(pc)?\b/i
        // IA32 (x86)
      ],
      [[ARCHITECTURE, "ia32"]],
      [
        /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i
        // ARM64
      ],
      [[ARCHITECTURE, "arm64"]],
      [
        /\b(arm(v[67])?ht?n?[fl]p?)\b/i
        // ARMHF
      ],
      [[ARCHITECTURE, "armhf"]],
      [
        // PocketPC mistakenly identified as PowerPC
        /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
      ],
      [[ARCHITECTURE, "arm"]],
      [
        /((ppc|powerpc)(64)?)( mac|;|\))/i
        // PowerPC
      ],
      [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
      [
        / sun4\w[;\)]/i
        // SPARC
      ],
      [[ARCHITECTURE, "sparc"]],
      [
        /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
        // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
      ],
      [[ARCHITECTURE, lowerize]]
    ],
    device: [
      [
        //////////////////////////
        // MOBILES & TABLETS
        /////////////////////////
        // Samsung
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
      [
        /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]((?!sm-[lr])[-\w]+)/i,
        /sec-(sgh\w+)/i
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
      [
        // Apple
        /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
        // iPod/iPhone
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
      [
        /\((ipad);[-\w\),; ]+apple/i,
        // iPad
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
      [
        /(macintosh);/i
      ],
      [MODEL, [VENDOR, APPLE]],
      [
        // Sharp
        /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
      ],
      [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
      [
        // Honor
        /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
      ],
      [MODEL, [VENDOR, HONOR], [TYPE, TABLET]],
      [
        /honor([-\w ]+)[;\)]/i
      ],
      [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]],
      [
        // Huawei
        /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
      ],
      [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
      [
        /(?:huawei)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
      ],
      [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
      [
        // Xiaomi
        /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
        /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i
        // Mi Pad tablets
      ],
      [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
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
        / ([\w ]+) miui\/v?\d/i
      ],
      [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
      [
        // OPPO
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
      ],
      [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]],
      [
        /\b(opd2(\d{3}a?))(?: bui|\))/i
      ],
      [MODEL, [VENDOR, strMapper, { "OnePlus": ["304", "403", "203"], "*": OPPO }], [TYPE, TABLET]],
      [
        // BLU Vivo Series
        /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "BLU"], [TYPE, MOBILE]],
      [
        // Vivo
        /; vivo (\w+)(?: bui|\))/i,
        /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
      ],
      [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
      [
        // Realme
        /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
      ],
      [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
      [
        // Motorola
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ](\w*)/i,
        /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
      [
        /\b(mz60\d|xoom[2 ]{0,2}) build\//i
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
      [
        // LG
        /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
      ],
      [MODEL, [VENDOR, LG], [TYPE, TABLET]],
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
        /\blg-?([\d\w]+) bui/i
      ],
      [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
      [
        // Lenovo
        /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
        /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
      ],
      [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]],
      [
        // Nokia
        /(nokia) (t[12][01])/i
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
        /nokia[-_ ]?(([-\w\. ]*))/i
      ],
      [[MODEL, /_/g, " "], [TYPE, MOBILE], [VENDOR, "Nokia"]],
      [
        // Google
        /(pixel (c|tablet))\b/i
        // Google Pixel C/Tablet
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
      [
        /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
        // Google Pixel
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
      [
        // Sony
        /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
      ],
      [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
      [
        /sony tablet [ps]/i,
        /\b(?:sony)?sgp\w+(?: bui|\))/i
      ],
      [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
      [
        // OnePlus
        / (kb2005|in20[12]5|be20[12][59])\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
      ],
      [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]],
      [
        // Amazon
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
        // Kindle Fire without Silk / Echo Show
        /(kf[a-z]+)( bui|\)).+silk\//i
        // Kindle Fire HD
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
      [
        /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
        // Fire Phone
      ],
      [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
      [
        // BlackBerry
        /(playbook);[-\w\),; ]+(rim)/i
        // BlackBerry PlayBook
      ],
      [MODEL, VENDOR, [TYPE, TABLET]],
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i
        // BlackBerry 10
      ],
      [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
      [
        // Asus
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
      ],
      [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
      [
        / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
      ],
      [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
      [
        // HTC
        /(nexus 9)/i
        // HTC Nexus 9
      ],
      [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
      [
        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
        // HTC
        // ZTE
        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
        /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
        // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
      ],
      [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
      [
        // TCL
        /tcl (xess p17aa)/i,
        /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [MODEL, [VENDOR, "TCL"], [TYPE, TABLET]],
      [
        /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
      ],
      [MODEL, [VENDOR, "TCL"], [TYPE, MOBILE]],
      [
        // itel
        /(itel) ((\w+))/i
      ],
      [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { "tablet": ["p10001l", "w7001"], "*": "mobile" }]],
      [
        // Acer
        /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
      ],
      [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
      [
        // Meizu
        /droid.+; (m[1-5] note) bui/i,
        /\bmz-([-\w]{2,})/i
      ],
      [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
      [
        // Ulefone
        /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
      [
        // Energizer
        /; (energy ?\w+)(?: bui|\))/i,
        /; energizer ([\w ]+)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Energizer"], [TYPE, MOBILE]],
      [
        // Cat
        /; cat (b35);/i,
        /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Cat"], [TYPE, MOBILE]],
      [
        // Smartfren
        /((?:new )?andromax[\w- ]+)(?: bui|\))/i
      ],
      [MODEL, [VENDOR, "Smartfren"], [TYPE, MOBILE]],
      [
        // Nothing
        /droid.+; (a(?:015|06[35]|142p?))/i
      ],
      [MODEL, [VENDOR, "Nothing"], [TYPE, MOBILE]],
      [
        // Archos
        /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
        /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
      ],
      [MODEL, [VENDOR, "Archos"], [TYPE, TABLET]],
      [
        /archos ([\w ]+)( b|\))/i,
        /; (ac[3-6]\d\w{2,8})( b|\))/i
      ],
      [MODEL, [VENDOR, "Archos"], [TYPE, MOBILE]],
      [
        // MIXED
        /(imo) (tab \w+)/i,
        // IMO
        /(infinix) (x1101b?)/i
        // Infinix XPad
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
        /(oppo) ?([\w ]+) bui/i
        // OPPO
      ],
      [VENDOR, MODEL, [TYPE, MOBILE]],
      [
        /(kobo)\s(ereader|touch)/i,
        // Kobo
        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
        // HP TouchPad
        /(kindle)\/([\w\.]+)/i
        // Kindle
      ],
      [VENDOR, MODEL, [TYPE, TABLET]],
      [
        /(surface duo)/i
        // Surface Duo
      ],
      [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
      [
        /droid [\d\.]+; (fp\du?)(?: b|\))/i
        // Fairphone
      ],
      [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
      [
        /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i
        // Nvidia Tablets
      ],
      [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]],
      [
        /(sprint) (\w+)/i
        // Sprint Phones
      ],
      [VENDOR, MODEL, [TYPE, MOBILE]],
      [
        /(kin\.[onetw]{3})/i
        // Microsoft Kin
      ],
      [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
      [
        /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
        // Zebra
      ],
      [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
      [
        /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
      ],
      [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
      [
        ///////////////////
        // SMARTTVS
        ///////////////////
        /smart-tv.+(samsung)/i
        // Samsung
      ],
      [VENDOR, [TYPE, SMARTTV]],
      [
        /hbbtv.+maple;(\d+)/i
      ],
      [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
      [
        /tcast.+(lg)e?. ([-\w]+)/i
        // LG SmartTV
      ],
      [VENDOR, MODEL, [TYPE, SMARTTV]],
      [
        /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
      ],
      [[VENDOR, LG], [TYPE, SMARTTV]],
      [
        /(apple) ?tv/i
        // Apple TV
      ],
      [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
      [
        /crkey.*devicetype\/chromecast/i
        // Google Chromecast Third Generation
      ],
      [[MODEL, CHROMECAST + " Third Generation"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /crkey.*devicetype\/([^/]*)/i
        // Google Chromecast with specific device type
      ],
      [[MODEL, /^/, "Chromecast "], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /fuchsia.*crkey/i
        // Google Chromecast Nest Hub
      ],
      [[MODEL, CHROMECAST + " Nest Hub"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /crkey/i
        // Google Chromecast, Linux-based or unknown
      ],
      [[MODEL, CHROMECAST], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
      [
        /(portaltv)/i
        // Facebook Portal TV
      ],
      [MODEL, [VENDOR, FACEBOOK], [TYPE, SMARTTV]],
      [
        /droid.+aft(\w+)( bui|\))/i
        // Fire TV
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
      [
        /(shield \w+ tv)/i
        // Nvidia Shield TV
      ],
      [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]],
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i
        // Sharp
      ],
      [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
      [
        /(bravia[\w ]+)( bui|\))/i
        // Sony
      ],
      [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
      [
        /(mi(tv|box)-?\w+) bui/i
        // Xiaomi
      ],
      [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
      [
        /Hbbtv.*(technisat) (.*);/i
        // TechniSAT
      ],
      [VENDOR, MODEL, [TYPE, SMARTTV]],
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
        // Roku
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
        // HbbTV devices
      ],
      [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
      [
        // SmartTV from Unidentified Vendors
        /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
      ],
      [MODEL, [TYPE, SMARTTV]],
      [
        /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
      ],
      [[TYPE, SMARTTV]],
      [
        ///////////////////
        // CONSOLES
        ///////////////////
        /(ouya)/i,
        // Ouya
        /(nintendo) (\w+)/i
        // Nintendo
      ],
      [VENDOR, MODEL, [TYPE, CONSOLE]],
      [
        /droid.+; (shield)( bui|\))/i
        // Nvidia Portable
      ],
      [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]],
      [
        /(playstation \w+)/i
        // Playstation
      ],
      [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
      [
        /\b(xbox(?: one)?(?!; xbox))[\); ]/i
        // Microsoft Xbox
      ],
      [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
      [
        ///////////////////
        // WEARABLES
        ///////////////////
        /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i
        // Samsung Galaxy Watch
      ],
      [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]],
      [
        /((pebble))app/i,
        // Pebble
        /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i
        // Asus ZenWatch / LG Watch / Pixel Watch
      ],
      [VENDOR, MODEL, [TYPE, WEARABLE]],
      [
        /(ow(?:19|20)?we?[1-3]{1,3})/i
        // Oppo Watch
      ],
      [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]],
      [
        /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
        // Apple Watch
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
      [
        /(opwwe\d{3})/i
        // OnePlus Watch
      ],
      [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]],
      [
        /(moto 360)/i
        // Motorola 360
      ],
      [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]],
      [
        /(smartwatch 3)/i
        // Sony SmartWatch
      ],
      [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]],
      [
        /(g watch r)/i
        // LG G Watch R
      ],
      [MODEL, [VENDOR, LG], [TYPE, WEARABLE]],
      [
        /droid.+; (wt63?0{2,3})\)/i
      ],
      [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
      [
        ///////////////////
        // XR
        ///////////////////
        /droid.+; (glass) \d/i
        // Google Glass
      ],
      [MODEL, [VENDOR, GOOGLE], [TYPE, XR]],
      [
        /(pico) (4|neo3(?: link|pro)?)/i
        // Pico
      ],
      [VENDOR, MODEL, [TYPE, XR]],
      [
        /(quest( \d| pro)?s?).+vr/i
        // Meta Quest
      ],
      [MODEL, [VENDOR, FACEBOOK], [TYPE, XR]],
      [
        ///////////////////
        // EMBEDDED
        ///////////////////
        /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
        // Tesla
      ],
      [VENDOR, [TYPE, EMBEDDED]],
      [
        /(aeobc)\b/i
        // Echo Dot
      ],
      [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
      [
        /(homepod).+mac os/i
        // Apple HomePod
      ],
      [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]],
      [
        /windows iot/i
      ],
      [[TYPE, EMBEDDED]],
      [
        ////////////////////
        // MIXED (GENERIC)
        ///////////////////
        /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
      ],
      [MODEL, [TYPE, strMapper, { "mobile": "Mobile", "xr": "VR", "*": TABLET }]],
      [
        /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
        // Unidentifiable Tablet
      ],
      [[TYPE, TABLET]],
      [
        /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
        // Unidentifiable Mobile
      ],
      [[TYPE, MOBILE]],
      [
        /droid .+?; ([\w\. -]+)( bui|\))/i
        // Generic Android Device
      ],
      [MODEL, [VENDOR, "Generic"]]
    ],
    engine: [
      [
        /windows.+ edge\/([\w\.]+)/i
        // EdgeHTML
      ],
      [VERSION, [NAME, EDGE + "HTML"]],
      [
        /(arkweb)\/([\w\.]+)/i
        // ArkWeb
      ],
      [NAME, VERSION],
      [
        /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
        // Blink
      ],
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
        /\b(libweb)/i
        // LibWeb
      ],
      [NAME, VERSION],
      [
        /ladybird\//i
      ],
      [[NAME, "LibWeb"]],
      [
        /rv\:([\w\.]{1,9})\b.+(gecko)/i
        // Gecko
      ],
      [VERSION, NAME]
    ],
    os: [
      [
        // Windows
        /microsoft (windows) (vista|xp)/i
        // Windows (iTunes)
      ],
      [NAME, VERSION],
      [
        /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i
        // Windows Phone
      ],
      [NAME, [VERSION, strMapper, windowsVersionMap]],
      [
        /windows nt 6\.2; (arm)/i,
        // Windows RT
        /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
        /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
      ],
      [[VERSION, strMapper, windowsVersionMap], [NAME, WINDOWS]],
      [
        // iOS/macOS
        /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
        // iOS
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i
      ],
      [[VERSION, /_/g, "."], [NAME, "iOS"]],
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+haiku)/i
        // Mac OS
      ],
      [[NAME, "macOS"], [VERSION, /_/g, "."]],
      [
        // Google Chromecast
        /android ([\d\.]+).*crkey/i
        // Google Chromecast, Android-based
      ],
      [VERSION, [NAME, CHROMECAST + " Android"]],
      [
        /fuchsia.*crkey\/([\d\.]+)/i
        // Google Chromecast, Fuchsia-based
      ],
      [VERSION, [NAME, CHROMECAST + " Fuchsia"]],
      [
        /crkey\/([\d\.]+).*devicetype\/smartspeaker/i
        // Google Chromecast, Linux-based Smart Speaker
      ],
      [VERSION, [NAME, CHROMECAST + " SmartSpeaker"]],
      [
        /linux.*crkey\/([\d\.]+)/i
        // Google Chromecast, Legacy Linux-based
      ],
      [VERSION, [NAME, CHROMECAST + " Linux"]],
      [
        /crkey\/([\d\.]+)/i
        // Google Chromecast, unknown
      ],
      [VERSION, [NAME, CHROMECAST]],
      [
        // Mobile OSes
        /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
        // Android-x86/HarmonyOS
      ],
      [VERSION, NAME],
      [
        /(ubuntu) ([\w\.]+) like android/i
        // Ubuntu Touch
      ],
      [[NAME, /(.+)/, "$1 Touch"], VERSION],
      [
        // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
        /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
      ],
      [NAME, VERSION],
      [
        /\(bb(10);/i
        // BlackBerry 10
      ],
      [VERSION, [NAME, BLACKBERRY]],
      [
        /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i
        // Symbian
      ],
      [VERSION, [NAME, "Symbian"]],
      [
        /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
        // Firefox OS
      ],
      [VERSION, [NAME, FIREFOX + " OS"]],
      [
        /web0s;.+rt(tv)/i,
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
        // WebOS
      ],
      [VERSION, [NAME, "webOS"]],
      [
        /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
        // watchOS
      ],
      [VERSION, [NAME, "watchOS"]],
      [
        // Google ChromeOS
        /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
        // Chromium OS
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
        /(haiku) (\w+)/i
        // Haiku
      ],
      [NAME, VERSION],
      [
        /(sunos) ?([\w\.\d]*)/i
        // Solaris
      ],
      [[NAME, "Solaris"], VERSION],
      [
        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
        // Solaris
        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
        // AIX
        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
        // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
        /(unix) ?([\w\.]*)/i
        // UNIX
      ],
      [NAME, VERSION]
    ]
  };
  var defaultProps = function() {
    var props = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} };
    setProps.call(props.init, [
      [UA_BROWSER, [NAME, VERSION, MAJOR, TYPE]],
      [UA_CPU, [ARCHITECTURE]],
      [UA_DEVICE, [TYPE, MODEL, VENDOR]],
      [UA_ENGINE, [NAME, VERSION]],
      [UA_OS, [NAME, VERSION]]
    ]);
    setProps.call(props.isIgnore, [
      [UA_BROWSER, [VERSION, MAJOR]],
      [UA_ENGINE, [VERSION]],
      [UA_OS, [VERSION]]
    ]);
    setProps.call(props.isIgnoreRgx, [
      [UA_BROWSER, / ?browser$/i],
      [UA_OS, / ?os$/i]
    ]);
    setProps.call(props.toString, [
      [UA_BROWSER, [NAME, VERSION]],
      [UA_CPU, [ARCHITECTURE]],
      [UA_DEVICE, [VENDOR, MODEL]],
      [UA_ENGINE, [NAME, VERSION]],
      [UA_OS, [NAME, VERSION]]
    ]);
    return props;
  }();
  var createIData = function(item, itemType) {
    var init_props = defaultProps.init[itemType], is_ignoreProps = defaultProps.isIgnore[itemType] || 0, is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0, toString_props = defaultProps.toString[itemType] || 0;
    function IData() {
      setProps.call(this, init_props);
    }
    IData.prototype.getItem = function() {
      return item;
    };
    IData.prototype.withClientHints = function() {
      if (!NAVIGATOR_UADATA) {
        return item.parseCH().get();
      }
      return NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then(function(res) {
        return item.setCH(new UACHData(res, false)).parseCH().get();
      });
    };
    IData.prototype.withFeatureCheck = function() {
      return item.detectFeature().get();
    };
    if (itemType != UA_RESULT) {
      IData.prototype.is = function(strToCheck) {
        var is = false;
        for (var i in this) {
          if (this.hasOwnProperty(i) && !has(is_ignoreProps, i) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
            is = true;
            if (strToCheck != UNDEF_TYPE) break;
          } else if (strToCheck == UNDEF_TYPE && is) {
            is = !is;
            break;
          }
        }
        return is;
      };
      IData.prototype.toString = function() {
        var str = EMPTY;
        for (var i in toString_props) {
          if (typeof this[toString_props[i]] !== UNDEF_TYPE) {
            str += (str ? " " : EMPTY) + this[toString_props[i]];
          }
        }
        return str || UNDEF_TYPE;
      };
    }
    if (!NAVIGATOR_UADATA) {
      IData.prototype.then = function(cb) {
        var that = this;
        var IDataResolve = function() {
          for (var prop in that) {
            if (that.hasOwnProperty(prop)) {
              this[prop] = that[prop];
            }
          }
        };
        IDataResolve.prototype = {
          is: IData.prototype.is,
          toString: IData.prototype.toString
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
        [BITNESS, stripQuotes(uach[CH_HEADER_BITNESS])]
      ]);
    } else {
      for (var prop in uach) {
        if (this.hasOwnProperty(prop) && typeof uach[prop] !== UNDEF_TYPE) this[prop] = uach[prop];
      }
    }
  }
  function UAItem(itemType, ua, rgxMap, uaCH) {
    this.get = function(prop) {
      if (!prop) return this.data;
      return this.data.hasOwnProperty(prop) ? this.data[prop] : void 0;
    };
    this.set = function(prop, val) {
      this.data[prop] = val;
      return this;
    };
    this.setCH = function(ch) {
      this.uaCH = ch;
      return this;
    };
    this.detectFeature = function() {
      if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
        switch (this.itemType) {
          case UA_BROWSER:
            if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == FUNC_TYPE) {
              this.set(NAME, "Brave");
            }
            break;
          case UA_DEVICE:
            if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) {
              this.set(TYPE, MOBILE);
            }
            if (this.get(MODEL) == "Macintosh" && NAVIGATOR && typeof NAVIGATOR.standalone !== UNDEF_TYPE && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) {
              this.set(MODEL, "iPad").set(TYPE, TABLET);
            }
            break;
          case UA_OS:
            if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) {
              this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
            }
            break;
          case UA_RESULT:
            var data = this.data;
            var detect = function(itemType2) {
              return data[itemType2].getItem().detectFeature().get();
            };
            this.set(UA_BROWSER, detect(UA_BROWSER)).set(UA_CPU, detect(UA_CPU)).set(UA_DEVICE, detect(UA_DEVICE)).set(UA_ENGINE, detect(UA_ENGINE)).set(UA_OS, detect(UA_OS));
        }
      }
      return this;
    };
    this.parseUA = function() {
      if (this.itemType != UA_RESULT) {
        rgxMapper.call(this.data, this.ua, this.rgxMap);
      }
      if (this.itemType == UA_BROWSER) {
        this.set(MAJOR, majorize(this.get(VERSION)));
      }
      return this;
    };
    this.parseCH = function() {
      var uaCH2 = this.uaCH, rgxMap2 = this.rgxMap;
      switch (this.itemType) {
        case UA_BROWSER:
        case UA_ENGINE:
          var brands = uaCH2[FULLVERLIST] || uaCH2[BRANDS], prevName;
          if (brands) {
            for (var i in brands) {
              var brandName = brands[i].brand || brands[i], brandVersion = brands[i].version;
              if (this.itemType == UA_BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || /chrom/i.test(prevName) && brandName != CHROMIUM)) {
                brandName = strMapper(brandName, {
                  "Chrome": "Google Chrome",
                  "Edge": "Microsoft Edge",
                  "Chrome WebView": "Android WebView",
                  "Chrome Headless": "HeadlessChrome",
                  "Huawei Browser": "HuaweiBrowser",
                  "MIUI Browser": "Miui Browser",
                  "Opera Mobi": "OperaMobile",
                  "Yandex": "YaBrowser"
                });
                this.set(NAME, brandName).set(VERSION, brandVersion).set(MAJOR, majorize(brandVersion));
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
              rgxMapper.call(reParse, "droid 9; " + uaCH2[MODEL] + ")", rgxMap2);
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
            if (osName == WINDOWS) osVersion = parseInt(majorize(osVersion), 10) >= 13 ? "11" : "10";
            this.set(NAME, osName).set(VERSION, osVersion);
          }
          if (this.get(NAME) == WINDOWS && uaCH2[MODEL] == "Xbox") {
            this.set(NAME, "Xbox").set(VERSION, void 0);
          }
          break;
        case UA_RESULT:
          var data = this.data;
          var parse = function(itemType2) {
            return data[itemType2].getItem().setCH(uaCH2).parseCH().get();
          };
          this.set(UA_BROWSER, parse(UA_BROWSER)).set(UA_CPU, parse(UA_CPU)).set(UA_DEVICE, parse(UA_DEVICE)).set(UA_ENGINE, parse(UA_ENGINE)).set(UA_OS, parse(UA_OS));
      }
      return this;
    };
    setProps.call(this, [
      ["itemType", itemType],
      ["ua", ua],
      ["uaCH", uaCH],
      ["rgxMap", rgxMap],
      ["data", createIData(this, itemType)]
    ]);
    return this;
  }
  function UAParser(ua, extensions, headers) {
    if (typeof ua === OBJ_TYPE) {
      if (isExtensions(ua, true)) {
        if (typeof extensions === OBJ_TYPE) {
          headers = extensions;
        }
        extensions = ua;
      } else {
        headers = ua;
        extensions = void 0;
      }
      ua = void 0;
    } else if (typeof ua === STR_TYPE && !isExtensions(extensions, true)) {
      headers = extensions;
      extensions = void 0;
    }
    if (headers && typeof headers.append === FUNC_TYPE) {
      var kv = {};
      headers.forEach(function(v, k) {
        kv[k] = v;
      });
      headers = kv;
    }
    if (!(this instanceof UAParser)) {
      return new UAParser(ua, extensions, headers).getResult();
    }
    var userAgent = typeof ua === STR_TYPE ? ua : (
      // Passed user-agent string
      headers && headers[USER_AGENT] ? headers[USER_AGENT] : (
        // User-Agent from passed headers
        NAVIGATOR && NAVIGATOR.userAgent ? NAVIGATOR.userAgent : (
          // navigator.userAgent
          EMPTY
        )
      )
    ), httpUACH = new UACHData(headers, true), regexMap = extensions ? extend(defaultRegexes, extensions) : defaultRegexes, createItemFunc = function(itemType) {
      if (itemType == UA_RESULT) {
        return function() {
          return new UAItem(itemType, userAgent, regexMap, httpUACH).set("ua", userAgent).set(UA_BROWSER, this.getBrowser()).set(UA_CPU, this.getCPU()).set(UA_DEVICE, this.getDevice()).set(UA_ENGINE, this.getEngine()).set(UA_OS, this.getOS()).get();
        };
      } else {
        return function() {
          return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH).parseUA().get();
        };
      }
    };
    setProps.call(this, [
      ["getBrowser", createItemFunc(UA_BROWSER)],
      ["getCPU", createItemFunc(UA_CPU)],
      ["getDevice", createItemFunc(UA_DEVICE)],
      ["getEngine", createItemFunc(UA_ENGINE)],
      ["getOS", createItemFunc(UA_OS)],
      ["getResult", createItemFunc(UA_RESULT)],
      ["getUA", function() {
        return userAgent;
      }],
      ["setUA", function(ua2) {
        if (isString(ua2))
          userAgent = ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
        return this;
      }]
    ]).setUA(userAgent);
    return this;
  }
  UAParser.VERSION = LIBVERSION;
  UAParser.BROWSER = enumerize([NAME, VERSION, MAJOR, TYPE]);
  UAParser.CPU = enumerize([ARCHITECTURE]);
  UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
  UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

  // src/platform.ts
  var PlatformDetector = class {
    constructor() {
      this.browserName = "";
      this.uaParser = new UAParser();
      this.browserName = this.uaParser.getBrowser().name ?? "";
    }
    isChrome() {
      return this.browserName.toLowerCase().endsWith("chrome");
    }
    isAndroid() {
      return this.uaParser.getOS().is("Android");
    }
    isIOS() {
      return this.uaParser.getOS().is("iOS");
    }
    isInStandaloneMode() {
      var _a;
      return window.matchMedia("(display-mode: standalone)").matches || ((_a = window.navigator) == null ? void 0 : _a.standalone) || document.referrer.includes("android-app://");
    }
  };

  // src/utils.ts
  function uuid() {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
    s[8] = s[13] = s[18] = s[23];
    const uuid2 = s.join("");
    return uuid2;
  }
  function urlB64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  function getUrlParam(key) {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  }
  function lockPortraitOrientation() {
    const s = screen;
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
    var _a, _b;
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el == null ? void 0 : el.webkitRequestFullscreen) {
      (_a = el == null ? void 0 : el.webkitRequestFullscreen) == null ? void 0 : _a.call(el);
    } else if (el == null ? void 0 : el.msRequestFullscreen) {
      (_b = el == null ? void 0 : el.msRequestFullscreen) == null ? void 0 : _b.call(el);
    }
    lockPortraitOrientation();
  }

  // src/core.ts
  var defaultOptions = {
    appId: "pwa-app",
    swPath: "/sw.js",
    pushOptions: {
      userVisibleOnly: true,
      applicationServerKey: ""
    },
    promptInstallWhenReady: true
  };
  var PWASDK = class {
    constructor(options) {
      this.options = options;
      this.listeners = /* @__PURE__ */ new Map();
      this.platformDetector = new PlatformDetector();
      this.deferredPrompt = null;
      this.pushSubscription = null;
      this.isUserInteraction = false;
      this.options = { ...defaultOptions, ...options };
    }
    get appId() {
      return this.options.appId;
    }
    init() {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
        this.setUnInstalled();
        this.trigger("install-available", true);
      });
      document.addEventListener("click", this.handleUserInteraction.bind(this));
      this.registerServiceWorker();
      const handleSubcrib = () => {
        setTimeout(() => {
          this.doSubscribe();
        }, 2e3);
      };
      this.on("install-prompt", handleSubcrib);
      this.on("install-cancel", handleSubcrib);
      this.on("notification-trigger", () => {
        this.popoverLaunch();
      });
      if (
        // 带有启动参数
        getUrlParam("launch_flag") && this.isInstalled() && this.isChrome() && !this.platformDetector.isInStandaloneMode()
      ) {
        this.launchFullScreen();
      }
    }
    on(event, callback) {
      this.listeners.set(event, [...this.listeners.get(event) || [], callback]);
    }
    off(event, callback) {
      var _a;
      this.listeners.set(event, ((_a = this.listeners.get(event)) == null ? void 0 : _a.filter((cb) => cb !== callback)) || []);
    }
    trigger(event, data) {
      var _a;
      (_a = this.listeners.get(event)) == null ? void 0 : _a.forEach((cb) => cb(data));
    }
    async request(url, data) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json()).catch((err) => {
        console.error(err);
      });
    }
    async doSubscribe() {
      if (this.isChrome()) {
        navigator.serviceWorker.ready.then(() => {
          return this.requestNotificationPermission();
        }).then(() => {
          const subscription = this.subscribeAndDistribute();
          this.trigger("notification-subscribed", subscription);
        }).catch((err) => {
          console.log(err);
          this.trigger("notification-error", err);
        }).finally(() => {
          this.trigger("notification-trigger", true);
        });
      }
    }
    fetchIsInstall() {
      return this.request("/event/install", {
        uuid: this.getUuid(),
        project_id: this.appId
      });
    }
    /**
     * 检查浏览器是否支持 Service Worker
     */
    isServiceWorkerSupported() {
      return "serviceWorker" in navigator;
    }
    registerServiceWorker() {
      if (this.isServiceWorkerSupported()) {
        navigator.serviceWorker.register(this.options.swPath).then((reg) => {
          console.log("Successfully registered service worker", reg);
        }).catch((err) => {
          console.warn("Error whilst registering service worker", err);
        });
      }
    }
    setUuid(v) {
      if (!v || v === void 0 || v === "undefined") {
        return;
      }
      const t = `${this.appId}_pwa_uuid`;
      localStorage.setItem(t, v);
    }
    getUuid() {
      const t = `${this.appId}_pwa_uuid`;
      let uid = localStorage.getItem(t);
      if (uid === null || uid === "") {
        uid = getUrlParam("pwaUuid");
        if (uid === null || uid === "") {
          uid = uuid();
        }
        this.setUuid(uid);
      }
      return uid;
    }
    setInstalled() {
      const t = `${this.appId}_pwa_install_flag`;
      localStorage.setItem(t, "true");
    }
    setUnInstalled() {
      const t = `${this.appId}_pwa_install_flag`;
      localStorage.setItem(t, "false");
    }
    isInstalled() {
      const t = `${this.appId}_pwa_install_flag`;
      const v = localStorage.getItem(t);
      return v && v !== "false" ? v : false;
    }
    popoverVideoLaunch() {
      var _a, _b;
      if (document.getElementById("app-launch-video-popover")) {
        return;
      }
      const template = `
      <div class="pwa-launch-popover" style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
        padding: 16px;
        font-family: sans-serif;
        z-index: 9999;
      ">
        <div class="pwa-launch-content" style="display: flex; align-items: center; gap: 12px;">
          <img class="pwa-launch-icon" src="/icon.png" style="width: 48px; height: 48px; border-radius: 8px;" />
        </div>
    
        <button class="pwa-launch-btn" style="
          width: 100%;
          margin-top: 16px;
          padding: 12px 0;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #007bff;
          border: none;
          border-radius: 8px;
        ">
          \u6253\u5F00 App, \u9AD8\u6E05\u89C2\u770B
        </button>
    
        <div class="pwa-launch-close" style="
          position: absolute;
          top: 8px;
          right: 12px;
          font-size: 20px;
          color: #999;
          cursor: pointer;
        ">&times;</div>
      </div>
    `;
      const popover = new DOMParser().parseFromString(template, "text/html").querySelector(".pwa-launch-popover");
      if (!popover)
        return;
      popover.id = "app-launch-video-popover";
      (_a = popover.querySelector(".pwa-launch-btn")) == null ? void 0 : _a.addEventListener("click", () => {
        if (this.isInstalled()) {
          const ul = new URL(location.href);
          ul.searchParams.set("launch_flag", "true");
          window.open(ul.toString(), "_blank");
        } else {
          this.launchFullScreen();
        }
      });
      (_b = popover.querySelector(".pwa-launch-close")) == null ? void 0 : _b.addEventListener("click", () => {
        this.closePopover(popover);
      });
      document.body.appendChild(popover);
    }
    popoverLaunch() {
      var _a, _b;
      if (document.getElementById("app-launch-popover")) {
        return;
      }
      const template = `
      <div class="pwa-launch-video-popover" style="
        position: fixed;
        background: #fff;
        top: 50%;
        left: 50%;
       transform: translate(-50%, -50%);
        box-shadow: 0 -2px 12px rgba(0,0,0,0.15);
        padding: 16px;
        font-family: sans-serif;
        z-index: 9999;
      ">
        <div class="pwa-launch-content" style="margin-top: 12px; display: flex; align-items: center; gap: 12px;">
          <img class="pwa-launch-icon" src="/icon.png" style="width: 64px; height: 64px; border-radius: 12px;" />
          <div class="pwa-launch-info">
            <div class="pwa-launch-title" style="font-weight: bold; font-size: 16px;">H5 Game</div>
            <div class="pwa-launch-desc" style="font-size: 12px; color: #999;">\u5361\u724C\u7B56\u7565 \xB7 4.5\u2605 \xB7 1.1M</div>
          </div>
        </div>
    
        <button class="pwa-launch-btn" style="
          width: 100%;
          margin-top: 16px;
          padding: 12px 0;
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          background: #007bff;
          border: none;
          border-radius: 8px;
        ">
          Continue in App
        </button>
    
        <div class="pwa-launch-close" style="
          position: absolute;
          top: 8px;
          right: 12px;
          font-size: 20px;
          color: #999;
          cursor: pointer;
        ">&times;</div>
      </div>
    `;
      const popover = new DOMParser().parseFromString(template, "text/html").querySelector(".pwa-launch-popover");
      if (!popover)
        return;
      popover.id = "app-launch-popover";
      (_a = popover.querySelector(".pwa-launch-btn")) == null ? void 0 : _a.addEventListener("click", () => {
        if (this.isInstalled()) {
          const ul = new URL(location.href);
          ul.searchParams.set("launch_flag", "true");
          window.open(ul.toString(), "_blank");
        } else {
          this.launchFullScreen();
        }
      });
      (_b = popover.querySelector(".pwa-launch-close")) == null ? void 0 : _b.addEventListener("click", () => {
        this.closePopover(popover);
      });
      document.body.appendChild(popover);
    }
    closePopover(popover) {
      popover.classList.add("leaving");
      setTimeout(() => {
        popover.remove();
      }, 300);
    }
    async requestNotificationPermission() {
      if (!window.Notification) {
        return Promise.reject("The system does not support desktop notifications");
      }
      return Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          return Promise.resolve();
        }
        return Promise.reject("User has disabled notification permissions");
      });
    }
    async handleUserInteraction() {
      this.isUserInteraction = true;
      if (this.isInstalled()) {
        document.removeEventListener("click", this.handleUserInteraction);
        return;
      }
      if (this.options.promptInstallWhenReady) {
        await this.promptInstallWaitForReady();
      }
    }
    async promptInstall() {
      if (this.deferredPrompt && this.isUserInteraction) {
        this.deferredPrompt.prompt();
        const choice = await this.deferredPrompt.userChoice;
        this.deferredPrompt = null;
        if (choice.outcome === "accepted") {
          this.trigger("install-prompt", choice);
          this.setInstalled();
        } else {
          this.trigger("install-cancel", choice);
        }
        return choice;
      }
      return null;
    }
    async promptInstallWaitForReady() {
      let count = 0;
      const maxCount = 10;
      do {
        await new Promise((resolve) => setTimeout(resolve, 300));
        if (this.deferredPrompt) {
          return this.promptInstall();
        }
        count++;
      } while (count < maxCount);
      throw new Error("Failed to prompt install");
    }
    // 将订阅信息传给后端服务器
    // 为了方便之后的推送，为每个客户端简单生成一个标识
    distributePushResource(subscription) {
      this.pushSubscription = subscription;
      ({
        subscriptionText: JSON.stringify(subscription),
        uuid: this.getUuid(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: (/* @__PURE__ */ new Date()).getTimezoneOffset() / 60
      });
    }
    /**
     * 订阅推送并将订阅结果发送给后端
     */
    async subscribeAndDistribute() {
      if (!window.PushManager) {
        return Promise.reject("The system does not support message push");
      }
      return navigator.serviceWorker.ready.then(async (registration) => {
        return registration.pushManager.getSubscription().then((subscription) => {
          var _a;
          if (subscription) {
            this.distributePushResource(subscription);
          } else {
            return (
              // 订阅
              registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array(((_a = this.options.pushOptions) == null ? void 0 : _a.applicationServerKey) ?? "")
              }).then((subscription2) => {
                this.distributePushResource(subscription2);
              })
            );
          }
        });
      });
    }
    // async subscribePushNotification() {
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
    async unsubscribePushNotification() {
      if (this.pushSubscription) {
        await this.pushSubscription.unsubscribe();
        this.pushSubscription = null;
        this.trigger("notification-unsubscribed", true);
        return true;
      }
      return false;
    }
    isChrome() {
      return this.platformDetector.isChrome();
    }
    toChrome(url = location.href) {
      const ul = new URL(url);
      const uid = getUrlParam("pwaUuid");
      if (uid == null || uid === "") {
        ul.searchParams.set("pwaUuid", this.getUuid());
        window.history.pushState("", "", ul);
      }
      ul.searchParams.set("browser_flag", "external");
      const ulS = ul.toString();
      const href = `intent://${ulS.replace(/(https|http):\/\//, "")}`;
      const u = `${href}#Intent;scheme=https;action=android.intent.action.VIEW;component=com.android.chrome;package=com.android.chrome;end`;
      const a = document.createElement("a");
      a.href = u;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    recordPwaInstallUser(name, ul) {
      const h = !ul ? location.href : `${location.href}####${ul}`;
      this.request("", {
        name,
        uuid: this.getUuid(),
        href: h,
        userAgent: navigator.userAgent
      }).then((res) => {
        if (res.code !== 200) {
          console.log(res);
        }
      }).catch(() => {
      });
    }
    launchFullScreen() {
      openFullscreen();
    }
  };

  // src/interface.ts
  var SDK_NAME = "RB_SDK";

  // src/index.ts
  (function(global, sdkName, options) {
    const sdk = new PWASDK(options);
    global[sdkName] = sdk;
  })(window, SDK_NAME, {
    swPath: "/sw.js",
    pushOptions: {
      userVisibleOnly: true,
      applicationServerKey: "BLbC9j6ilTHIktE0uqbuV_YcgutH1QJULiwgSkucioMnxmGhB6ZYoGsskwVFzPa1uuDbe48lIXD1gass1r8RV0I"
    },
    appId: "com.qlj.pwa-game-demo"
  });

})();
