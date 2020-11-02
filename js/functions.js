window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.436274,-48.405307),
            scrollWheel: false,
            zoom: 12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("mapa"),mapProp);
    }

    function addMarker(lat, long, icon, content,click){
        var latLng = {'lat':lat, 'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxwidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        if(click == true){
            google.maps.event.addListener(marker, 'click' ,function(){
                infoWindow.open(map, marker);
        });  
        }else{
            infoWindow.open(map, marker);
        }
        
    }
    
    initialize();

    var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black">DAST<br>Travessa Montevidéu, 98 - CEP:88058-083 - Ingleses</p>';
    addMarker(-27.436274, -48.405307,'' ,conteudo,true);

}