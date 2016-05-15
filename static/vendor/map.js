// Tutorial: https://developers.google.com/maps/documentation/javascript/tutorial

function initMap() {

  // Specify features and elements to define styles.
  var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];




  var myLatlng = new google.maps.LatLng(-0.207412, -78.487039); // Set coordinates.
  var mapOptions = {
    scrollwheel: false,
    styles: styles, // Apply the map style array to the map.
    zoom: 16,
    center: myLatlng
  };
     var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Henry LLamuca</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Descripción:</b>, Lorem <b>Caracteristicas</b>, alto ' +
      'se encontraba dentro de su hogar '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road.'+
      'Heritage Site.</p>'+
      '<p>Web: Henry Llamuca, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello! We Are Here. :)",
      icon: "https://graph.facebook.com/100000837725196/picture?type=small",
  });


      var marker1 = new google.maps.Marker({
      position: new google.maps.LatLng(-0.208560, -78.490697),
      title:"Hello! We Are Here. :)",
           icon: "https://graph.facebook.com/1257377985/picture?type=small",
  });


      var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(-0.207037, -78.489512),
      title:"Hello! We Are Here. :)",

           icon: "https://graph.facebook.com/100000132685182/picture?type=small",
  });


      var marker3 = new google.maps.Marker({
      position: new google.maps.LatLng(-0.212928, -78.498435),
      title:"Hello! We Are Here. :)",

           icon: "https://graph.facebook.com/1289455562/picture?type=small",
  });

    var marker4 = new google.maps.Marker({
      position: new google.maps.LatLng(-0.212928, -78.478435),
      title:"Hello! We Are Here. :)",

           icon: "http://www.3wrnd.com/images/phone.png",
  });
     var marker5 = new google.maps.Marker({
      position: new google.maps.LatLng(-0.211928, -78.489435),
      title:"Hello! We Are Here. :)",

           icon: "http://www.3wrnd.com/images/phone.png",
  });
     var marker6 = new google.maps.Marker({
      position: new google.maps.LatLng(-0.213928, -78.478435),
      title:"Hello! We Are Here. :)",

           icon: "http://www.3wrnd.com/images/phone.png",
  });
  // To add the marker to the map, call setMap();
  marker.setMap(map);
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });


     var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">0991438754</h1>'+
      '<div id="bodyContent">'+
             '<b>Reportado:</b> Hace 5 minutos'+
      '</div>'+
      '</div>';
      var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
      marker4.setMap(map);
    marker4.addListener('click', function() {
    infowindow1.open(map, marker4);
  });
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
     marker4.setMap(map);
     marker5.setMap(map);
     marker6.setMap(map);
}