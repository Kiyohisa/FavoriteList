var common;
if(!common) common = {};
if (!common.util) common.util = {};
(function(){
	// 名前空間をさらに機能ごとに分割する
	// 今回は共通系の機能を集約しているので util と命名した
	
	Ti.Geolocation.preferredProvider = "gps";
	common.util.alert = function(){
		alert("test namespace");
	};
	
	// 位置情報サービスが有効かどうか確認するメソッド
	common.util.geolocationEnabled = function(){
		if (Ti.Geolocation.locationServicesEnabled === false) {
			return false;
		}
		
		if (Ti.Platform.osname != "android") {
			switch (Ti.Geolocation.locationServicesAuthorization) {
				case Ti.Geolocation.AUTHORIZATION_DENIED:
				case Ti.Geolocation.AUTHORIZATION_RESTRICTED:
					return false;
			}
		}
		
		return true;
	};
	exports.check = common.util;
})();
