
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"206",
  
  "macros":[{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"GA CrossDomains",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",0],8,16],".hostname||\"\";if(!b||b==document.domain)return!1;for(var c=(",["escape",["macro",1],8,16],"||\"\").split(\",\"),a=0;a\u003Cc.length;a++)if(c[a]\u0026\u00260\u003C=b.indexOf(c[a]))return!1;return!0})();"]
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-social\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-link\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-viewport\")||void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__v",
      "vtp_name":"Content ID",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Content Type",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Author",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"All Chorus Categories",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Publish Date",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Entry Groups",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Community",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Network",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.querySelector('[type\\x3d\"application\/ld+json\"]');a=JSON.parse(a.innerHTML);return a=a.articleSection})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA Primary ID"
    },{
      "function":"__v",
      "vtp_name":"socialNetwork",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialTarget",
      "vtp_dataLayerVersion":2
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"embed\"===document.querySelector(\"body\").getAttribute(\"data-analytics-class\")})();"]
    },{
      "function":"__v",
      "convert_null_to":"true",
      "convert_undefined_to":"true",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"true",
      "vtp_name":"enable_url_cleaning"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){if(",["escape",["macro",28],8,16],"\u0026\u0026window.history.replaceState){(window.dataLayer||[]).push({unmodified_page_url:window.location.href});var a=window.location.search.replace(\/(_ga|utm_)[^\u0026]+\u0026?\/g,\"\").replace(\/\u0026$\/,\"\").replace(\/^\\?$\/,\"\");window.history.replaceState({},document.title,window.location.pathname+a+window.location.hash)}return null}})();"]
    },{
      "function":"__v",
      "vtp_name":"Hour of Publish",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Advertiser",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Campaign",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Pagination Tracking",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Program",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Topic",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Super Groups",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Additional Placements",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Demand Post",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Hour of Day",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Day of Week",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Hour of Update",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Logged in Status",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!0!==window.adblockJsFile;if(void 0!==navigator.doNotTrack)var a=navigator.doNotTrack;else void 0!==window.doNotTrack?a=window.doNotTrack:void 0!==navigator.msDoNotTrack\u0026\u0026(a=navigator.msDoNotTrack);a=void 0!==a?\/1|yes|true\/.test(String(a).toLowerCase())?\"true\":\"false\":\"undefined\";return\"adblock-\"+b+\":dnt-\"+a})();"]
    },{
      "function":"__v",
      "vtp_name":"Last Time Updated",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Breakpoint",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Page Layout Version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Hermano Records"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"iFrame Tracking"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Hidden Groups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Story Word Count"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ScrollSubscription"
    },{
      "function":"__c",
      "vtp_value":"no value set"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Paywall Logged In Status"
    },{
      "function":"__v",
      "vtp_name":"virtualPagePath",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Embed Host",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"virtualPageTitle",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-class\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[\"newsletter\"],a=",["escape",["macro",0],8,16],".className.split(\" \").filter(function(a){return b.includes(a)})[0];return a?a:",["escape",["macro",58],8,16],"||void 0})();"]
    },{
      "function":"__v",
      "vtp_name":"eventNonInt",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-campaign\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={newsletter:\"email\"}[",["escape",["macro",59],8,16],"];return a?a:",["escape",["macro",61],8,16],"||",["escape",["macro",14],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",0],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-placement\");if(b)return\":\"+b;a=a.parentNode}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";if(a=a.parentElement)return a.getAttribute(\"data-analytics-class\")||a.getAttribute(\"data-analytics-action\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",0],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-action\");if(b)return b;a=a.parentNode}return\"share\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",45],8,16],"||\"\";if(\"string\"===typeof a\u0026\u0026a.match(\/small\/)\u0026\u0026!a.match(\/medium\/))return!0;a=document.documentElement;return 600\u003E=(window.innerWidth||a\u0026\u0026a.clientWidth||document.body.clientWidth)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",66],8,16],"?\"mobile\":\"desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",0],8,16],";a\u0026\u0026a.getAttribute;){var b=a.getAttribute(\"data-analytics-placement\");if(b)return b;a=a.parentNode}return\"main\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=a.getAttribute(\"data-analytics-link\"),c=b.replace(\/([^:]+).*\/,\"$1\"),d=function(a){var b=a.querySelectorAll(\"h1,h2,h3,h4,h5,h6\");return b.length?(b=[].slice.call(b).sort(function(a,b){return a.tagName.localeCompare(b.tagName)}),b[0].innerText):a.innerText};if(b!==c){for(b='[data-analytics-link\\x3d\"'+c+'\"]';(a=a.parentNode)\u0026\u0026a.querySelector;)if(c=a.querySelector(b))return d(c);return ",["escape",["macro",0],8,16],".getAttribute(\"href\")}return d(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA Secondary ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics-label\")||",["escape",["macro",11],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"unison"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":true,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "convert_null_to":"false",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":"_chorus_ccpa_consent_donotsell"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"value\")})();"]
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video ID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Content Type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Producer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Video Publish Date"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Tags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Primary Brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Series"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Format"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"Sub-format"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;a=a.getTime();return a-=",["escape",["macro",90],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeat_domain"
    },{
      "function":"__c",
      "vtp_value":"2724"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"chartbeat_authors"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chartbeat_zone"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Array.isArray(window.chorusSDK)})();"]
    },{
      "function":"__v",
      "vtp_name":"errorType",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"placement",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.title.replace(\/\\s*-\\s+TODO-UnisonDomain\\.com$\/,\"\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",0],8,16],",a=b.querySelectorAll(\"h1,h2,h3,h4,h5,h6\");return a.length?(a=Array.prototype.slice.call(a),a.sort(function(a,b){return a.tagName.localeCompare(b.tagName)}),a[0].innerText):b.innerText})();"]
    },{
      "function":"__e"
    },{
      "function":"__f"
    },{
      "function":"__f",
      "vtp_component":"HOST",
      "vtp_stripWww":false
    },{
      "function":"__f",
      "vtp_component":"PATH"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lazyLoadedAdsEnabled"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"CLASSES",
      "vtp_defaultValue":"more"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":5,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",62],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",14],":",["macro",59],["macro",63]],
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "priority":5,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",14],":comment:",["macro",76]],
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]],["map","index","2","dimension",["macro",14]],["map","index","3","dimension",["macro",42]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",22],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_useDebugVersion":false,
      "vtp_enableLinkId":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_socialNetwork":["macro",23],
      "vtp_socialAction":["macro",24],
      "vtp_socialActionTarget":["macro",25],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":73
    },{
      "function":"__ua",
      "priority":3,
      "vtp_trackingId":["macro",22],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","27","dimension",["macro",33]],["map","index","2","dimension",["macro",14]],["map","index","33","dimension",["macro",56]]],
      "vtp_useDebugVersion":false,
      "vtp_autoLinkDomains":["macro",1],
      "vtp_enableLinkId":true,
      "vtp_decorateFormsAutoLink":true,
      "vtp_doubleClick":true,
      "vtp_advertisingFeaturesType":"DISPLAY_FEATURES",
      "vtp_useHashAutoLink":false,
      "vtp_enableEcommerce":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","page","value",["macro",55]],["map","fieldName","title","value",["macro",57]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":78
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",65],":",["macro",14],":",["macro",67],":",["macro",68]],
      "vtp_eventLabel":["template",["macro",65],":",["macro",6],":",["macro",14],":",["macro",67],":",["macro",68]],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template",["macro",67],":more"],
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"rss",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["template","click:rss:",["macro",4]],
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",14],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"feature:bottom:promotion",
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:vote",
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:return",
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","2","dimension",["macro",14]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":124
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"poll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:poll:view",
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":125
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",14],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"click:citybox",
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":148
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",77],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",78],
      "vtp_eventLabel":["macro",79],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",80],
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","27","dimension",["macro",33]],["map","index","33","dimension",["macro",56]],["map","index","20","dimension",["macro",16]],["map","index","4","dimension",["macro",15]],["map","index","5","dimension",["macro",17]],["map","index","10","dimension",["macro",18]],["map","index","11","dimension",["macro",19]],["map","index","12","dimension",["macro",20]],["map","index","16","dimension",["macro",34]],["map","index","17","dimension",["macro",35]],["map","index","41","dimension",["macro",81]],["map","index","42","dimension",["macro",82]],["map","index","43","dimension",["macro",83]],["map","index","44","dimension",["macro",84]],["map","index","45","dimension",["macro",85]],["map","index","46","dimension",["macro",86]],["map","index","47","dimension",["macro",87]],["map","index","48","dimension",["macro",88]],["map","index","49","dimension",["macro",89]],["map","index","53","dimension",["macro",50]],["map","index","24","dimension",["macro",80]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":149
    },{
      "function":"__ua",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",4],
      "vtp_enableLinkId":true,
      "vtp_timingCategory":"privacy",
      "vtp_timingVar":"Time to Click",
      "vtp_timingValue":["macro",91],
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":174
    },{
      "function":"__ua",
      "priority":2,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_eventCategory":["macro",14],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","link:",["macro",7],["macro",63]],
      "vtp_eventLabel":["macro",69],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "priority":2,
      "once_per_event":true,
      "vtp_nonInteraction":["macro",60],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_eventCategory":["macro",8],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","click:",["macro",7],["macro",63]],
      "vtp_eventLabel":["macro",69],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":92
    },{
      "function":"__ua",
      "priority":1,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","hitCallback","value",["macro",29]],["map","fieldName","campaignMedium","value","social"],["map","fieldName","campaignSource","value","facebook"],["map","fieldName","title","value",["macro",57]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",16]],["map","index","26","dimension",["macro",30]],["map","index","18","dimension",["macro",31]],["map","index","19","dimension",["macro",32]],["map","index","27","dimension",["macro",33]],["map","index","16","dimension",["macro",34]],["map","index","17","dimension",["macro",35]],["map","index","12","dimension",["macro",20]],["map","index","13","dimension",["macro",36]],["map","index","14","dimension",["macro",37]],["map","index","15","dimension",["macro",38]],["map","index","2","dimension",["macro",14]],["map","index","22","dimension",["macro",39]],["map","index","21","dimension",["macro",40]],["map","index","11","dimension",["macro",19]],["map","index","9","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",15]],["map","index","6","dimension",["macro",43]],["map","index","5","dimension",["macro",17]],["map","index","8","dimension",["macro",44]],["map","index","1","dimension",["macro",13]],["map","index","10","dimension",["macro",18]],["map","index","7","dimension",["macro",45]],["map","index","29","dimension",["macro",72]],["map","index","34","dimension",["macro",47]],["map","index","25","dimension",["macro",48]],["map","index","53","dimension",["macro",50]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":100
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",10],
      "vtp_eventLabel":["macro",11],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]],["map","index","5","dimension",["macro",17]],["map","index","10","dimension",["macro",18]],["map","index","11","dimension",["macro",19]],["map","index","12","dimension",["macro",20]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "tag_id":75
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"100",
      "tag_id":76
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","hitCallback","value",["macro",29]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",16]],["map","index","26","dimension",["macro",30]],["map","index","18","dimension",["macro",31]],["map","index","19","dimension",["macro",32]],["map","index","27","dimension",["macro",33]],["map","index","16","dimension",["macro",34]],["map","index","17","dimension",["macro",35]],["map","index","12","dimension",["macro",20]],["map","index","13","dimension",["macro",36]],["map","index","14","dimension",["macro",37]],["map","index","15","dimension",["macro",38]],["map","index","2","dimension",["macro",14]],["map","index","22","dimension",["macro",39]],["map","index","21","dimension",["macro",40]],["map","index","11","dimension",["macro",19]],["map","index","9","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",15]],["map","index","6","dimension",["macro",43]],["map","index","5","dimension",["macro",17]],["map","index","8","dimension",["macro",44]],["map","index","1","dimension",["macro",13]],["map","index","10","dimension",["macro",18]],["map","index","7","dimension",["macro",45]],["map","index","29","dimension",["macro",46]],["map","index","34","dimension",["macro",47]],["map","index","25","dimension",["macro",48]],["map","index","50","dimension",["macro",49]],["map","index","53","dimension",["macro",50]],["map","index","54","dimension",["macro",51]],["map","index","23","dimension",["macro",52]],["map","index","33","dimension",["macro",53]],["map","index","24","dimension",["macro",54]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",14],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",64],
      "vtp_eventLabel":["macro",10],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":["macro",1],
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",16]],["map","index","26","dimension",["macro",30]],["map","index","18","dimension",["macro",31]],["map","index","19","dimension",["macro",32]],["map","index","27","dimension",["macro",33]],["map","index","16","dimension",["macro",34]],["map","index","17","dimension",["macro",35]],["map","index","12","dimension",["macro",20]],["map","index","13","dimension",["macro",36]],["map","index","14","dimension",["macro",37]],["map","index","15","dimension",["macro",38]],["map","index","2","dimension",["macro",14]],["map","index","22","dimension",["macro",39]],["map","index","21","dimension",["macro",40]],["map","index","11","dimension",["macro",19]],["map","index","9","dimension",["macro",41]],["map","index","3","dimension",["macro",42]],["map","index","4","dimension",["macro",15]],["map","index","6","dimension",["macro",43]],["map","index","5","dimension",["macro",17]],["map","index","8","dimension",["macro",44]],["map","index","1","dimension",["macro",13]],["map","index","10","dimension",["macro",18]],["map","index","7","dimension",["macro",45]],["map","index","34","dimension",["macro",47]],["map","index","25","dimension",["macro",48]],["map","index","53","dimension",["macro",50]],["map","index","54","dimension",["macro",51]],["map","index","23","dimension",["macro",52]],["map","index","33","dimension",["macro",53]],["map","index","24","dimension",["macro",54]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",70],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":89
    },{
      "function":"__ua",
      "priority":0,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_eventCategory":["macro",61],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":true,
      "vtp_eventAction":["template","click:",["macro",61]],
      "vtp_eventLabel":["macro",71],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__twitter_website_tag",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nz4et",
      "tag_id":108
    },{
      "function":"__opt",
      "setup_tags":["list",["tag",22,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","hitCallback","value",["macro",29]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-M6PXKL3",
      "vtp_trackingId":"UA-189494-73",
      "tag_id":109
    },{
      "function":"__opt",
      "setup_tags":["list",["tag",22,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","hitCallback","value",["macro",29]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-54FC4VZ",
      "vtp_trackingId":"UA-26533115-1",
      "tag_id":110
    },{
      "function":"__gcs",
      "setup_tags":["list",["tag",22,0]],
      "once_per_load":true,
      "vtp_siteId":"pryr5r37zzkmeutts55nszygji",
      "tag_id":118
    },{
      "function":"__opt",
      "setup_tags":["list",["tag",22,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]],["map","fieldName","hitCallback","value",["macro",29]],["map","fieldName","useAmpClientId","value","true"]],
      "vtp_useDebugVersion":false,
      "vtp_optimizeContainerId":"GTM-NDNNL7Q",
      "vtp_trackingId":"UA-189494-74",
      "tag_id":137
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"commerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",9],
      "vtp_eventLabel":["macro",4],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","anonymizeIp","value","false"],["map","fieldName","cookieDomain","value",["macro",12]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",14]],["map","index","4","dimension",["macro",15]],["map","index","20","dimension",["macro",16]],["map","index","5","dimension",["macro",17]],["map","index","10","dimension",["macro",18]],["map","index","11","dimension",["macro",19]],["map","index","12","dimension",["macro",20]],["map","index","8","dimension",["macro",44]],["map","index","55","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":166
    },{
      "function":"__cvt_1434782_401",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_parselySiteId":["macro",92],
      "tag_id":402
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K3TK52L","nickname","Deseret zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"deseret",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","ecl"],["map","typeId","ctv"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"]],
      "tag_id":403
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TWPZVJD","nickname","Schema zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"vox|theverge|sbnation|eater|curbed|polygon",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","gaawc"],["map","typeId","awct"],["map","typeId","gaawe"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","html"]],
      "tag_id":404
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PKS6VGF","nickname","REVOLT zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"revolt\\.tv|revoltdev\\.chorus\\.build",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":405
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-M7SB6S3","nickname","Chicago Sun Times zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"chicago\\.suntimes\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"],["map","typeId","csm"],["map","typeId","cegg"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"]],
      "tag_id":406
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-KKV6CMW","nickname","DraftKings Nation zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"dknation\\.draftkings\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","ecl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":407
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TQN787N","nickname","This Old House zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"thisoldhouse\\.com|thisoldhousedev\\.chorus\\.build|thisoldhouse\\.chorus\\.build",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":408
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4DS4CG","nickname","Funny or Die zone"]],
      "vtp_boundaries":["list",["zb","_re",["macro",74],"funnyordie\\.com",false,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","awct"],["map","typeId","gcs"],["map","typeId","awcc"],["map","typeId","ac360"],["map","typeId","flc"],["map","typeId","sp"],["map","typeId","fls"],["map","typeId","ts"],["map","typeId","ua"],["map","typeId","gfct"],["map","typeId","adm"],["map","typeId","opt"],["map","typeId","gclidw"],["map","typeId","ga"],["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","crto"],["map","typeId","k50Init"],["map","typeId","sca"],["map","typeId","bzi"],["map","typeId","uspt"],["map","typeId","okt"],["map","typeId","yieldify"],["map","typeId","dstag"],["map","typeId","cts"],["map","typeId","mpm"],["map","typeId","baut"],["map","typeId","bsa"],["map","typeId","pijs"],["map","typeId","bb"],["map","typeId","omc"],["map","typeId","nudge"],["map","typeId","abtGeneric"],["map","typeId","ta"],["map","typeId","tc"],["map","typeId","sfc"],["map","typeId","svw"],["map","typeId","xpsh"],["map","typeId","sfl"],["map","typeId","infinity"],["map","typeId","asp"],["map","typeId","ll"],["map","typeId","messagemate"],["map","typeId","qca"],["map","typeId","uslt"],["map","typeId","twitter_website_tag"],["map","typeId","ndcr"],["map","typeId","mf"],["map","typeId","qcm"],["map","typeId","html"],["map","typeId","ela"],["map","typeId","vei"],["map","typeId","ms"],["map","typeId","scjs"],["map","typeId","ljs"],["map","typeId","hjtc"],["map","typeId","pntr"],["map","typeId","fxm"],["map","typeId","awc"],["map","typeId","cegg"],["map","typeId","pa"],["map","typeId","shareaholic"],["map","typeId","tdc"],["map","typeId","pc"],["map","typeId","awj"],["map","typeId","csm"],["map","typeId","m6d"],["map","typeId","scp"],["map","typeId","veip"],["map","typeId","mpr"],["map","typeId","qpx"],["map","typeId","placedPixel"],["map","typeId","vdc"],["map","typeId","sfr"],["map","typeId","img"],["map","typeId","tdlc"],["map","typeId","tpdpx"],["map","typeId","tdsc"]],
      "tag_id":409
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_127",
      "tag_id":410
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_130",
      "tag_id":411
    },{
      "function":"__cl",
      "tag_id":412
    },{
      "function":"__cl",
      "tag_id":413
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_327",
      "tag_id":414
    },{
      "function":"__cl",
      "tag_id":415
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1434782_381",
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"https:\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"594981607301768\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);window._fbq.push([\"track\",\"6026192431231\",{value:\"1.00\",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=594981607301768\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"analytics-chartbeat\" type=\"text\/gtmscript\"\u003Evar _sf_async_config={};_sf_async_config.uid=",["escape",["macro",93],8,16],";_sf_async_config.domain=",["escape",["macro",92],8,16],";_sf_async_config.useCanonical=!0;_sf_async_config.authors=",["escape",["macro",94],8,16],";_sf_async_config.zone=",["escape",["macro",95],8,16],";(function(){window._sf_endpt=(new Date).getTime();var a=document.createElement(\"script\");a.setAttribute(\"language\",\"javascript\");a.setAttribute(\"type\",\"text\/javascript\");a.setAttribute(\"src\",\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\");document.body.appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _comscore=_comscore||[];_comscore.push({c1:\"2\",c2:\"7976662\"});(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=!0;a.src=\"https:\/\/sb.scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"https:\/\/sb.scorecardresearch.com\/p?c1=2\u0026amp;c2=7976662\u0026amp;cv=2.0\u0026amp;cj=1\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/cdn0.vox-cdn.com\/packs\/chorus_sdk-789f86740edd88f79bfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var c=window[b]||[],d=window.Chorus_SDK||{},e=window[b]={push:function(a){\"function\"===typeof a\u0026\u0026a(d)}};c.forEach(function(a){e.push(a)})})(\"chorusSDK\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqi\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjql\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqm\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":114
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nzjqo\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":115
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-curbed\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-eater\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":130
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-vox\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-polygon\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-recode\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-sbNation\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-theRinger\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-theVerge\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":138
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.SambaTV=window.SambaTV||[];if(!a.track){if(a.invoked)return void(window.console\u0026\u0026window.console.error\u0026\u0026window.console.error(\"Samba Metrics snippet included twice.\"));a.invoked=!0;a.methods=\"track Impression Purchase Register Click Login Register\".split(\" \");a.factory=function(e){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(e),a.push(b),a}};for(var c=0;c\u003Ca.methods.length;c++){var d=a.methods[c];a[d]=a.factory(d)}a.load=function(a){var b=document.createElement(\"script\");\nb.type=\"text\/javascript\";b.async=!0;b.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"tag.mtrcs.samba.tv\/v3\/tag\/\"+a+\"\/sambaTag.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)};a.attrs||(a.attrs={});a.SNIPPET_VERSION=\"1.0.1\";a.load(\"vox\/vox-voxSubSection\")}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar scrEm=document.createElement(\"script\");scrEm.setAttribute(\"id\",\"funnel-relay-installer\");scrEm.setAttribute(\"data-customer-id\",\"vox_djkf95_polygon\");scrEm.setAttribute(\"data-property-id\",\"PROPERTY_ID\");scrEm.setAttribute(\"data-autorun\",\"true\");scrEm.setAttribute(\"async\",\"true\");scrEm.setAttribute(\"src\",\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/vox_djkf95_polygon.js\");document.head.appendChild(scrEm);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar scrEm=document.createElement(\"script\");scrEm.setAttribute(\"id\",\"funnel-relay-installer\");scrEm.setAttribute(\"data-customer-id\",\"vox_djkf95_ theverge\");scrEm.setAttribute(\"data-property-id\",\"PROPERTY_ID\");scrEm.setAttribute(\"data-autorun\",\"true\");scrEm.setAttribute(\"async\",\"true\");scrEm.setAttribute(\"src\",\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/vox_djkf95_theverge.js\");document.head.appendChild(scrEm);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar scrEm=document.createElement(\"script\");scrEm.setAttribute(\"id\",\"funnel-relay-installer\");scrEm.setAttribute(\"data-customer-id\",\"vox_djkf95_sb_nation\");scrEm.setAttribute(\"data-property-id\",\"PROPERTY_ID\");scrEm.setAttribute(\"data-autorun\",\"true\");scrEm.setAttribute(\"async\",\"true\");scrEm.setAttribute(\"src\",\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/vox_djkf95_sb_nation.js\");document.head.appendChild(scrEm);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar scrEm=document.createElement(\"script\");scrEm.setAttribute(\"id\",\"funnel-relay-installer\");scrEm.setAttribute(\"data-customer-id\",\"vox_djkf95_curbed\");scrEm.setAttribute(\"data-property-id\",\"PROPERTY_ID\");scrEm.setAttribute(\"data-autorun\",\"true\");scrEm.setAttribute(\"async\",\"true\");scrEm.setAttribute(\"src\",\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/vox_djkf95_curbed.js\");document.head.appendChild(scrEm);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar scrEm=document.createElement(\"script\");scrEm.setAttribute(\"id\",\"funnel-relay-installer\");scrEm.setAttribute(\"data-customer-id\",\"vox_djkf95_eater\");scrEm.setAttribute(\"data-property-id\",\"PROPERTY_ID\");scrEm.setAttribute(\"data-autorun\",\"true\");scrEm.setAttribute(\"async\",\"true\");scrEm.setAttribute(\"src\",\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/vox_djkf95_eater.js\");document.head.appendChild(scrEm);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar scrEm=document.createElement(\"script\");scrEm.setAttribute(\"id\",\"funnel-relay-installer\");scrEm.setAttribute(\"data-customer-id\",\"vox_djkf95_vox\");scrEm.setAttribute(\"data-property-id\",\"PROPERTY_ID\");scrEm.setAttribute(\"data-autorun\",\"true\");scrEm.setAttribute(\"async\",\"true\");scrEm.setAttribute(\"src\",\"\/\/cdn-magiclinks.trackonomics.net\/client\/static\/v2\/vox_djkf95_vox.js\");document.head.appendChild(scrEm);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.linkClick"
    },{
      "function":"_cn",
      "arg0":["macro",4],
      "arg1":"Terms of Use"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_381($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"go\\.redirect|amzn|www\\.amazon\\.co|linksynergy|anrdoezrs|fave\\.co|humble\\.com|rover\\.com|sbnation\\.fanatics\\.com|breakingt\\.com|espn\\.zibu\\.net|bestbuy|fanatics|goto\\.walmart\\.com|fubo\\.tv|uncommongoods|walmart\\.com\/ip\/|tidd\\.ly|awin1\\.com|google\\.com\/shopping\/product|disneyplus\\.bn5x|go\\.web\\.plus\\.espn\\.com|adidas\\.njih\\.net\/rxA3Q",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_327($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"social"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"apps.voxmedia.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"trackingPixel"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"virtualPageView"
    },{
      "function":"_eq",
      "arg0":["macro",59],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"link:related"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",61],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",56],
      "arg1":"facebook"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"social-buttons__more"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"c-entry-update-bar__follow|rss"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"(^$|((^|,)1434782_130($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"recode|eater|verge|polygon"
    },{
      "function":"_eq",
      "arg0":["macro",75],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"sports-bar-chain-to-pay-6-8m-over-tip-skimming-and-wage-violations"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"theverge"
    },{
      "function":"_re",
      "arg0":["macro",76],
      "arg1":"Post|Preview"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"la.curbed.com\/maps\/things-to-do-kids-los-angeles"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"recirc-module__link"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"css-vote-button"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"pds-return-poll"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"css-view-results"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"curbed"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"city-boxes|city-title",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",78],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"expand:"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"GAEvent"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"privacy-consent__button"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"vox\\.com|theverge\\.com|eater\\.com|polygon\\.com|sbnation\\.com|curbed\\.com"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"theverge|vox|polygon|curbed|eater|sbnation"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"embedPageView"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"chicago\\.suntimes\\.com"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"deseret",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"thisoldhouse",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"apps.voxmedia.com"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"suntimes.chorus.build"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/ad\/"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"chicago\\.suntimes\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"revolt\\.tv",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"revolt\\.tv"
    },{
      "function":"_eq",
      "arg0":["macro",96],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"eater"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"polygon"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"verge"
    },{
      "function":"_cn",
      "arg0":["macro",74],
      "arg1":"recode"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"homepage"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"eater"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"vox"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"www.vox.com\/$|vox--com.sbn.sb8.k8s.sbndev.net\/|vox--com.sbn.sb8.k8s.sbndev.net\/culture\/2019\/1\/6\/18171367\/golden-globes-2019-regina-king-acceptance-speech|www.vox.com\/2014\/12\/31\/7474935\/best-movies-2014",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"polygon"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"recode"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"sbnation"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"theringer"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"www.vox.com\/culture",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"polygon\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"homepage|hub-page|hubpage|other",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"theverge\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",20],
      "arg1":"sbnation"
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"curbed\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"eater\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",74],
      "arg1":"vox\\.com",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",17]],
    [["if",1,2,3],["add",17]],
    [["if",12],["unless",9,10,11],["add",2]],
    [["if",13],["add",18,19,31,32,33,34,35,36,37,38,39,40,41,43,44]],
    [["if",13,14],["unless",15,16],["add",20,22,45,47]],
    [["if",19],["unless",18],["add",3,47]],
    [["if",21],["unless",20],["add",0]],
    [["if",1,22],["add",21]],
    [["if",1],["unless",4],["add",4],["block",17]],
    [["if",1],["unless",5],["add",14],["block",17]],
    [["if",1],["unless",5,6],["add",15],["block",17,14]],
    [["if",1],["unless",24],["add",23]],
    [["if",13,14,25],["unless",15],["add",16],["block",47]],
    [["if",1,27],["add",5]],
    [["if",1,28,29],["add",6]],
    [["if",13],["unless",15,30],["add",24]],
    [["if",13,32],["add",25]],
    [["if",13,33],["add",26]],
    [["if",34,35],["add",1]],
    [["if",13,36],["add",27]],
    [["if",1,37],["add",7]],
    [["if",1,38],["add",8]],
    [["if",1,39],["add",9]],
    [["if",1,40],["add",10]],
    [["if",13,41],["add",28]],
    [["if",35,42],["add",11]],
    [["if",46],["unless",43,44,45],["add",12]],
    [["if",47],["add",12]],
    [["if",1,7,8],["add",29],["block",17]],
    [["if",35,48],["add",13]],
    [["if",13,49],["add",30]],
    [["if",13,50],["add",42]],
    [["if",51],["add",45]],
    [["if",57],["unless",15,55,56],["add",46]],
    [["if",57,62],["add",48]],
    [["if",13,63],["unless",15],["add",49]],
    [["if",13,64],["unless",15],["add",50]],
    [["if",13,65],["unless",15],["add",51]],
    [["if",13,66],["unless",15],["add",52]],
    [["if",13,41,67],["add",53]],
    [["if",13,67,68],["add",54]],
    [["if",13,69,70],["add",55]],
    [["if",13,67,71],["add",56]],
    [["if",13,67,72],["add",57]],
    [["if",13,67,73],["add",58]],
    [["if",13,67,74],["add",59]],
    [["if",13,33,67],["add",60]],
    [["if",13,69,75],["add",61]],
    [["if",76,77],["add",62]],
    [["if",77,79],["add",63]],
    [["if",77,80],["add",64]],
    [["if",77,81],["add",65]],
    [["if",77,82],["add",66]],
    [["if",77,83],["add",67]],
    [["if",13,17],["block",20,22,46]],
    [["if",13,23],["block",22]],
    [["if",13,26],["block",16,45]],
    [["if",13],["unless",31],["block",24,45,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67]],
    [["if",13,52],["block",45]],
    [["if",13,53],["block",45,47]],
    [["if",13,54],["block",45,47]],
    [["if",57,58],["block",46]],
    [["if",57,59],["block",46]],
    [["if",53,57],["block",46]],
    [["if",57,60],["block",46]],
    [["if",54,57],["block",46]],
    [["if",13,61],["block",47]],
    [["if",77,78],["block",62,63,64,65,66,67]]]
},
"runtime":[[50,"__cvt_1434782_401",[46,"a"],[52,"b",["require","logToConsole"]],[52,"c",["require","queryPermission"]],[52,"d",["require","injectScript"]],[52,"e",["require","encodeUriComponent"]],["b","data \u003d",[15,"a"]],[52,"f",["e",[17,[15,"a"],"parselySiteId"]]],[52,"g",[0,[0,"https://cdn.parsely.com/keys/",[15,"f"]],"/p.js"]],[52,"h",[51,"",[7],["b","Parse.ly tracker loaded for",[15,"f"]],[2,[15,"a"],"gtmOnSuccess",[7]]]],[52,"i",[51,"",[7],["b","Unable to load Parse.ly tracker"],[2,[15,"a"],"gtmOnFailure",[7]]]],[22,["c","inject_script",[15,"g"]],[46,["d",[15,"g"],[15,"h"],[15,"i"],"parsely"]],[46,[2,[15,"a"],"gtmOnFailure",[7]]]]],[50,"__twitter_website_tag",[46,"a"],[50,"i",[46],[41,"l"],[3,"l",["d","twq"]],[22,[15,"l"],[46,[36,[15,"l"]]]],["h","twq",[51,"",[7],[52,"n",["d","twq.exe.apply"]],[22,[15,"n"],[46,["c","twq.exe.apply",[45],[15,"arguments"]]],[46,["c","twq.queue.push",[15,"arguments"]]]]],true],["h","twq.version","1",true],["h","twq.queue",[7],true],[52,"m",[51,"",[7]]],["e","https://static.ads-twitter.com/uwt.js",[15,"m"],[15,"m"],"twitter_website_tag"],[36,["d","twq"]]],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","injectScript"]],[52,"f",["require","makeString"]],[52,"g",["require","makeTableMap"]],[52,"h",["require","setInWindow"]],[41,"j"],[3,"j",["i"]],["j","init",["f",[17,[15,"a"],"twitter_pixel_id"]]],[52,"k",["g",[30,[17,[15,"a"],"event_parameters"],[7]],"param_table_key_column","param_table_value_column"]],[22,[1,[15,"k"],[2,[15,"k"],"hasOwnProperty",[7,"content_ids"]]],[46,[53,[41,"l"],[3,"l",[16,[15,"k"],"content_ids"]],[3,"l",[2,[2,[15,"l"],"split",[7,"\""]],"join",[7,"\u0027"]]],[41,"m"],[3,"m",[2,[2,[15,"l"],"slice",[7,[2,[15,"l"],"indexOf",[7,"["]],[2,[15,"l"],"indexOf",[7,"]"]]]],"split",[7,","]]],[3,"m",[2,[15,"m"],"map",[7,[51,"",[7,"n"],[36,[30,[16,[2,[15,"n"],"split",[7,"\u0027"]],1],""]]]]]],[43,[15,"k"],"content_ids",[15,"m"]]]]],["j","track",["f",[17,[15,"a"],"event_type"]],[15,"k"]],[2,[15,"a"],"gtmOnSuccess",[7]]]]
,"permissions":{"__cvt_1434782_401":{"inject_script":{"urls":["https:\/\/cdn.parsely.com\/keys\/*\/p.js"]},"logging":{"environments":"debug"}},"__twitter_website_tag":{"access_globals":{"keys":[{"key":"twq","read":true,"write":true,"execute":true},{"key":"twq.exe","read":true,"write":true,"execute":true},{"key":"twq.queue","read":true,"write":true,"execute":true},{"key":"twq.queue.push","read":true,"write":true,"execute":true},{"key":"twq.version","read":true,"write":true,"execute":false},{"key":"twq.exe.apply","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/static.ads-twitter.com\/uwt.js"]}}}
,"sandboxed_scripts":["__cvt_1434782_401"]
,"security_groups":{
"nonGoogleScripts":["__twitter_website_tag"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Gf:!0},ja={};try{ja.__proto__=fa;ea=ja.Gf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.m={};this.i=!1;this.o={}};ra.prototype.get=function(a){return this.m["dust."+a]};ra.prototype.set=function(a,b){this.i||(a="dust."+a,this.o.hasOwnProperty(a)||(this.m[a]=b))};ra.prototype.has=function(a){return this.m.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.m)a.m.hasOwnProperty(c)&&b.push(c.substr(5));return b};var g=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=g.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof g?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.Vb=function(){for(var a=sa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new g(a)};
var ta=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.i||c.o.hasOwnProperty(d)||delete c.m[d]}};ba=g.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new g(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var ua=function(){function a(f,h){if(b[f]){if(b[f].Lb+h>b[f].max)throw Error("Quota exceeded");b[f].Lb+=h}}var b={},c=void 0,d=void 0,e={$g:function(f){c=f},pe:function(){c&&a(c,1)},bh:function(f){d=f},za:function(f){d&&a(d,f)},Bh:function(f,h){b[f]=b[f]||{Lb:0};b[f].max=h},yg:function(f){return b[f]&&b[f].Lb||0},reset:function(){b={}},eg:a};e.onFnConsume=e.$g;e.consumeFn=e.pe;e.onStorageConsume=e.bh;e.consumeStorage=e.za;e.setMax=e.Bh;e.getConsumed=e.yg;e.reset=e.reset;e.consume=e.eg;return e};var wa=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};wa.prototype.add=function(a,b){xa(this,a,b,!1)};var xa=function(a,b,c,d){if(!a.i.i)if(a.F.za(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.o["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.i||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.za(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ba=function(a){var b=new wa(a.F,a);a.o&&(b.o=a.o);b.S=a.S;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},r=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Fa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ga=function(a,b){if(a&&Fa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ha=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ja=function(a,b){for(var c=new Ia,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},La=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ma=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Na=function(a){return Math.round(Number(a))||0},Oa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Pa=function(a){var b=[];if(Fa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Ia=function(){this.prefix="gtm.";this.values={}};Ia.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ia.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ua=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Va=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Wa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Xa=function(a){for(var b=D,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},Ya=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=function(a){var b=[];La(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var $a=function(a,b){ra.call(this);this.F=a;this.S=b};oa($a,ra);var bb=function(a,b){for(var c,d=0;d<b.length&&!(c=ab(a,b[d]),c instanceof pa);d++);return c},ab=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof $a))throw Error("Attempting to execute non-function "+b[0]+".");return c.a.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};$a.prototype.toString=function(){return this.F};$a.prototype.getName=function(){return this.F};
$a.prototype.Vb=function(){return new g(sa(this))};$a.prototype.a=function(a,b){a.F.pe();return this.S.apply(cb(this,a),Array.prototype.slice.call(arguments,1))};var cb=function(a,b){var c=function(d,e){this.F=d;this.i=e};c.prototype.a=function(d){var e=this.i;return Fa(d)?ab(e,d):d};c.prototype.o=function(d){return bb(this.i,d)};c.prototype.getName=function(){return this.F.getName()};c.prototype.m=function(){return b.F};return new c(a,b)};
$a.prototype.Ba=function(a,b){try{return this.a.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var db=function(){ra.call(this)};oa(db,ra);db.prototype.Vb=function(){return new g(sa(this))};var eb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,fb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=eb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],h="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(h)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof $a?n="Fn":l instanceof g?n="List":l instanceof db&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(fb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var gb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,hb=function(a){if(null==a)return String(a);var b=gb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ib=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},jb=function(a){if(!a||"object"!=hb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ib(a,"constructor")&&!ib(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ib(a,b)},G=function(a,b){var c=b||("array"==hb(a)?[]:{}),d;for(d in a)if(ib(a,d)){var e=a[d];"array"==hb(e)?("array"!=hb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):jb(e)?(jb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var ob=function(a,b){var c=[],d=[],e=function(h,k){for(var l=sa(h),m=0;m<l.length;m++)k[l[m]]=f(h.get(l[m]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(h instanceof g){var l=[];c.push(h);d.push(l);for(var m=h.Vb(),n=0;n<m.length();n++)l[m.get(n)]=f(h.get(m.get(n)));return l}if(h instanceof db){var q={};c.push(h);d.push(q);e(h,q);return q}if(h instanceof $a){var t=function(){for(var p=Array.prototype.slice.call(arguments,0),u=0;u<p.length;u++)p[u]=kb(p[u],b);var v=b?b.F:ua(),w=new wa(v);b&&
(w.a=b.a);return f(h.a.apply(h,[w].concat(p)))};c.push(h);d.push(t);e(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return f(a)},kb=function(a,b){var c=[],d=[],e=function(h,k){for(var l in h)h.hasOwnProperty(l)&&k.set(l,f(h[l]))},f=function(h){var k=C(c,h);if(-1<k)return d[k];if(Fa(h)||Ma(h)){var l=new g([]);c.push(h);d.push(l);for(var m in h)h.hasOwnProperty(m)&&l.set(m,f(h[m]));return l}if(jb(h)){var n=
new db;c.push(h);d.push(n);e(h,n);return n}if("function"===typeof h){var q=new $a("",function(p){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=ob(this.a(u[v]),b);return f((0,this.i.S)(h,h,u))});c.push(h);d.push(q);e(h,q);return q}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h};return f(a)};var pb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.i,e=this.a(b);if(!(e instanceof g))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.m().za(a.length+f.length);return new $a(a,function(){return function(h){var k=Ba(d);void 0===k.a&&(k.a=this.i.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?k.set(e.get(q),l[q]):k.set(e.get(q),void 0);k.set("arguments",new g(l));var t=bb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.m();b.za(arguments.length);for(var c=new g,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.za(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.m(),c=new db,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),h=e.length;h+="string"===
typeof f?f.length:1;b.za(h);c.set(e,f)}return c},undefined:function(){}};function qb(a,b){var c=ab(a,b);if(c instanceof pa||c instanceof $a||c instanceof g||c instanceof db||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var rb=function(){this.m=ua();this.a=new wa(this.m)},sb=function(a,b,c){var d=new $a(b,c);d.i=!0;a.a.set(b,d)};rb.prototype.Sb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.a,arguments[c]);return b};
rb.prototype.o=function(a,b){var c=Ba(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=qb(c,arguments[e]);return d};var tb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var ub={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof g)for(var f=arguments[e],h=0;h<f.length();h++)c.push(f.get(h));else c.push(arguments[e]);return new g(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.a(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.a(a,this.get(e),e,this)&&d.push(this.get(e));return new g(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.a(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.a(a,this.get(e),e,this));return new g(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var h=1;h<=d;h++)if(this.has(d-h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.a(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=tb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ta(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new g(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.a(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=tb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.a(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ta(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var vb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),wb=new pa("break"),yb=new pa("continue"),zb=function(a,b){return this.a(a)+this.a(b)},Ab=function(a,b){return this.a(a)&&this.a(b)},Bb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof g))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(vb,b))return kb(a[b].apply(a,tb(c)),this.i);throw Error("TypeError: "+b+" is not a function");}if(a instanceof g){if(a.has(b)){var d=a.get(b);if(d instanceof $a){var e=tb(c);e.unshift(this.i);return d.a.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(ub.supportedMethods,b)){var f=tb(c);f.unshift(this.i);
return ub[b].apply(a,f)}}if(a instanceof $a||a instanceof db){if(a.has(b)){var h=a.get(b);if(h instanceof $a){var k=tb(c);k.unshift(this.i);return h.a.apply(h,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof $a?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,tb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Cb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.i;
if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Db=function(a){var b=Ba(this.i),c=bb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Eb=function(){return wb},Fb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Gb=function(a){for(var b=this.i,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);xa(b,d,e,!0)}}},Hb=function(){return yb},
Ib=function(a,b,c){var d=new g;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.i.set(a,this.a(f))},Jb=function(a,b){return this.a(a)/this.a(b)},Kb=function(a,b){return this.a(a)==this.a(b)},Mb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Nb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=bb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof db||b instanceof g||b instanceof $a)for(var h=b.Vb(),k=h.length(),l=0;l<k;l++){var m=a(h.get(l)),n=bb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Ob=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){d.set(a,e);return d},b,c)},Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ba(d);xa(f,a,e,!0);return f},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.i;return Nb(function(e){var f=Ba(d);f.add(a,e);return f},b,c)},Rb=function(a){return this.i.get(this.a(a))},Sb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof db||a instanceof g||a instanceof $a?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Tb=function(a,b){return this.a(a)>this.a(b)},Ub=function(a,b){return this.a(a)>=this.a(b)},Vb=function(a,b){return this.a(a)===this.a(b)},Xb=function(a,b){return this.a(a)!==this.a(b)},Yb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.o(d);if(e instanceof pa)return e},Zb=function(a,b){return this.a(a)<this.a(b)},$b=function(a,b){return this.a(a)<=
this.a(b)},ac=function(a,b){return this.a(a)%this.a(b)},bc=function(a,b){return this.a(a)*this.a(b)},cc=function(a){return-this.a(a)},dc=function(a){return!this.a(a)},ec=function(a,b){return this.a(a)!=this.a(b)},fc=function(){return null},gc=function(a,b){return this.a(a)||this.a(b)},hc=function(a,b){var c=this.a(a);this.a(b);return c},ic=function(a){return this.a(a)},jc=function(a){return Array.prototype.slice.apply(arguments)},kc=function(a){return new pa("return",this.a(a))},lc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof $a||a instanceof g||a instanceof db)&&a.set(b,c);return c},mc=function(a,b){return this.a(a)-this.a(b)},nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Fa(d)||!Fa(e))throw Error("Error: Malformed switch instruction.");for(var f,h=!1,k=0;k<d.length;k++)if(h||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else h=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},pc=function(a){a=this.a(a);return a instanceof $a?"function":typeof a},qc=function(a){for(var b=this.i,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},rc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.o(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.o(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},sc=function(a){return~Number(this.a(a))},tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))&Number(this.a(b))},xc=function(a,b){return Number(this.a(a))^Number(this.a(b))},yc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Ac=function(){this.a=new rb;zc(this)};Ac.prototype.Sb=function(a){return this.a.i(a)};
var Cc=function(a,b){return Bc.a.o(a,b)},zc=function(a){function b(e,f){var h=d.a,k=String(f);pb.hasOwnProperty(e)&&sb(h,k||e,pb[e])}function c(e,f){sb(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,zb);c(1,Ab);c(2,Bb);c(3,Cb);c(53,Db);c(4,Eb);c(5,Fb);c(52,Gb);c(6,Hb);c(9,Fb);c(50,Ib);c(10,Jb);c(12,Kb);c(13,Mb);c(47,Ob);c(54,Pb);c(55,Qb);c(15,Rb);c(16,Sb);c(17,Sb);c(18,Tb);c(19,Ub);c(20,Vb);c(21,Xb);c(22,Yb);c(23,Zb);c(24,$b);c(25,ac);c(26,bc);c(27,
cc);c(28,dc);c(29,ec);c(45,fc);c(30,gc);c(32,hc);c(33,hc);c(34,ic);c(35,ic);c(46,jc);c(36,kc);c(43,lc);c(37,mc);c(38,nc);c(39,oc);c(40,pc);c(41,qc);c(42,rc);c(58,sc);c(57,tc);c(60,uc);c(61,vc);c(56,wc);c(62,xc);c(59,yc)},Ec=function(){var a=Bc,b=Dc();sb(a.a,"require",b)},Fc=function(a,b){a.a.a.S=b};
var Gc=[],Hc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ic=function(a){return Hc[a]},Jc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Nc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};
Gc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Nc,Qc)+"'"}};var Yc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Zc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},$c=function(a){return Zc[a]};Gc[16]=function(a){return a};var bd;
var cd=[],dd=[],ed=[],fd=[],gd=[],hd={},id,jd,kd,ld=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},md=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=hd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):bd(c,e,b)},od=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=nd(a[e],b,c));
return d},pd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=hd[b];return c?c.priorityOverride||0:0},nd=function(a,b,c){if(Fa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(nd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=cd[f];if(!h||b.Wc(h))return;c[f]=!0;try{var k=od(h,b,c);k.vtp_gtmEventId=b.id;d=md(k,b);kd&&(d=kd.gg(d,k))}catch(y){b.Ge&&b.Ge(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[nd(a[l],b,c)]=nd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=nd(a[n],b,c);jd&&(m=m||q===jd.Cb);d.push(q)}return jd&&m?jd.jg(d):d.join("");case "escape":d=nd(a[1],b,c);if(jd&&Fa(a[1])&&"macro"===a[1][0]&&jd.Lg(a))return jd.ih(d);d=String(d);for(var t=2;t<a.length;t++)Gc[a[t]]&&(d=Gc[a[t]](d));return d;case "tag":var p=a[1];if(!fd[p])throw Error("Unable to resolve tag reference "+p+".");return d={ve:a[2],
index:p};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=qd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},qd=function(a,b,c){try{return id(od(a,b,c))}catch(d){JSON.stringify(a)}return 2};var rd=function(){var a=function(b){return{toString:function(){return b}}};return{Bd:a("convert_case_to"),Cd:a("convert_false_to"),Dd:a("convert_null_to"),Ed:a("convert_true_to"),Fd:a("convert_undefined_to"),Vh:a("debug_mode_metadata"),xa:a("function"),ef:a("instance_name"),kf:a("live_only"),nf:a("malware_disabled"),pf:a("metadata"),Wh:a("original_vendor_template_id"),tf:a("once_per_event"),Od:a("once_per_load"),Wd:a("setup_tags"),Yd:a("tag_id"),Zd:a("teardown_tags")}}();var sd=function(a,b,c){this.i=a;this.a=c};oa(sd,Error);function td(a,b){if(Fa(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)td(a[c],b[c])}};var ud=function(a,b){this.m=a;this.i=b;this.a=[]};oa(ud,Error);var vd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var xd=function(){return function(a,b){a instanceof ud||(a=new ud(a,wd));b&&a.a.push(b);throw a;}};function wd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var yd=null,Bd=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];yd=zd(a);for(var e=0;e<dd.length;e++){var f=dd[e],h=Ad(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<fd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Ad=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=yd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=yd(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},zd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=qd(ed[c],a));return b[c]}};var Cd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,h="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),h+="."}catch(k){h="string"===typeof k?h+(": "+k):k instanceof Error?h+(": "+k.message):h+"."}if(!f)throw new sd(c,d,h);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var h=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,h);Ed(f,b,d,h)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Cd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});La(a,function(f,h){var k={};La(h,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.J)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=ld(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return md(c)}catch(d){return{assert:function(e){throw new sd(e,{},"Permission "+e+" is unknown.");},J:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new sd(a,b,c)};var Md=!1;var Nd={};Nd.Kh=Oa('');Nd.qg=Oa('');var Od=Md,Pd=Nd.qg,Qd=Nd.Kh;
var de=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ee=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;de(b,"/*")&&(b=b.slice(0,-2));de(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var h=d[f];if(h){e=a.indexOf(h,e);if(-1===e||0===f&&0!==e)return!1;e+=h.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},fe=/^[a-z0-9-]+$/i,ge=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
he=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!fe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var h=0;h<b.length;h++){var k;var l=a,m=b[h];if(!ge.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var p=l.hostname,u=q;if(0!==u.indexOf("*."))t=p.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=p.toLowerCase().indexOf(u.toLowerCase());
t=-1===v?!1:p.length===u.length?!0:p.length!==u.length+v?!1:"."===p[v-1]}if(t){var w=n.slice(n.indexOf("/"));k=ee(l.pathname+l.search,w)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
function ke(a){return""+a}
function le(a,b){var c=[];return c};var me=function(a,b){var c=new $a(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.i=!0;return c},ne=function(a,b){var c=new db,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,me(a+"_"+d,e)):(Ea(e)||r(e)||"boolean"==typeof e)&&c.set(d,e)}c.i=!0;return c};var oe=function(a,b){F(this.getName(),["apiName:!string","message:?string"],arguments);var c={},d=new db;return d=ne("AssertApiSubject",c)};var pe=function(a,b){F(this.getName(),["actual:?*","message:?string"],arguments);var c={},d=new db;return d=ne("AssertThatSubject",c)};function qe(a){return function(){for(var b=[],c=this.i,d=0;d<arguments.length;++d)b.push(ob(arguments[d],c));return kb(a.apply(null,b))}}var se=function(){for(var a=Math,b=re,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=qe(a[e].bind(a)))}return c};var te=function(a){var b;return b};var ue=function(a){var b;return b};var ve=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURI(a)};var we=function(a){F(this.getName(),["uri:!string"],arguments);return encodeURIComponent(a)};var xe=function(a){F(this.getName(),["message:?string"],arguments);};var ye=function(a,b){F(this.getName(),["min:!number","max:!number"],arguments);return Ha(a,b)};var ze=function(){return(new Date).getTime()};var Ae=function(a,b,c){var d=a.i.a;if(!d)throw Error("Missing program state.");d.Tf.apply(null,Array.prototype.slice.call(arguments,1))};var Be=function(){Ae(this,"read_container_data");var a=new db;a.set("containerId",'GTM-W8JKW6');a.set("version",'206');a.set("environmentName",'');a.set("debugMode",Od);a.set("previewMode",Qd);a.set("environmentMode",Pd);a.i=!0;return a};var Ce=function(a){return null===a?"null":a instanceof g?"array":a instanceof $a?"function":typeof a};var De=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Od||Qd)&&a.call(this,e.message)}}}return{parse:b(function(c){return kb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(ob(c))})}};var Ee=function(a){return Na(ob(a,this.i))};var Fe=function(a){return Number(ob(a,this.i))};var Ge=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var He=function(a,b,c){var d=null,e=!1;F(this.getName(),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new db;for(var f=0;f<a.length();f++){var h=a.get(f);h instanceof db&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null};var re="floor ceil round max min abs pow sqrt".split(" ");var Ie=function(){var a={};return{zg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ch:function(b,c){a[b]=c},reset:function(){a={}}}},Je=function(a,b){F(this.getName(),["apiName:!string","mock:?*"],arguments);};var Ke=function(){this.a={}};Ke.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Ke.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?me(a,b):ne(a,b)};function Le(){var a={};return a};var D=window,I=document,Me=navigator,Ne=I.currentScript&&I.currentScript.src,Oe=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Pe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qe=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pe(d,b);c&&(d.onerror=c);var e;if(null===na)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){na=k;break b}}na=""}e=na;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Re=function(){if(Ne){var a=Ne.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Se=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Pe(c,b);void 0!==a&&(c.src=a);return c},Te=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ue=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ve=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){D.setTimeout(a,0)},We=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Xe=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ye=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ze=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},$e=function(a){Me.sendBeacon&&Me.sendBeacon(a)||Te(a)},af=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf=function(a){return bf?I.querySelectorAll(a):null},df=function(a,b){if(!bf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},ef=!1;if(I.querySelectorAll)try{var ff=I.querySelectorAll(":root");ff&&1==ff.length&&ff[0]==I.documentElement&&(ef=!0)}catch(a){}var bf=ef;var M={va:"_ee",Zh:"_uci",Bc:"event_callback",Bb:"event_timeout",D:"gtag.config",aa:"allow_ad_personalization_signals",Cc:"restricted_data_processing",Wa:"allow_google_signals",ba:"cookie_expires",Ab:"cookie_update",Xa:"session_duration",ia:"user_properties"};M.ze=[M.aa,M.Wa,M.Ab];M.Be=[M.ba,M.Bb,M.Xa];var xf=/[A-Z]+/,yf=/\s/,zf=function(a){if(r(a)&&(a=Qa(a),!yf.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xf.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],s:d}}}}},Bf=function(a){for(var b={},c=0;c<a.length;++c){var d=zf(a[c]);d&&(b[d.id]=d)}Af(b);var e=[];La(b,function(f,h){e.push(h)});return e};
function Af(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.s[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Gd={},Q=null,Cf=Math.random();Gd.w="GTM-W8JKW6";Gd.Gb="3p1";var Df={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Ef="www.googletagmanager.com/gtm.js";var Ff=Ef,Gf=null,Hf=null,If=null,Jf="//www.googletagmanager.com/a?id="+Gd.w+"&cv=206",Kf={},Lf={},Mf=function(){var a=Q.sequence||0;Q.sequence=a+1;return a};var Nf={},Of=function(a,b){Nf[a]=Nf[a]||[];Nf[a][b]=!0},Pf=function(a){for(var b=[],c=Nf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Qf=function(){return"&tc="+fd.filter(function(a){return a}).length},Tf=function(){Rf||(Rf=D.setTimeout(Sf,500))},Sf=function(){Rf&&(D.clearTimeout(Rf),Rf=void 0);void 0===Uf||Vf[Uf]&&!Wf&&!Xf||(Yf[Uf]||Zf.Ng()||0>=$f--?(Of("GTM",1),Yf[Uf]=!0):(Zf.rh(),Te(ag()),Vf[Uf]=!0,bg=cg=Xf=Wf=""))},ag=function(){var a=Uf;if(void 0===a)return"";var b=Pf("GTM"),c=Pf("TAGGING");return[dg,Vf[a]?"":"&es=1",eg[a],b?"&u="+b:"",c?"&ut="+c:"",Qf(),Wf,Xf,cg,bg,"&z=0"].join("")},fg=function(){return[Jf,"&v=3&t=t",
"&pid="+Ha(),"&rv="+Gd.Gb].join("")},gg="0.005000">Math.random(),dg=fg(),hg=function(){dg=fg()},Vf={},Wf="",Xf="",bg="",cg="",Uf=void 0,eg={},Yf={},Rf=void 0,Zf=function(a,b){var c=0,d=0;return{Ng:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},rh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),$f=1E3,ig=function(a,b){if(gg&&!Yf[a]&&Uf!==a){Sf();Uf=a;bg=Wf="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";eg[a]="&e="+c+"&eid="+a;Tf()}},jg=function(a,b,c){if(gg&&
!Yf[a]&&b){a!==Uf&&(Sf(),Uf=a);var d,e=String(b[rd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Wf=Wf?Wf+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(hd[h]?"1":"2")+d;bg=bg?bg+"."+k:"&ti="+k;Tf();2022<=ag().length&&Sf()}},kg=function(a,b,c){if(gg&&!Yf[a]){a!==Uf&&(Sf(),Uf=a);var d=c+b;Xf=
Xf?Xf+"."+d:"&epr="+d;Tf();2022<=ag().length&&Sf()}};var lg={},mg=new Ia,ng={},og={},rg={name:"dataLayer",set:function(a,b){G(Ya(a,b),ng);pg()},get:function(a){return qg(a,2)},reset:function(){mg=new Ia;ng={};pg()}},qg=function(a,b){if(2!=b){var c=mg.get(a);if(gg){var d=sg(a);c!==d&&Of("GTM",5)}return c}return sg(a)},sg=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:ug(d)},ug=function(a){for(var b=ng,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var wg=function(a,b){og.hasOwnProperty(a)||(mg.set(a,b),G(Ya(a,b),ng),pg())},pg=function(a){La(og,function(b,c){mg.set(b,c);G(Ya(b,void 0),ng);G(Ya(b,c),ng);a&&delete og[b]})},xg=function(a,b,c){lg[a]=lg[a]||{};var d=1!==c?sg(b):mg.get(b);"array"===hb(d)||"object"===hb(d)?lg[a][b]=G(d):lg[a][b]=d},yg=function(a,b){if(lg[a])return lg[a][b]},zg=function(a,b){lg[a]&&delete lg[a][b]};var Ag=function(){var a=!1;return a};var S=function(a,b,c,d){return(2===Bg()||d||"http:"!=D.location.protocol?a:b)+c},Bg=function(){var a=Re(),b;if(1===a)a:{var c=Ff;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=I.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var Qg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Rg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ug="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Wg=function(a){var b=qg("gtm.whitelist");b&&Of("GTM",9);var c=b&&Wa(Pa(b),Rg),d=qg("gtm.blacklist");d||(d=qg("tagTypeBlacklist"))&&Of("GTM",3);
d?Of("GTM",8):d=[];Vg()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Pa(d),"google")&&Of("GTM",2);var e=d&&Wa(Pa(d),Sg),f={};return function(h){var k=h&&h[rd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Lf[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var q=
0;q<l.length;q++){if(0>C(c,l[q])){Of("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var p=0<=C(e,k);if(p)t=p;else{var u=Ja(e,l||[]);u&&Of("GTM",10);t=u}}var v=!m||t;v||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(v=Ja(e,Ug));return f[k]=v}},Vg=function(){return Qg.test(D.location&&D.location.hostname)};var Xg={gg:function(a,b){b[rd.Bd]&&"string"===typeof a&&(a=1==b[rd.Bd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(rd.Dd)&&null===a&&(a=b[rd.Dd]);b.hasOwnProperty(rd.Fd)&&void 0===a&&(a=b[rd.Fd]);b.hasOwnProperty(rd.Ed)&&!0===a&&(a=b[rd.Ed]);b.hasOwnProperty(rd.Cd)&&!1===a&&(a=b[rd.Cd]);return a}};var Yg={active:!0,isWhitelisted:function(){return!0}},Zg=function(a){var b=Q.zones;!b&&a&&(b=Q.zones=a());return b};var $g=function(){};var ah=!1,bh=0,ch=[];function dh(a){if(!ah){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ah=!0;for(var e=0;e<ch.length;e++)J(ch[e])}ch.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function eh(){if(!ah&&140>bh){bh++;try{I.documentElement.doScroll("left"),dh()}catch(a){D.setTimeout(eh,50)}}}var fh=function(a){ah?a():ch.push(a)};var gh={},hh={},ih=function(a,b,c,d){if(!hh[a]||Df[b]||"__zone"===b)return-1;var e={};jb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return hh[a].tags.push(e)-1},jh=function(a,b,c,d){if(hh[a]){var e=hh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function kh(a){for(var b=gh[a]||[],c=0;c<b.length;c++)b[c]();gh[a]={push:function(d){d(Gd.w,hh[a])}}}
var nh=function(a,b,c){hh[a]={tags:[]};Da(b)&&lh(a,b);c&&D.setTimeout(function(){return kh(a)},Number(c));return mh(a)},lh=function(a,b){gh[a]=gh[a]||[];gh[a].push(Ta(function(){return J(function(){b(Gd.w,hh[a])})}))};function mh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ta(function(){b++;d&&b>=c&&kh(a)})},Rf:function(){d=!0;b>=c&&kh(a)}}};var oh=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Q._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ea(rg.get("gtm.start"))?rg.get("gtm.start"):0;Q._li={cst:a(c-b),cbt:a(Hf-b)}}};var sh={},th=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},uh=!1;
var vh=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Of("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}oh();return D[b]},wh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=th();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var yh=function(a){},xh=function(){return D.GoogleAnalyticsObject||"ga"};var Ah=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Bh=/:[0-9]+$/,Ch=function(a,b,c,d){for(var e=[],f=a.split("&"),h=0;h<f.length;h++){var k=f[h].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Fh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Dh(a.protocol)||Dh(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(Bh,"").toLowerCase());return Eh(a,b,c,d,e)},Eh=function(a,b,c,d,e){var f,h=Dh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Gh(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Bh,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||Of("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Ch(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Dh=function(a){return a?a.replace(":",
"").toLowerCase():""},Gh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Hh=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Of("TAGGING",1),c="/"+c);var d=b.hostname.replace(Bh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Mh=function(){return!1},Nh=function(){var a={};return function(b,c,d){}};function Oh(a,b,c,d){var e=fd[a],f=Ph(a,b,c,d);if(!f)return null;var h=nd(e[rd.Wd],c,[]);if(h&&h.length){var k=h[0];f=Oh(k.index,{C:f,B:1===k.ve?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Ph(a,b,c,d){function e(){if(f[rd.nf])k();else{var w=od(f,c,[]),y=ih(c.id,String(f[rd.xa]),Number(f[rd.Yd]),w[rd.pf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ra()-A;jg(c.id,fd[a],"5");jh(c.id,y,"success",z);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ra()-A;jg(c.id,fd[a],"6");jh(c.id,y,"failure",z);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;jg(c.id,f,"1");var B=function(){var z=Ra()-A;jg(c.id,f,"7");jh(c.id,y,"exception",z);x||(x=!0,k())};var A=Ra();try{md(w,c)}catch(z){B(z)}}}var f=fd[a],h=b.C,k=b.B,l=b.terminate;if(c.Wc(f))return null;var m=nd(f[rd.Zd],c,[]);if(m&&m.length){var n=m[0],q=Oh(n.index,{C:h,B:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.ve?l:q}if(f[rd.Od]||f[rd.tf]){var t=f[rd.Od]?gd:c.Eh,p=h,u=k;if(!t[a]){e=Ta(e);var v=Qh(a,t,e);h=v.C;k=v.B}return function(){t[a](p,u)}}return e}
function Qh(a,b,c){var d=[],e=[];b[a]=Rh(d,e,c);return{C:function(){b[a]=Sh;for(var f=0;f<d.length;f++)d[f]()},B:function(){b[a]=Th;for(var f=0;f<e.length;f++)e[f]()}}}function Rh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Sh(a){a()}function Th(a,b){b()};var Wh=function(a,b){for(var c=[],d=0;d<fd.length;d++)if(a.qb[d]){var e=fd[d];var f=b.add();try{var h=Oh(d,{C:f,B:f,terminate:f},a,d);h?c.push({Te:d,Oe:pd(e),Sb:h}):(Uh(d,a),f())}catch(l){f()}}b.Rf();c.sort(Vh);for(var k=0;k<c.length;k++)c[k].Sb();return 0<c.length};function Vh(a,b){var c,d=b.Oe,e=a.Oe;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Te,k=b.Te;f=h>k?1:h<k?-1:0}return f}
function Uh(a,b){if(!gg)return;var c=function(d){var e=b.Wc(fd[d])?"3":"4",f=nd(fd[d][rd.Wd],b,[]);f&&f.length&&c(f[0].index);jg(b.id,fd[d],e);var h=nd(fd[d][rd.Zd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Xh=!1,Yh=function(a,b,c,d,e){if("gtm.js"==b){if(Xh)return!1;Xh=!0}ig(a,b);var f=nh(a,d,e);xg(a,"event",1);xg(a,"ecommerce",1);xg(a,"gtm");var h={id:a,name:b,Wc:Wg(c),qb:[],Eh:[],Ge:function(){Of("GTM",6)}};h.qb=Bd(h);var k=Wh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||yh(Gd.w);if(!k)return k;for(var l=0;l<h.qb.length;l++)if(h.qb[l]){var m=fd[l];if(m&&!Df[String(m[rd.xa])])return!0}return!1};var Zh={},$h={},ai=function(a){return void 0==$h[a]?void 0:$h[a]};var bi=[];function ci(){var a=Oe("google_tag_data",{}),b=void 0!=ai("ogt_cc")&&void 0!=ai("ogt_ccr");a.ics||(a.ics={entries:{},set:di,update:ei,addListener:fi,notifyListeners:gi,active:!1,valid:b});return a.ics}function di(a,b,c){var d=ci();d.active=!0;if(void 0!=b){var e=d.entries,f=e[a]||{},h=c&&r(c)?c.toUpperCase():void 0,k=f.region;h!==ai("ogt_ccr")&&(h===ai("ogt_cc")?k===ai("ogt_ccr"):h||k)||(e[a]={region:h,initial:"granted"===b,update:f.update})}}
function ei(a,b){var c=ci();c.active=!0;if(void 0!=b){var d=hi(a),e=c.entries;e[a]=e[a]||{};e[a].update="granted"===b;if(hi(a)!==d)for(var f=0;f<bi.length;++f){var h=bi[f];Fa(h.oe)&&-1!==h.oe.indexOf(a)&&(h.Ne=!0)}}}function fi(a,b){bi.push({oe:a,ug:b})}function gi(){for(var a=0;a<bi.length;++a){var b=bi[a];if(b.Ne){b.Ne=!1;try{b.ug.call()}catch(c){}}}}var hi=function(a){if(0==ci().valid)return!1;var b=ci().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0};var ii=[M.Zg,M.gh];var ki=/^https?:\/\/www\.googletagmanager\.com/;function li(){var a;return a}function ni(a,b){}
function mi(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function oi(){var a=!1;return a};var pi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.C=function(){};this.B=function(){}},qi=function(a){var b=new pi;b.eventModel=a;return b},ri=function(a,b){a.targetConfig=b;return a},si=function(a,b){a.containerConfig=b;return a},ti=function(a,b){a.a=b;return a},ui=function(a,b){a.globalConfig=b;return a},vi=function(a,b){a.C=b;return a},wi=function(a,b){a.B=b;return a};
pi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var xi=function(a){function b(e){La(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];La(c,function(e){d.push(e)});return d};var yi=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Bi=function(a,b,c,d){var e=zi(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ai(e,function(f){return f.Pb},b);if(1===e.length)return e[0].id;e=Ai(e,function(f){return f.rb},c);return e[0]?e[0].id:void 0}};
function Ci(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=yi(b,e).indexOf(c)}
var Gi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete k[y],w;k[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete k[y],w;k[y]=!0;return w+"; "+y}var h;void 0==b?h=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Di(b),h=a+"="+b);var k={};h=e(h,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);h=e(h,"expires",l);h=e(h,"max-age",c.Vg);h=e(h,"samesite",c.vh);c.zh&&(h=f(h,"secure"));
h=f(h,c.flags);var m=c.domain;if("auto"===m){for(var n=Ei(),q=void 0,t=!1,p=0;p<n.length;++p){var u="none"!==n[p]?n[p]:void 0,v=e(h,"domain",u);try{d&&d(a,k)}catch(w){q=w;continue}t=!0;if(!Fi(u,c.path)&&Ci(v,a,b))return!0}if(q&&!t)throw q;return!1}m&&"none"!==m&&(h=e(h,"domain",m));d&&d(a,k);return Fi(m,c.path)?!1:Ci(h,a,b)},Hi=function(a,b,c,d,e,f,h){var k={domain:d,path:c,expires:e,flags:h,encode:f};null==k.path&&(k.path="/");k.domain||(k.domain="auto");return Gi(a,b,k)};
function Ai(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function zi(a,b){for(var c=[],d=yi(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Pb:1*k[0]||1,rb:1*k[1]||1}))}}return c}
var Di=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ii=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ji=/(^|\.)doubleclick\.net$/i,Fi=function(a,b){return Ji.test(document.location.hostname)||"/"===b&&Ii.test(a)},Ei=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ji.test(e)||Ii.test(e)||a.push("none");
return a};function Ki(){for(var a=Li,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Mi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Li,Ni;function Oi(a){Li=Li||Mi();Ni=Ni||Ki();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Li[l],Li[m],Li[n],Li[q])}return b.join("")}
function Pi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Ni[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Li=Li||Mi();Ni=Ni||Ki();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Qi;var Ui=function(){var a=Ri,b=Si,c=Ti(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ue(I,"mousedown",d);Ue(I,"keyup",d);Ue(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Vi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ti().decorators.push(f)},Wi=function(a,b,c){for(var d=Ti().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==I.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ua(e,h.callback())}}return e},Ti=function(){var a=Oe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Xi=/(.*?)\*(.*?)\*(.*)/,Yi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Zi=/^(?:www\.|m\.|amp\.)+/,$i=/([^?#]+)(\?[^#]*)?(#.*)?/;function aj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var cj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Oi(String(d))))}var e=b.join("*");return["1",bj(e),e].join("*")},bj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Qi)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Qi=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Qi[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ej=function(){return function(a){var b=Hh(D.location.href),c=b.search.replace("?",""),d=Ch(c,"_gl",!1,!0)||"";a.query=dj(d)||{};var e=Fh(b,"fragment").match(aj("_gl"));a.fragment=dj(e&&e[3]||"")||{}}},fj=function(){var a=ej(),b=Ti();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ua(c,d.query),Ua(c,d.fragment));return c},dj=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Xi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===bj(k,n)){l=!0;break a}l=!1}if(l){for(var q={},t=k?k.split("*"):[],p=0;p<t.length;p+=2)q[t[p]]=Pi(t[p+1]);return q}}}}catch(u){}};
function gj(a,b,c,d){function e(n){var q=n,t=aj(a).exec(q),p=q;if(t){var u=t[2],v=t[4];p=t[1];v&&(p=p+u+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=$i.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function hj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Wi(b,1,c),e=Wi(b,2,c),f=Wi(b,3,c);if(Va(d)){var h=cj(d);c?ij("_gl",h,a):jj("_gl",h,a,!1)}if(!c&&Va(e)){var k=cj(e);jj("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){jj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ij(m,n,q);break a}}"string"==typeof q&&gj(m,n,q,void 0)}}
function jj(a,b,c,d){if(c.href){var e=gj(a,b,c.href,void 0===d?!1:d);Ah.test(e)&&(c.href=e)}}
function ij(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=gj(a,b,c.action);Ah.test(m)&&(c.action=m)}}}
var Ri=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||hj(e,e.hostname)}}catch(h){}},Si=function(a){try{if(a.action){var b=Fh(Hh(a.action),"host");hj(a,b)}}catch(c){}},kj=function(a,b,c,d){Ui();Vi(a,b,"fragment"===c?2:1,!!d,!1)},lj=function(a){Ui();Vi(a,[D.location.hostname],3,!0,!0)},mj=function(){var a=I.location.hostname,b=Yi.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Zi,""),l=e.replace(Zi,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},nj=function(a,b){return!1===a?!1:a||b||mj()};var oj=/^\w+$/,pj=/^[\w-]+$/,qj=/^~?[\w-]+$/,rj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function sj(a){return a&&"string"==typeof a&&a.match(oj)?a:"_gcl"}
var uj=function(){var a=Hh(D.location.href),b=Fh(a,"query",!1,void 0,"gclid"),c=Fh(a,"query",!1,void 0,"gclsrc"),d=Fh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ch(e,"gclid",!1,void 0);c=c||Ch(e,"gclsrc",!1,void 0)}return tj(b,c,d)},tj=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(pj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
Zh.gtm_3pds?0:Zh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},wj=function(a){var b=uj();vj(b,a)};
function vj(a,b,c){function d(q,t){var p=xj(q,e);p&&Hi(p,t,h,f,l,!0)}b=b||{};var e=sj(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Qa?7776E3:b.Qa;c=c||Ra();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.ri?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var zj=function(a,b,c,d,e){for(var f=fj(),h=sj(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==rj[l]){var m=xj(l,h),n=f[m];if(n){var q=Math.min(yj(n),Ra()),t;b:{for(var p=q,u=yi(m,I.cookie),v=0;v<u.length;++v)if(yj(u[v])>p){t=!0;break b}t=!1}t||Hi(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};vj(tj(f.gclid,f.gclsrc),w)},xj=function(a,b){var c=rj[a];if(void 0!==c)return b+c},yj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Aj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Bj=function(a,b,c,d,e){if(Fa(b)){var f=sj(e);kj(function(){for(var h={},k=0;k<a.length;++k){var l=xj(a[k],f);if(l){var m=yi(l,I.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Cj=function(a){return a.filter(function(b){return qj.test(b)})},Dj=function(a,b){for(var c=sj(b&&b.prefix),d={},e=0;e<a.length;e++)rj[a[e]]&&(d[a[e]]=rj[a[e]]);La(d,function(f,h){var k=yi(c+h,I.cookie);if(k.length){var l=k[0],m=yj(l),n={};n[f]=[Aj(l)];vj(n,b,m)}})},Ej=function(){var a=["","aw.ds"],b=uj(),
c=b.gclid,d=b.gclsrc||"";c&&-1!==a.indexOf(d)&&lj(function(){var e={gclid:c};d&&(e.gclsrc=d);return e})};function Fj(){var a=uj(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;Q.reported_gclid||(Q.reported_gclid={});d=Q.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));$e("https://www.google.com"+e)}}};var Gj;if(3===Gd.Gb.length)Gj="g";else{var Hj="G";Gj=Hj}
var Ij={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Gj,OPT:"o"},Jj=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=Ij[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Gb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Gd.Gb+e};var Tj=function(){for(var a=Me.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ra()/1E3)].join(".")},Wj=function(a,b,c,d){var e=Uj(b);return Bi(a,e,Vj(c),d)},Xj=function(a,b,c,d){var e=""+Uj(c),f=Vj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Uj=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Vj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Yj=["1"],Zj={},dk=function(a,b,c,d){var e=ak(a);Zj[e]||bk(e,b,c)||(ck(e,Tj(),b,c,d),bk(e,b,c))};function ck(a,b,c,d,e){var f=Xj(b,"1",d,c);Hi(a,f,c,d,0==e?void 0:new Date(Ra()+1E3*(void 0==e?7776E3:e)))}function bk(a,b,c){var d=Wj(a,b,c,Yj);d&&(Zj[a]=d);return d}function ak(a){return(a||"_gcl")+"_au"};var ek=function(){for(var a=[],b=I.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({pd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].pd]||(f[a[h].pd]=[]),f[a[h].pd].push({timestamp:k[1],wg:k[2]}))}return f};var fk=/^\d+\.fls\.doubleclick\.net$/;function gk(a){var b=Hh(D.location.href),c=Fh(b,"host",!1);if(c&&c.match(fk)){var d=Fh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function hk(a,b){if("aw"==a||"dc"==a){var c=gk("gcl"+a);if(c)return c.split(".")}var d=sj(b);if("_gcl"==d){var e;e=uj()[a]||[];if(0<e.length)return e}var f=xj(a,d),h;if(f){var k=[];if(I.cookie){var l=yi(f,I.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Aj(l[m]);n&&-1===C(k,n)&&k.push(n)}h=Cj(k)}else h=k}else h=k}else h=[];return h}
var ik=function(){var a=gk("gac");if(a)return decodeURIComponent(a);var b=ek(),c=[];La(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].wg);f=Cj(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},jk=function(a,b,c,d,e){dk(b,c,d,e);var f=Zj[ak(b)],h=uj().dc||[],k=!1;if(f&&0<h.length){var l=Q.joined_au=Q.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk";q=q+"?gclid="+h[n]+"&auiddc="+f;$e(q);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var t=ak(b),
p=Zj[t];p&&ck(t,p,c,d,e)}};var cl={},dl=["G","GP"];cl.Ue="";var el=cl.Ue.split(",");function fl(){var a=Q;return a.gcq=a.gcq||new gl}
var hl=function(a,b,c){fl().register(a,b,c)},il=function(a,b,c,d){fl().push("event",[b,a],c,d)},jl=function(a,b){fl().push("config",[a],b)},kl={},ll=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},ml=function(a,b,c,d,e){this.type=a;this.m=b;this.V=c||"";this.a=d;this.i=e},gl=function(){this.i={};this.m={};this.a=[]},nl=function(a,b){var c=zf(b);return a.i[c.containerId]=a.i[c.containerId]||new ll},ol=function(a,b,c,d){if(d.V){var e=nl(a,d.V),
f=e.m;if(f){var h=G(c),k=G(e.targetConfig[d.V]),l=G(e.containerConfig),m=G(e.i),n=G(a.m),q=qg("gtm.uniqueEventId"),t=zf(d.V).prefix,p=wi(vi(ui(ti(si(ri(qi(h),k),l),m),n),function(){kg(q,t,"2");}),function(){kg(q,t,"3");});try{kg(q,t,"1");f(d.V,b,d.m,p)}catch(u){
kg(q,t,"4");}}}};
gl.prototype.register=function(a,b,c){if(3!==nl(this,a).status){nl(this,a).m=b;nl(this,a).status=3;c&&(nl(this,a).i=c);var d=zf(a),e=kl[d.containerId];if(void 0!==e){var f=Q[d.containerId].bootstrap,h=d.prefix.toUpperCase();Q[d.containerId]._spx&&(h=h.toLowerCase());var k=qg("gtm.uniqueEventId"),l=h,m=Ra()-f;if(gg&&!Yf[k]){k!==Uf&&(Sf(),Uf=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);cg=cg?cg+","+n:"&cl="+n}delete kl[d.containerId]}this.flush()}};
gl.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);a:if(c){var f=zf(c),h;if(h=f){var k;if(k=1===nl(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(nl(this,c).status=2,this.push("require",[],f.containerId),kl[f.containerId]=Ra(),Ag()){}else{var n=encodeURIComponent(f.containerId),q=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
Qe(q+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.a.push(new ml(a,e,c,b,d));d||this.flush()};
gl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==nl(this,c.V).status&&!a)return;break;case "set":La(c.a[0],function(l,m){G(Ya(l,m),b.m)});break;case "config":var d=c.a[0],e=!!d[M.bc];delete d[M.bc];var f=nl(this,c.V),h=zf(c.V),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.V]={});f.a&&e||ol(this,M.D,d,c);f.a=!0;delete d[M.va];k?G(d,f.containerConfig):G(d,f.targetConfig[c.V]);break;
case "event":ol(this,c.a[1],c.a[0],c)}this.a.shift()}};var pl=function(a,b){return!0};var ql=function(a,b){var c;F(this.getName(),["path:!string"],[a]);Ae(this,"access_globals","execute",a);for(var d=a.split("."),e=D,f=e[d[0]],h=1;f&&h<d.length;h++)e=f,f=f[d[h]];if("function"!==hb(f))return;for(var k=[],l=1;l<arguments.length;l++)k.push(ob(arguments[l],this.i));c=kb((0,this.i.S)(f,e,k),this.i);return c};var rl=function(a){};var sl=function(a){var b;F(this.getName(),["path:!string"],arguments);Ae(this,"access_globals","read",a);var c=a.split("."),d=D,e;for(e=0;e<c.length-1;e++)if(d=d[c[e]],null==d)return;b=d[c[e]];return kb(b,this.i)};var tl=function(a,b){var c=null;F(this.getName(),["functionPath:!string","arrayPath:!string"],arguments);Ae(this,"access_globals","readwrite",a);Ae(this,"access_globals","readwrite",b);var d=a.split("."),e=Xa(d),f=d[d.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var h=e[f];if(h&&!Da(h))return null;if(h)return kb(h,this.i);var k;h=function(){if(!Da(k.push))throw Error("Object at "+b+" in window is not an array.");k.push.call(k,
arguments)};e[f]=h;var l=b.split("."),m=Xa(l),n=l[l.length-1];if(void 0===m)throw Error("Path "+l+" does not exist.");k=m[n];void 0===k&&(k=[],m[n]=k);c=function(){h.apply(h,Array.prototype.slice.call(arguments,0))};return kb(c,this.i)};var ul=function(a){var b;return kb(b,
this.i)};var vl=function(a){var b;return b};var wl=function(a,b){b=void 0===b?!0:b;var c;return c};var xl=function(a,b){var c;return c};var yl=function(a,b){var c;return c};var zl=function(a){var b="";return b};var Al=function(a){var b="";return b};var Bl=function(a,b){};var Cl={},Dl=function(a,b,c,d){F(this.getName(),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ae(this,"inject_script",a);var e=this.i,f=function(){b instanceof $a&&b.Ba(e)},h=function(){c instanceof $a&&c.Ba(e)};if(!d){Qe(a,f,h);return}var k=d;Cl[k]?(Cl[k].onSuccess.push(f),Cl[k].onFailure.push(h)):(Cl[k]={onSuccess:[f],onFailure:[h]},f=function(){for(var l=Cl[k].onSuccess,m=0;m<l.length;m++)J(l[m]);l.push=function(n){J(n);
return 0}},h=function(){for(var l=Cl[k].onFailure,m=0;m<l.length;m++)J(l[m]);Cl[k]=null},Qe(a,f,h));};var El=function(){return!1},Fl={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Gl=function(){try{Ae(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=ob(a[b],this.i);console.log.apply(console,a);};var Hl={},Il={};Hl.getItem=function(a){var b=null;return b};Hl.setItem=function(a,b){};
Hl.removeItem=function(a){};Hl.clear=function(){};var Jl=function(a,b){var c=!1;F(this.getName(),["permission:!string"],[a]);for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;++e)d[e]=ob(d[e],this.i);d.unshift(this);try{Ae.apply(null,d),c=!0}catch(f){return!1}return c};var Kl=function(a,b,c){};var Ll=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Ml=function(a,b,c){F(this.getName(),["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ae(this,"access_globals","readwrite",a);var d=a.split("."),e=D,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=ob(b,this.i),!0;return!1};var Nl=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Ol=function(a,b,c){var d=this;};var Pl=function(a){var b;return b};function Ql(a){}
function Rl(a,b){var c;return kb(c,this.i)}function Sl(){var a="";return a}
function Tl(){var a="";return a}
var Dc=function(){var a=new Ke;Ag()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Bl),a.add("injectScript",Dl));var b=Kl;a.add("addEventCallback",Ql);a.add("aliasInWindow",pl);a.add("assertThat",pe);a.add("assertApi",oe);a.add("callInWindow",ql);a.add("callLater",rl);a.add("copyFromDataLayer",
Rl);a.add("copyFromWindow",sl);a.add("createQueue",ul);a.add("createArgumentsQueue",tl);a.add("decodeUri",te);a.add("decodeUriComponent",ue);a.add("encodeUri",ve);a.add("encodeUriComponent",we);a.add("fail",xe);a.add("generateRandom",ye);a.add("getCookieValues",wl);a.add("getQueryParameters",xl);a.add("getReferrerQueryParameters",yl);a.add("getReferrerUrl",zl);a.add("getTimestamp",ze);a.add("getType",Ce);a.add("getUrl",Al);a.add("logToConsole",Gl);a.add("makeInteger",Ee);a.add("makeNumber",Fe);a.add("makeString",
Ge);a.add("makeTableMap",He);a.add("Math",se());a.add("mock",Je);a.add("queryPermission",Jl);a.add("readCharacterSet",Sl);a.add("readTitle",Tl);a.add("sendPixel",b);a.add("setCookie",Ll);a.add("setInWindow",Ml);a.add("sha256",Ol);a.add("TestHelper",Le());a.add("toBase64",Pl,!("btoa"in D)),a.add("fromBase64",
vl,!("atob"in D));a.add("localStorage",Fl,!El());
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Bc,Kd;
function Ul(){var a=data.runtime||[],b=data.runtime_lines;Bc=new Ac;Vl();bd=function(e,f,h){Wl(f);var k=new db;La(f,function(p,u){k.set(p,kb(u))});Bc.a.a.o=xd();var l={Tf:Ld(e),eventId:void 0!==h?h.id:void 0,Rb:e,log:function(){}};if(Mh()){var m=Nh(),n=void 0,q=void 0;l.Z={i:{},a:function(p,u,v){1===u&&(n=p);7===u&&(q=v);m(p,u,v)},m:Ie()};l.log=function(p,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:p,source:q,message:v})}}}var t=Cc(l,[e,k]);Bc.a.a.o=void 0;t instanceof pa&&
"return"===t.a&&(t=t.i);return ob(t)};Ec();for(var c=0;c<a.length;c++){var d=a[c];if(!Fa(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&td(d,b[c]);Bc.Sb(d)}}function Wl(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){J(b)});Da(c)&&(a.gtmOnFailure=function(){J(c)})}function Vl(){var a=Bc;Q.SANDBOXED_JS_SEMAPHORE=Q.SANDBOXED_JS_SEMAPHORE||0;Fc(a,function(b,c,d){Q.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Q.SANDBOXED_JS_SEMAPHORE--}})}
function Xl(a){void 0!==a&&La(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Lf[e]=Lf[e]||[];Lf[e].push(b)}})};var Yl=["GP","G"],Zl="G".split(/,/);Zl.push("HA");var $l=!1;$l=!0;var am=null,bm={},cm={},dm;function em(a,b){var c={event:a};b&&(c.eventModel=G(b),b[M.Bc]&&(c.eventCallback=b[M.Bc]),b[M.Bb]&&(c.eventTimeout=b[M.Bb]));return c}
var km={config:function(a){},event:function(a){var b=a[1];if(r(b)&&!(3<a.length)){var c;if(2<a.length){if(!jb(a[2])&&void 0!=a[2])return;c=a[2]}var d=em(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=
[c]}},set:function(a){var b;2==a.length&&jb(a[1])?b=G(a[1]):3==a.length&&r(a[1])&&(b={},jb(a[2])||Fa(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
var lm={policy:!0};var mm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},om=function(a){var b=nm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pm=!1,qm=[];function rm(){if(!pm){pm=!0;for(var a=0;a<qm.length;a++)J(qm[a])}}var sm=function(a){pm?J(a):qm.push(a)};var Hm=function(a){if(Gm(a))return a;this.a=a};Hm.prototype.Cg=function(){return this.a};var Gm=function(a){return!a||"object"!==hb(a)||jb(a)?!1:"getUntrustedUpdateValue"in a};Hm.prototype.getUntrustedUpdateValue=Hm.prototype.Cg;var Im=[],Jm=!1,Km=function(a){return D["dataLayer"].push(a)},Lm=function(a){var b=Q["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mm(a){var b=a._clear;La(a,function(f,h){"_clear"!==f&&(b&&wg(f,void 0),wg(f,h))});Gf||(Gf=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Mf(),a["gtm.uniqueEventId"]=d,wg("gtm.uniqueEventId",d));If=c;var e=
Nm(a);If=null;switch(c){case "gtm.init":Of("GTM",19),e&&Of("GTM",20)}return e}function Nm(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Q.zones;d=e?e.checkState(Gd.w,c):Yg;return d.active?Yh(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Om(){for(var a=!1;!Jm&&0<Im.length;){Jm=!0;delete ng.eventModel;pg();var b=Im.shift();if(null!=b){var c=Gm(b);if(c){var d=b;b=Gm(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=qg(h,1);if(Fa(k)||jb(k))k=G(k);og[h]=k}}try{if(Da(b))try{b.call(rg)}catch(u){}else if(Fa(b)){var l=b;if(r(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),t=qg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,q)}catch(u){}}}else{if(Ma(b)){a:{if(b.length&&r(b[0])){var p=km[b[0]];if(p&&(!c||!lm[b[0]])){b=p(b);break a}}b=void 0}if(!b){Jm=!1;continue}}a=Mm(b)||a}}finally{c&&pg(!0)}}Jm=!1}return!a}function Pm(){var a=Om();try{mm(D["dataLayer"],Gd.w)}catch(b){}return a}
var Rm=function(){var a=Oe("dataLayer",[]),b=Oe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};fh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});sm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Q.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Hm(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Im.push.apply(Im,d);if(300<
this.length)for(Of("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Om()&&h};Im.push.apply(Im,a.slice(0));Qm()&&J(Pm)},Qm=function(){var a=!0;return a};var Sm={};Sm.Cb=new String("undefined");
var Tm=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sm.Cb?b:a[d]);return c.join("")}};Tm.prototype.toString=function(){return this.a("undefined")};Tm.prototype.valueOf=Tm.prototype.toString;Sm.Cf=Tm;Sm.Ic={};Sm.jg=function(a){return new Tm(a)};var Um={};Sm.sh=function(a,b){var c=Mf();Um[c]=[a,b];return c};Sm.qe=function(a){var b=a?0:1;return function(c){var d=Um[c];if(d&&"function"===typeof d[b])d[b]();Um[c]=void 0}};Sm.Lg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sm.ih=function(a){if(a===Sm.Cb)return a;var b=Mf();Sm.Ic[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};Sm.Wg=function(a,b,c){a instanceof Sm.Cf&&(a=a.a(Sm.sh(b,c)),b=Ca);return{Uc:a,C:b}};var Vm=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||We(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wm=function(a){Q.hasOwnProperty("autoEventsSettings")||(Q.autoEventsSettings={});var b=Q.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xm=function(a,b,c){Wm(a)[b]=c},Ym=function(a,b,c,d){var e=Wm(a),f=Sa(e,b,d);e[b]=c(f)},Zm=function(a,b,c){var d=Wm(a);return Sa(d,b,c)};var $m=["input","select","textarea"],an=["button","hidden","image","reset","submit"],bn=function(a){var b=a.tagName.toLowerCase();return!Ga($m,function(c){return c===b})||"input"===b&&Ga(an,function(c){return c===a.type.toLowerCase()})?!1:!0},cn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):Ze(a,["form"],100)},dn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(bn(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var en=!!D.MutationObserver,fn=void 0,gn=function(a){if(!fn){var b=function(){var c=I.body;if(c)if(en)(new MutationObserver(function(){for(var e=0;e<fn.length;e++)J(fn[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ue(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<fn.length;e++)J(fn[e])}))})}};fn=[];I.body?b():J(b)}fn.push(a)};var Cn=D.clearTimeout,Dn=D.setTimeout,T=function(a,b,c){if(Ag()){b&&J(b)}else return Qe(a,b,c)},En=function(){return D.location.href},Fn=function(a){return Fh(Hh(a),"fragment")},Gn=function(a){return Gh(Hh(a))},Hn=function(a,b){return qg(a,b||2)},In=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Km(a)):d=Km(a);return d},Jn=function(a,b){D[a]=b},V=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},Kn=function(a,b,c){return yi(a,b,void 0===c?!0:!!c)},Ln=function(a,b){if(Ag()){b&&J(b)}else Se(a,b)},Mn=function(a){return!!Zm(a,"init",!1)},Nn=function(a){Xm(a,"init",!0)},On=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ff;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(S("https://","http://",c))},Pn=function(a,b){var c=a[b];return c};
var Qn=Sm.Wg;var no=new Ia;function oo(a,b){function c(h){var k=Hh(h),l=Fh(k,"protocol"),m=Fh(k,"host",!0),n=Fh(k,"port"),q=Fh(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function po(a){return qo(a)?1:0}
function qo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Fa(c)){for(var d=0;d<c.length;d++)if(po({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=C(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var t=a.ignore_case?"i":void 0;try{var p=String(c)+t,u=no.get(p);u||(u=new RegExp(c,t),no.set(p,u));q=u.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return oo(b,
c)}return!1};var ro=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var so={},to=encodeURI,Y=encodeURIComponent,uo=Te;var vo=function(a,b){if(!a)return!1;var c=Fh(Hh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var wo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};so.Mg=function(){var a=!1;return a};var Jp=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||Ha();return a.hid};var Up=window,Vp=document,Wp=function(a){var b=Up._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Up["ga-disable-"+a])return!0;try{var c=Up.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=yi("AMP_TOKEN",Vp.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Vp.getElementById("__gaOptOutExtension")?!0:!1};var Zp=function(a){La(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[M.ia]||{};La(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var cq=function(a,b,c){il(b,c,a)},dq=function(a,b,c){il(b,c,a,!0)},fq=function(a,b){};
function eq(a,b){}var Z={b:{}};


Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(yg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Hn("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Fh(Hh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Gn(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Vm(c,"gtm.click");In(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Mn("cl")){var c=V("document");Ue(c,"click",a,!0);Nn("cl")}J(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Kn(a.vtp_name,Hn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],h=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&h.push(m)}return{assert:function(n,q,t){if(!r(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<C(e,t))return}else if("write"===q){if(-1<C(f,t))return}else if("readwrite"===q){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===q){if(-1<C(h,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},J:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Hn("gtm.url",1);c=c||En();var d=b[a("vtp_component")];if(!d||"URL"==d)return Gn(String(c));var e=Hh(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?Fa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Fh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Fh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Hn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;G(wo(n.vtp_fieldsToSet,"fieldName","value"),f);G(wo(n.vtp_contentGroup,"index","group"),h);G(wo(n.vtp_dimension,"index","dimension"),k);G(wo(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=G(n);d=G(d,q)}G(wo(d.vtp_fieldsToSet,"fieldName","value"),f);G(wo(d.vtp_contentGroup,
"index","group"),h);G(wo(d.vtp_dimension,"index","dimension"),k);G(wo(d.vtp_metric,"index","metric"),l);var t=vh(d.vtp_functionName);if(Da(t)){var p="",u="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(u=d.vtp_trackerName,p=u+"."):(u="gtm"+Mf(),p=u+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(P){var L=[].slice.call(arguments,0);L[0]=p+L[0];t.apply(window,L)},x=function(P,L){return void 0===L?L:P(L)},B=function(P,L){if(L)for(var za in L)L.hasOwnProperty(za)&&
y("set",P+za,L[za])},A=function(){},z=function(P,L,za){var Wb=0;if(P)for(var Ka in P)if(P.hasOwnProperty(Ka)&&(za&&v[Ka]||!za&&void 0===v[Ka])){var lb=w[Ka]?Oa(P[Ka]):P[Ka];"anonymizeIp"!=Ka||lb||(lb=void 0);L[Ka]=lb;Wb++}return Wb},E={name:u};z(f,
E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Jj(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,L){void 0!==d[L]&&y("set",P,d[L])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var H={};z(f,H,!1)&&y("set",H);var K;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=f&&f.hitCallback;Da(P)&&P();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Na,d.vtp_eventValue||e.value)};z(K,U,!1);y("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){var X={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};z(K,X,!1);y("send",X);}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){var R={hitType:"timing",timingCategory:String(d.vtp_timingCategory||e.category),timingVar:String(d.vtp_timingVar||e.name),timingValue:Na(d.vtp_timingValue||e.value),timingLabel:x(String,d.vtp_timingLabel||e.label)};z(K,R,!1);y("send",R);}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var ya="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:ya})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var va="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:va})}K?y("send","pageview",K):y("send","pageview");
d.vtp_autoLinkDomains&&wh(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var Aa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(Aa="internal/"+Aa);a=!0;var nb=S("https:","http:","//www.google-analytics.com/"+Aa,f&&f.forceSSL);
T(nb,function(){var P=th();P&&P.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else J(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!r(f))throw d(e,{},"Script URL must be a string.");try{if(he(Hh(f),c))return}catch(h){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},J:a}})}();


Z.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;G(wo(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=G(e);c=G(c,f)||{}}G(wo(c.vtp_fieldsToSet,"fieldName","value"),d);var h=vh(c.vtp_functionName);if(Da(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Mf(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,B){var A=0,z;for(z in y)if(y.hasOwnProperty(z)&&
(B&&m[z]||!B&&void 0===m[z])){var E=n[z]?Oa(y[z]):y[z];"anonymizeIp"!==z||E||(E=void 0);x[z]=E;A++}return A},t={name:l};q(d,t,!0);var p={"&gtm":Jj(!0)};q(d,p,!1);var u=encodeURI(S("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,t);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,T(u,function(){return th().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=V("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else J(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0}();



Z.b.aev=["google"],function(){function a(p,u){var v=yg(p,"gtm");if(v)return v[u]}function b(p,u,v,w){w||(w="element");var y=p+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var B=a(p,w);if(B&&(x=v(B),n[y]=x,q.push(y),35<q.length)){var A=q.shift();delete n[A]}}return x}function c(p,u,v){var w=a(p,t[u]);return void 0!==w?w:v}function d(p,u){if(!p)return!1;var v=e(En());Fa(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(p))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!vo(p,w)}function e(p){m.test(p)||(p="http://"+p);return Fh(Hh(p),"HOST",!0)}function f(p,u,v){switch(p){case "SUBMIT_TEXT":return b(u,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return We(p,"value");case "button":return Xe(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var u=0,v=0;v<p.elements.length;v++)bn(p.elements[v])&&u++;return u}}function l(p,u,v){var w=a(p,"interactedFormField");return w&&We(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(p){var u=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Xe)||v;case "URL":var x;a:{var B=String(a(u,"elementUrl")||v||""),A=Hh(B),z=String(p.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,p.vtp_affiliatedDomains);break a;default:x=Fh(A,z,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(u,w,v);else{var H=p.vtp_attribute,K=a(u,"element");E=K&&We(K,H)||v||""}return E;case "MD":var U=p.vtp_mdValue,X=b(u,"MD",on);return U&&X?rn(X,U)||
v:X||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();

Z.b.gcs=["google"],function(){(function(a){Z.__gcs=a;Z.__gcs.g="gcs";Z.__gcs.h=!0;Z.__gcs.priorityOverride=0})(function(a){try{var b=a.vtp_siteId;if(!V("_gtmgcs")){D._gtmgcs={};var c=S("https:","http:","//survey.g.doubleclick.net/async_survey?site="+Y(b));T(c)}a.vtp_gtmOnSuccess()}catch(d){J(a.vtp_gtmOnFailure)}})}();Z.b.logging=["google"],function(){function a(){return{}}(function(b){Z.__logging=b;Z.__logging.g="logging";Z.__logging.h=!0;Z.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!so.Mg())throw d(e,{},"Logging is not enabled in all environments");},J:a}})}();
Z.b.fsl=[],function(){function a(){var e=V("document"),f=c(),h=HTMLFormElement.prototype.submit;Ue(e,"click",function(k){var l=k.target;if(l&&(l=Ze(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&We(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=I.getElementById(l.form):m=Ze(l,["form"],100);m&&f.store(m,l)}},!1);Ue(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,q=f.get(l),t=!0;if(d(l,function(){if(t){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,q))t=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Ga(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=Zm("fsl",h?"nv.mwt":"mwt",0),n;n=h?Zm("fsl","nv.ids",[]):Zm("fsl","ids",[]);if(!n.length)return!0;var q=Vm(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);q["gtm.elementUrl"]=t;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!In(q,Lm(f),m))return!1}else In(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,q)};Ym("fsl","mwt",m,0);h||Ym("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Ym("fsl","ids",n,[]);h||Ym("fsl","nv.ids",n,[]);Mn("fsl")||(a(),Nn("fsl"));J(e.vtp_gtmOnSuccess)})}();




Z.b.zone=[],function(){function a(q){for(var t=q.vtp_boundaries||[],p=0;p<t.length;p++)if(!t[p])return!1;return!0}function b(q){var t=Gd.w,p=t+":"+q.vtp_gtmTagId,u=Hn("gtm.uniqueEventId")||0,v=Zg(function(){return new h}),w=a(q),y=q.vtp_enableTypeRestrictions?q.vtp_whitelistedTypes.map(function(H){return H.typeId}):null;y=y&&Wa(y,f);if(v.registerZone(p,u,w,y))for(var x=q.vtp_childContainers.map(function(H){return H.publicId}),B=0;B<x.length;B++){var A=String(x[B]);if(v.registerChild(A,t,p)){var z=
0!==A.indexOf("GTM-");if(z){var E=function(H,K){In(arguments)};E("js",new Date);m?(E("config",A),l||On(A,z)):jl({},A)}else On(A,z)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.a={};this.i={}};h.prototype.checkState=function(q,t){var p=this.a[q];if(!p)return d;var u=this.checkState(p.Le,t);if(!u.active)return c;
for(var v=[],w=0;w<p.yd.length;w++){var y=this.i[p.yd[w]];y.pb(t)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,B){B=B||[];if(!u.isWhitelisted(x,B))return!1;for(var A=0;A<v.length;++A)if(v[A].isWhitelisted(x,B))return!0;return!1}}:c};h.prototype.unregisterChild=function(q){delete this.a[q]};h.prototype.registerZone=function(q,t,p,u){var v=this.i[q];if(v)return v.m(t,p),!1;if(!p)return!1;this.i[q]=new k(t,u);return!0};h.prototype.registerChild=function(q,t,p){var u=this.a[q];if(!u&&
Q[q]||u&&u.Le!==t)return!1;if(u)return u.yd.push(p),!1;this.a[q]={Le:t,yd:[p]};return!0};var k=function(q,t){this.a=[{eventId:q,pb:!0}];this.i=null;if(t){this.i={};for(var p=0;p<t.length;p++)this.i[t[p]]=!0}};k.prototype.m=function(q,t){var p=this.a[this.a.length-1];q<=p.eventId||p.pb!=t&&this.a.push({eventId:q,pb:t})};k.prototype.pb=function(q){if(!this.a||0==this.a.length)return!1;for(var t=this.a.length-1;0<=t;t--)if(this.a[t].eventId<=q)return this.a[t].pb;return!1};k.prototype.isWhitelisted=
function(q,t){t=t||[];if(!this.i||e[q]||this.i[q])return!0;for(var p=0;p<t.length;++p)if(this.i[t[p]])return!0;return!1};var l=!1;var m=!0;var n=function(q){b(q);J(q.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.g="zone";Z.__zone.h=!0;Z.__zone.priorityOverride=0}();
Z.b.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){J(h)}}}var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=Qn(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Uc,k=f.C;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(I.body,Ye(h),k,e)()}else Dn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();






Z.b.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Kg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=Ze(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=Zm("lcl",k?"nv.mwt":"mwt",0),m;m=k?Zm("lcl","nv.ids",[]):Zm("lcl","ids",[]);if(m.length){var n=Vm(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var q=String(Pn(h,"rel")||""),t=!!Ga(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Of("GTM",36);var p=V((Pn(h,"target")||"_self").substring(1)),u=!0;if(In(n,Lm(function(){var v;if(v=u&&p){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Kg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(p.location.href=Pn(h,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else In(n,function(){},l||2E3);return!0}}};Ue(c,"click",e,!1);Ue(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Pn(d,"href"),h=f.indexOf("#"),k=Pn(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Gn(f),m=Gn(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};Ym("lcl","mwt",k,0);e||Ym("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Ym("lcl","ids",l,[]);e||Ym("lcl","nv.ids",l,[]);Mn("lcl")||(a(),Nn("lcl"));J(c.vtp_gtmOnSuccess)})}();


var gq={};gq.macro=function(a){if(Sm.Ic.hasOwnProperty(a))return Sm.Ic[a]},gq.onHtmlSuccess=Sm.qe(!0),gq.onHtmlFailure=Sm.qe(!1);gq.dataLayer=rg;gq.callback=function(a){Kf.hasOwnProperty(a)&&Da(Kf[a])&&Kf[a]();delete Kf[a]};function hq(){Q[Gd.w]=gq;Ua(Lf,Z.b);jd=jd||Sm;kd=Xg}
function iq(){Zh.gtm_3pds=!0;Q=D.google_tag_manager=D.google_tag_manager||{};if(Q[Gd.w]){var a=Q.zones;a&&a.unregisterChild(Gd.w)}else{for(var b=data.resource||
{},c=b.macros||[],d=0;d<c.length;d++)cd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)fd.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)ed.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);dd.push(q)}hd=Z;id=po;var p=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Ul();Kd=new Jd(p);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");
Lf[x]=w}Xl(v);hq();Rm();ah=!1;bh=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)dh();else{Ue(I,"DOMContentLoaded",dh);Ue(I,"readystatechange",dh);if(I.createEventObject&&I.documentElement.doScroll){var B=!0;try{B=!D.frameElement}catch(H){}B&&eh()}Ue(D,"load",dh)}pm=!1;"complete"===I.readyState?rm():Ue(D,"load",rm);
a:{if(!gg)break a;D.setInterval(hg,864E5);}Hf=(new Date).getTime();}}iq();

})()
