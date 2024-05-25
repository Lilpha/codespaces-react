

function test(){
    const [info, setInfo] = useState()
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState()
  
    useEffect(() => {
      if (!map) return
      const ps = new kakao.maps.services.Places()
  
      ps.keywordSearch("이태원 맛집", (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds()
          let markers = []
  
          for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            markers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x,
              },
              content: data[i].place_name,
            })
            // @ts-ignore
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
          }
          setMarkers(markers)
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds)
        }
      })
    }, [map])
  
    return (
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info &&info.content === marker.content && (
              <div style={{color:"#000"}}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    )
  }
  /* 
  var geo = new kakao.maps.services.Geocoder();
  //1111111111111111
  
  var addr = {
    value:'부산 수영구 수영로660번길 45 1층 모퉁이가게'
  }
  
  function goChk() {
      var add = addr.value;
      if(add=="") {
          alert("[필수입력]주소");
          addr.focus();
          return;
      }
   
      var geo = new kakao.maps.services.Geocoder();
  
  
  
      geo.addressSearch(add, function(result, status) {
          if (status == daum.maps.services.Status.OK) {
              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              var lng = result[0].x;
              var lat = result[0].y;
              
              var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords
              });
              
              var infowindow = new kakao.maps.InfoWindow({
                  content: '<div style="width:150px;text-align:center;padding:5px 0;">좌표위치</div>'
              });
  
              infowindow.open(map,marker);
     
              map.setCenter(coords);
  
              $("#coord").html("<br>위도(Lat) : " + lat + "<br><br>경도(Lng) : " + lng);
          
          }else{
              alert('좌표가 검색 되지 않았습니다');
          }
      });
  }
  
  */
  //222222222222222222
  
  