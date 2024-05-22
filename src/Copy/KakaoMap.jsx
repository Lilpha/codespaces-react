import { Map, MapInfoWindow } from "react-kakao-maps-sdk"
import ImageMarker from './ImageMarker'

import list from './ImageMarker';

import useKakaoLoader from "./useKakaoLoader"

const styles = {
  inlineElem :{display:'inline-block'},
  width: "50vw",
  height: "90vh",
}

{
  /*
const lati = list[0].lat
const lngi = list[0].lng
const name = list[0].name

console.log (lati, lngi, name)
*/
}
export default function BasicMap() {
  useKakaoLoader()
  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{height :styles.height,width: styles.width}}
      level={20} // 지도의 확대 레벨
    >
      {
        
        list.map(content =>{
          {console.log(content.lat, content.lng)}
          <MapInfoWindow position={{ lat: content.lat, lng: content.lng }}removable={true}>
          <div style={{ padding: "5px", color: "#000" }}>sampleText</div>
        </MapInfoWindow>
        })
      }
  
      
  </Map>  
)
}
