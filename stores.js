// 참여 매장 데이터 — 매장 추가·수정은 이 파일만 고치면 됩니다.
// place: 네이버 스마트플레이스/예약 URL. 비워두면("") 네이버 지도 검색으로 자동 연결됩니다.
const STORES = [
  // 서울
  { region: "서울", name: "강남삼성점", tel: "02-6959-9947", place: "" },
  { region: "서울", name: "마포합정점", tel: "02-325-6336", place: "" },
  { region: "서울", name: "서초양재점", tel: "010-4780-9141", place: "" },
  { region: "서울", name: "역삼점", tel: "02-3453-8220", place: "" },
  { region: "서울", name: "영등포문래점", tel: "02-2676-2600", place: "" },
  { region: "서울", name: "청량리점", tel: "010-8252-4001", place: "" },
  // 경기/인천
  { region: "경기/인천", name: "과천점", tel: "02-504-1500", place: "" },
  { region: "경기/인천", name: "분당백현점", tel: "031-701-7838", place: "" },
  { region: "경기/인천", name: "성남고등점", tel: "031-721-1500", place: "" },
  { region: "경기/인천", name: "인천주안점", tel: "010-8218-5589", place: "" },
  { region: "경기/인천", name: "일산덕이점", tel: "031-921-5565", place: "" },
  { region: "경기/인천", name: "일산풍동점", tel: "031-927-9282", place: "" },
  { region: "경기/인천", name: "평택포승점", tel: "010-3478-5311", place: "" },
  { region: "경기/인천", name: "화성남양점", tel: "010-9991-3335", place: "" },
  { region: "경기/인천", name: "화성향남점", tel: "010-7618-9052", place: "" },
  // 충청도
  { region: "충청도", name: "대덕점", tel: "042-934-0102", place: "" },
  { region: "충청도", name: "서산점", tel: "010-4142-0495", place: "" },
  { region: "충청도", name: "유성점", tel: "042-719-2090", place: "" },
  { region: "충청도", name: "청주사직점", tel: "043-265-7585", place: "" },
  // 강원도
  { region: "강원도", name: "강릉점", tel: "010-2296-8245", place: "" },
  { region: "강원도", name: "문막점", tel: "010-9303-6956", place: "" },
  { region: "강원도", name: "속초점", tel: "010-6565-7771", place: "" },
  // 경상도
  { region: "경상도", name: "대구칠곡점", tel: "010-3005-8225", place: "" },
  { region: "경상도", name: "부산동대신점", tel: "051-256-7788", place: "" },
  { region: "경상도", name: "영주점", tel: "010-3826-4753", place: "" },
  { region: "경상도", name: "울산학산점", tel: "010-9317-3825", place: "" },
  { region: "경상도", name: "진주점", tel: "055-758-3377", place: "" },
  { region: "경상도", name: "포항연일점", tel: "010-3851-6832", place: "" },
  // 전라도
  { region: "전라도", name: "광산IC점", tel: "062-961-2200", place: "" },
  { region: "전라도", name: "광주공항점", tel: "062-268-3506", place: "" },
  { region: "전라도", name: "목포점", tel: "061-803-0031", place: "" },
  { region: "전라도", name: "순천점", tel: "010-9990-3330", place: "" },
  { region: "전라도", name: "용봉IC점", tel: "062-434-1472", place: "" },
  { region: "전라도", name: "전주덕진점", tel: "063-213-3033", place: "" },
  { region: "전라도", name: "전주효자점", tel: "062-223-7473", place: "" },
];
