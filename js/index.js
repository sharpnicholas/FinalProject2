loadCategoryPageDataLayer = function(json) {
  var locale = "English";
  var coockieValue = getCookie("MP_LANG");
  if (coockieValue == "en") {
    locale = "English";
  } else if (coockieValue == "es") {
    locale = "Spanish";
  }
  var platform = getPlatform();

  var obj = JSON.parse(json);
  var pageName = "/" + platform + " " + obj.pageName;

  var flowType = obj.flowType;
  var channel = "/" + platform + " " + obj.channel;
  var pageType = platform + " " + obj.pageType;
  var flowName = obj.flowName;
  var condition = "na";
  var lob = obj.lob;
  var section2 = "/" + platform + " " + obj.section2;
  var section3 = obj.section3;
  var hier1 = platform + " " + pageName;
  var authStatus = getAuthStatus("loggedIn");
  var typeIndicator = getTypeIndicator("myaccount");
  var globalId = getGlobalId("GLOBALID");
  var zipCode = getZipcode("ZIPCODE");
  var state = getState("STATE");
  var role = getRole("role");
  var percontentimpValue = obj.perContentImpression;
  vzwDL = {
    page: {
      authStatus: authStatus,
      area: "",
      flowInteraction: "navigation",
      flowName: flowName,
      flowType: flowType,
      shopPath: "",
      language: locale,
      lineOfBusiness: lob,
      typeIndicator: typeIndicator,
      globalId: globalId,
      pageType: pageType,
      channel: channel,
      hier1: hier1,
      section2: section2,
      section3: section3,
      pageName: pageName,
      filter: "",
      sort: "",
      condition: condition,
      platform: platform,
      errorMsg: "",
      errorCode: "",
      state: state,
      zipCode: zipCode,
      microInteraction: "",
      microType: "",
      testVersion: "",
      perEngineName: "",
      perContentImpression: percontentimpValue,
      registrationType: "",
      selfServiceType: "",
      conversionType: "",
      appointmentId: "",
      categoryName: "",
      contentGroup: "",
      deviceFilter: "",
      deviceId: "",
      deviceManufacturer: "",
      deviceModel: "",
      deviceType: "",
      deviceValue: "",
      email: "",
      mlsContent: "",
      mlsExp: "1D:" + platform,
      mlsType: "",
      returnType: "",
      rylToken: "",
      storeNumber: "",
      subFlowType: ""
    }
  };
  vzwDLAuthentication = {
    accountNumber: "",
    userRole: role,
    impId: "",
    impType: "",
    custType: "b2c",
    mdn: "",
    ecpdId: ""
  };

  vzwDL["authentication"] = vzwDLAuthentication;
  return vzwDL;
};

var getAuthStatus = function(cookieName) {
  var authCookieStatus = getCookie(cookieName);

  if ("true" == authCookieStatus) {
    return "authenticated";
  } else {
    return "unauthenticated";
  }
};

var getTypeIndicator = function(cookieName) {
  var typeInd = getCookie(cookieName);

  if ("true" == typeInd) {
    return "customer";
  } else {
    return "prospect";
  }
};
var getRole = function(cookieName) {
  var typeInd = getCookie(cookieName);
  return typeInd;
};

var getGlobalId = function(cookieName) {
  var globalId = getCookie(cookieName);
  return globalId;
};

var getZipcode = function(cookieName) {
  var zip = getCookie(cookieName);
  return zip;
};

var getState = function(cookieName) {
  var state = getCookie(cookieName);
  return state;
};

var getCookie = function(cookieName) {
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") cookie = cookie.substring(1);
    if (cookie.indexOf(name) == 0)
      return cookie.substring(name.length, cookie.length);
  }
  return "";
};

var mobilecheck = function() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

var tabletcheck = function() {
  var check = false;
  (function(a) {
    if (/Tablet|iPad|iPod/i.test(a)) check = true;
  })(navigator.userAgent);

  return check;
};

var getPlatform = function() {
  var platform = "desktop";

  if (tabletcheck()) {
    platform = "tablet";
  } else if (mobilecheck()) {
    platform = "mobile";
  }
  return platform;
};