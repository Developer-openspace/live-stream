import { Err, geoPostion } from "./types/types.js"

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(()=>console.log('sw registered'))
    .catch((err)=>console.log('sw not registerd', err))
}

//geolocation
const successCallback=(position:geoPostion)=>{
    const {latitude, longitude}= position.coords;
    console.log(latitude,longitude)
}
const errorCallback=(error:Err)=>{
    console.log(error.message);
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



//checking and asking permission
if(Notification.permission === 'granted'){
    //showNotification();
 }else if(Notification.permission !== 'denied'){
     Notification.requestPermission().then(permission =>{
         if(permission === "granted"){
             //showNotification();
         }
     });
 };

