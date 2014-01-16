var common;

common || (common = {});

common.util || (common.util = {});

(function() {
    Ti.Geolocation.preferredProvider = "gps";
    common.util.alert = function() {
        alert("test namespace");
    };
    common.util.geolocationEnabled = function() {
        if (false === Ti.Geolocation.locationServicesEnabled) return false;
        if ("android" != Ti.Platform.osname) switch (Ti.Geolocation.locationServicesAuthorization) {
          case Ti.Geolocation.AUTHORIZATION_DENIED:
          case Ti.Geolocation.AUTHORIZATION_RESTRICTED:
            return false;
        }
        return true;
    };
    exports.check = common.util;
})();