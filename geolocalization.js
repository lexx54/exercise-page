const d=document,
n=navigator;

export function getGeolocation(id){
  const $id=d.getElementById(id),
      option={
        enableHighAccuracy:true,
        timeout:5000,
        maximunAge:0
      };

const succes=(position)=>{
  let coord=position.coords;
  $id.innerHTML=`
  <p>Your position is</p>
  <ul>
    <li>Latitud: ${coord.latitude}</li>
    <li>Longitude: ${coord.longitude}</li>
    <li>accuracy: ${coord.accuracy}</li>
  </ul>
  <a href="https://www.google.com/maps/@${coord.latitude},${coord.longitude}" target="_blank" rel="noopener">Look it here</a>
  `;

  console.log(position)
}

const error = err =>{
  console.log(err)
}

n.geolocation.getCurrentPosition(succes,error,option)
}