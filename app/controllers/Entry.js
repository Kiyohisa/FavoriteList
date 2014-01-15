function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " +evt.annotation.myid);
}

//Ti.include('common/util.js');

function showCurrentPosition(){
	// if(!common.util.geolocationEnabled()){
		// alert("位置情報サービスはサポートされていないか、利用を許可されていません");
		// return;
	// }
	Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_REST;
	Ti.Geolocation.getCurrentPosition(function(e) {
		if(e.error){
			alert(e.error);
			return;
		}
		alert(e.coords);
		var moutainView = Alloy.Globals.Map.createAnnotation({
		    latitude:37.390749,
		    longitude:-122.081651,
		    title:"Appcelerator Headquarters",
		    subtitle:'Mountain View, CA',
		    pincolor:Alloy.Globals.Map.ANNOTATION_RED,
		    myid:1 // Custom property to uniquely identify this annotation.
		});
		
		$.mapView.region = {
		latitude:e.coords.latitude, longitude:e.coords.longitude,
		latitudeDelta:0.05, longitudeDelta:0.01,
		};
		$.mapView.addAnnotation(moutainView);
		
	});
}

// var moutainView = Alloy.Globals.Map.createAnnotation({
    // latitude:37.390749,
    // longitude:-122.081651,
    // title:"Appcelerator Headquarters",
    // subtitle:'Mountain View, CA',
    // pincolor:Alloy.Globals.Map.ANNOTATION_RED,
    // myid:1 // Custom property to uniquely identify this annotation.
// });
// 
// $.mapView.region = {
// latitude:33.74511, longitude:-84.38993,
// latitudeDelta:0.01, longitudeDelta:0.01
// };
// $.mapView.addAnnotation(moutainView);

$.map.open();
