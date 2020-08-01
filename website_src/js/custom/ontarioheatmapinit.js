    //
    // // This example requires the Visualization library. Include the libraries=visualization
    // // parameter when you first load the API. For example:
    // // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">
    //
    // var map, heatmap;
    //
    // function initMap() {
    //
    //     $.ajax({
    //         type: 'GET',
    //         url: 'https://apis.covid19-tracker.ca/CoronaDataPHP/data.php?range=JSON_Data_Ontario_Full!A1:L',
    //         dataType: "json",
    //         success: function (data) {
    //
    //             var markers = [];
    //             // * Offset of 8 rows...
    //             for (var i = 1; i < data.length; i++) {
    //
    //                 var marker = { location: new google.maps.LatLng(data[i][10], data[i][11]) };
    //                 markers.push(marker);
    //
    //             }
    //
    //             map = new google.maps.Map(document.getElementById('map'), {
    //                 zoom: 5,
    //                 center: {lat: 50.91367232819836, lng: -83.17382901163407},
    //                 // mapTypeId: 'satellite',
    //                 styles: [
    //                     {
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#f5f5f5"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "elementType": "labels.icon",
    //                         "stylers": [
    //                             {
    //                                 "visibility": "off"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#616161"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "elementType": "labels.text.stroke",
    //                         "stylers": [
    //                             {
    //                                 "color": "#f5f5f5"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "administrative.land_parcel",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#bdbdbd"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "poi",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#eeeeee"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "poi",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#757575"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "poi.park",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#e5e5e5"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "poi.park",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#9e9e9e"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#ffffff"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.arterial",
    //                         "stylers": [
    //                             {
    //                                 "visibility": "off"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.arterial",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#757575"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.highway",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#dadada"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.highway",
    //                         "elementType": "labels",
    //                         "stylers": [
    //                             {
    //                                 "visibility": "off"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.highway",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#616161"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.local",
    //                         "stylers": [
    //                             {
    //                                 "visibility": "off"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "road.local",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#9e9e9e"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "transit.line",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#e5e5e5"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "transit.station",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#eeeeee"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "water",
    //                         "elementType": "geometry",
    //                         "stylers": [
    //                             {
    //                                 "color": "#c9c9c9"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "featureType": "water",
    //                         "elementType": "labels.text.fill",
    //                         "stylers": [
    //                             {
    //                                 "color": "#9e9e9e"
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             });
    //
    //             heatmap = new google.maps.visualization.HeatmapLayer({
    //                 data: markers,
    //                 map: map,
    //                 radius:20
    //             });
    //
    //
    //         }
    //     })
    //
    //
    // }
