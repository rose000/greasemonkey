"use strict";

const EXPORTED_SYMBOLS = ["GM_CONSTANTS"];

var {classes: Cc, interfaces: Ci, utils: Cu} = Components;


const GM_CONSTANTS = {
  "addonGUID": "{e4a8a97b-f2ed-450b-b12d-ee082ba24781}",
  "addonInstallPolicyClassDescription": "Greasemonkey Script Install Policy",
  "addonInstallPolicyClassID": Components.ID(
      "c03c575c-e87e-4a0f-b88d-8be090116a0c"),
  "addonInstallPolicyContractID":
      "@greasemonkey.mozdev.org/greasemonkey-install-policy;1",
  "addonScriptProtocolClassDescription":
      'Protocol handler for "greasemonkey-script:"',
  "addonScriptProtocolClassID": Components.ID(
      "20d898f3-2fb8-4b3a-b8c7-7ad6c2c48598"),
  "addonScriptProtocolContractID":
      "@mozilla.org/network/protocol;1?name=greasemonkey-script",
  "addonScriptProtocolScheme": "greasemonkey-script",
  "addonScriptProtocolSeparator": "/",
  "addonServiceClassDescription": "GM_GreasemonkeyService",
  "addonServiceClassID": Components.ID(
      "{77bf3650-1cd6-11da-8cd6-0800200c9a66}"),
  "addonServiceContractID": "@greasemonkey.mozdev.org/greasemonkey-service;1",
  "browserIDFirefox": "{ec8030f7-c20a-464f-9b0e-13a3a9e97384}",
  "browserIDPalemoon": "{8de7fcbb-c55c-4fbe-bfc5-fc555c87dbc4}",
  "directoryMask": parseInt("750", 8),
  "directoryScriptsName": "gm_scripts",
  "directoryService": Cc["@mozilla.org/file/directory_service;1"]
      .getService(Ci.nsIProperties),
  "directoryServiceScriptName": "ProfD",
  "directoryServiceTempName": "TmpD",
  "directoryTempName": "gm-temp",
  "fileMask": parseInt("640", 8),
  "fileProtocolHandler": Cc["@mozilla.org/network/protocol;1?name=file"]
      .getService(Ci.nsIFileProtocolHandler),
  "fileMetaExtension": ".meta.js",
  "fileScriptCharset": "UTF-8",
  "fileScriptContentTypeRegexp": "^text/(x|ht)ml",
  "fileScriptDBExtension": ".db",
  "fileScriptExtension": ".user.js",
  "fileScriptExtensionRegexp": "\\.user\\.js",
  "fileScriptName": "gm-script",
  "ioService": Cc["@mozilla.org/network/io-service;1"]
      .getService(Ci.nsIIOService),
  "jsSubScriptLoader": Cc["@mozilla.org/moz/jssubscript-loader;1"]
      .getService(Ci.mozIJSSubScriptLoader),
  "localeGmAddonsProperties":
      "chrome://greasemonkey/locale/gm-addons.properties",
  "localeGmBrowserProperties":
      "chrome://greasemonkey/locale/gm-browser.properties",
  "localeGreasemonkeyProperties":
      "chrome://greasemonkey/locale/greasemonkey.properties",
  "localeStringBundle": Cc["@mozilla.org/intl/stringbundle;1"]
      .getService(Ci.nsIStringBundleService),
  "scriptAddonType": "greasemonkey-user-script",
  "scriptIDSuffix": "@greasespot.net",
  "scriptParseBOM": "\u00EF\u00BB\u00BF",
  "scriptParseBOMArray": [0xEF, 0xBB, 0xBF],
  "scriptParseMetaRegexp": "// ==UserScript==([\\s\\S]*?)^// ==/UserScript==",
  "scriptType": "user-script",
  "scriptViewID": "addons://list/greasemonkey-user-script",
  "urlAboutAllRegexp": "^about:(blank|reader)",
  "urlAboutPart1": "about:blank",
  "urlAboutPart1Regexp": "^about:blank",
  "urlAboutPart2Regexp": "^about:reader",
  "urlStripUserPassRegexp": "(://)([^:/]+)(:[^@/]+)?@",
  "versionChecker": Cc["@mozilla.org/xpcom/version-comparator;1"]
      .getService(Ci.nsIVersionComparator),
  "xulAppInfo": Cc["@mozilla.org/xre/app-info;1"]
      .getService(Ci.nsIXULAppInfo),
  "xulRuntime": Cc["@mozilla.org/xre/app-info;1"]
      .getService(Ci.nsIXULRuntime),
};
