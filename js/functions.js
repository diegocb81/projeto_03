window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.436274,-48.405307),
            scrollWheel: false,
            zoom: 10,
            MapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }
    initialize();
}