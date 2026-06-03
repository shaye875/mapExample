import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect } from "react"

function App() {

useEffect(()=>{
  const map = L.map("map").setView([32.0835, 34.7818],13)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy;OpenStreetMap contributos" })
  .addTo(map)
},[])
  return (
    <div id="map" style={{ height: "100vh", width: "100%" ,margin:0,padding:0}}/>
  )
}

export default App
