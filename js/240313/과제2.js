const costOfKm = 100
const stations = []
const result = {}

function station(역명, 위도, 경도){
  this.역명 = 역명
  this.위도 = 위도
  this.경도 = 경도
}
station.prototype = {
  cost(station1, station2){
// 출발지
const lat1 = station1.위도
const lon1 = station1.경도

// 목적지
const lat2 = station2.위도
const lon2 = station2.경도

const R = 6371e3; // 지구의 반지름 (meter)

// 좌표를 라디안 단위로 변환
const φ1 = lat1 * Math.PI / 180;
const φ2 = lat2 * Math.PI / 180;
const Δφ = (lat2 - lat1) * Math.PI / 180;
const Δλ = (lon2 - lon1) * Math.PI / 180;

const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
		  Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

const d = R * c; // meter
return Math.round(d/1000 * costOfKm / 100) * 100
// d = 11052555.850341197
  }
}

function makeStation(역명, 위도, 경도){
  const stationEl = new station(역명, 위도, 경도)
  stations.push(stationEl)
}

makeStation('서울역', 37.55620110026294, 126.97223116703012)
makeStation('대전역', 36.332516127741, 127.43421099777726)
makeStation('동대구역', 35.88049128950934, 128.62837657353532)
makeStation('부산역', 35.116613680508806, 129.04009077373016)

function calc(index, n){
  for(let i=index; i<stations.length; i++){
    result[stations[n].역명 +'-'+ stations[i].역명] = stations[0].cost(stations[n],stations[i])
  }
}

for(let n=0; n<stations.length-1; n++){
  switch(n){
    case 0:
      calc(1, n)
    case 1:
      calc(2, n)
    case 2:
      calc(3, n)
  }
}


console.log(result)



// 방법 1
// for(let n=0; n<stations.length; n++){
//   for(let i=0; i<stations.length; i++){
//     result[stations[n].역명 +'-'+ stations[i].역명] = stations[0].cost(stations[n],stations[i])
//   }
// }




// 방법 2
// for(let n=0; n<stations.length-1; n++){
//   result[stations[n].역명 +'-'+ stations[n+1].역명] = stations[0].cost(stations[n],stations[n+1])
// }
// for(let n=0; n<stations.length-2; n++){
//   result[stations[n].역명 +'-'+ stations[n+2].역명] = stations[0].cost(stations[n],stations[n+2])
// }
// for(let n=0; n<stations.length-3; n++){
//   result[stations[n].역명 +'-'+ stations[n+3].역명] = stations[0].cost(stations[n],stations[n+3])
// }