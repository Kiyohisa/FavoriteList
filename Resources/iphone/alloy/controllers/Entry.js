function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    function showCurrentPosition() {
        if (!common.check.geolocationEnabled()) {
            alert("位置情報サービスはサポートされていないか、利用を許可されていません");
            return;
        }
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_REST;
        Ti.Geolocation.getCurrentPosition(function(e) {
            if (e.error) {
                alert(e.error);
                return;
            }
            alert(e.coords);
            var moutainView = Alloy.Globals.Map.createAnnotation({
                latitude: 37.390749,
                longitude: -122.081651,
                title: "Appcelerator Headquarters",
                subtitle: "Mountain View, CA",
                pincolor: Alloy.Globals.Map.ANNOTATION_RED,
                myid: 1
            });
            $.mapView.region = {
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                latitudeDelta: .05,
                longitudeDelta: .01
            };
            $.mapView.addAnnotation(moutainView);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Entry";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.map = Ti.UI.createWindow({
        id: "map",
        title: "現在地"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    showCurrentPosition ? $.__views.map.addEventListener("open", showCurrentPosition) : __defers["$.__views.map!open!showCurrentPosition"] = true;
    $.__views.mapView = Alloy.Globals.Map.createView({
        id: "mapView",
        ns: "Alloy.Globals.Map",
        userLocation: "true"
    });
    $.__views.map.add($.__views.mapView);
    report ? $.__views.mapView.addEventListener("click", report) : __defers["$.__views.mapView!click!report"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var common = {};
    common = require("common/util");
    $.map.open();
    __defers["$.__views.map!open!showCurrentPosition"] && $.__views.map.addEventListener("open", showCurrentPosition);
    __defers["$.__views.mapView!click!report"] && $.__views.mapView.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;