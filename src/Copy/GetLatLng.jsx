import React, {useEffect} from "react"



function GetLatLng(props) {
    console.log(props)
    var pattern = /!3d([\d.]+)!4d([\d.]+)/;
    var match = props[5].match(pattern);

    if (match) {
        var latitude = parseFloat(match[1]);
        var longitude = parseFloat(match[2]);
        console.log(longitude, latitude);
    } else {
        return console.log("Not Found");
    }

    function getLat(){

    }

    function getLng(){
        
    }
    return(
        null
    )
 return null;   
}

export default GetLatLng;

/*URL 형식 분석: 링크를 보면 !3d와 !4d라는 키워드가 좌표를 나타내는 것을 알 수 있습니다.
정규 표현식 사용: URL에서 !3d와 !4d 뒤에 따라오는 숫자와 소수점을 추출하기 위해 정규 표현식을 사용할 수 있습니다.
문자열 처리: 추출된 문자열을 실수형으로 변환하여 좌표값을 얻을 수 있습니다.
*/