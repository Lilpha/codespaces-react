import { Map, MapInfoWindow } from "react-kakao-maps-sdk"

import useKakaoLoader from "./useKakaoLoader"

const styles = {
  inlineElem :{display:'inline-block'},
  width: "50vw",
  height: "90vh",
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
      level={3} // 지도의 확대 레벨
    >

    <MapInfoWindow // 인포윈도우를 생성하고 지도에 표시합니다
        position={{
          // 인포윈도우가 표시될 위치입니다
          lat: 33.450701,
          lng: 126.570667,
        }}
        removable={true} // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      >
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
      </MapInfoWindow>
  </Map>  
)
}
