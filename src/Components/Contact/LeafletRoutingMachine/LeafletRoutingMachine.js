import React , { useEffect } from "react"
import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import {useMap } from "react-leaflet"

const LeafletRoutingMachine = () => {

    const map = useMap ();
    useEffect (()=>{
        var marker1 = L.marker([35.57472,10.73419]
            // ,
            // {icon:DefaultIcon }
            ).addTo(map);

        map.on("click" ,function(e){
            L.marker([e.latlng.lat,e.latlng.lng])
             L.Routing.control({
            waypoints: [
              L.latLng(35.57472,10.73419),
              L.latLng(e.latlng.lat,e.latlng.lng)
            ],
            lineOptions:{
                styles:[
                    {
                        color:"blue",
                        weight:4,
                        opacity:0.7,
                    },
                ],
            },
            routeWhileDragging:false,
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints:false,
            draggableWaypoints:true,
            fitSelectedRoutes:true,
            showAlternatives:true,

          }).on("routesfound",function(e){
            //   console.log(e)
                    e.routes[0].coordinates.forEach((c,i)=>{
                        setTimeout(()=>{
                            marker1.setLatlng([c.lat,c.lng])
                        },5000*i)
                        // console.log(c)
                    })
          }).addTo(map);
        })
       
    
    },[])  
    return null ;
};

export default LeafletRoutingMachine ;