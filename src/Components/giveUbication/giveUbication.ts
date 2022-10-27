export const giveUbication = (setLocation)=>{
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
       setLocation({lng:longitude,lat:latitude,estado:true})
    }
      function error(err) {
        console.log(err.code,err.message);
        console.warn("algo salio mal");
        setLocation({lng:null,lat:null,estado:false})
      }
      if (navigator.geolocation) {
        console.log("Esta cargando la ubicacion");
        
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.error("Geolocation is not supported by your browser")

      }
      

}