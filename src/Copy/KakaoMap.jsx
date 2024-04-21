import { Map } from "react-kakao-maps-sdk"
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
    />
  )
}
