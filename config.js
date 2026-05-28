// =============================================================
// 모바일 청첩장 설정 파일
// 사진 추가 방법:
// 1) assets/images/ 폴더에 photo-02.jpg 같은 이름으로 사진 업로드
// 2) 아래 photos 배열에 { src, alt, title, caption } 한 줄 추가
// =============================================================
window.INVITE_CONFIG = {
  metaTitle: "임석진 ♥ 탐켄치 모바일 청첩장",
  brandTitle: "S ♥ T",

  couple: {
    leftName: "임석진",
    rightName: "탐켄치",
  },

  hero: {
    badge: "SAVE THE DATE",
    headline: "저희, 결혼합니다!",
    subtitle: "평생 함께할 소중한 인연을 만나 저희 두 사람이 하나가 되려 합니다.",
  },

  wedding: {
    // 한국 시간 기준. 날짜 바꾸려면 이 값만 먼저 수정하세요.
    dateISO: "2027-01-09T14:00:00+09:00",
    dateText: "2027.01.09 토요일 오후 2시",
  },

  invitationMessage:
    "두 사람의 앞날을 따뜻하게 축복해 주세요. 참석해 주시는 모든 분께 잊지 못할 웃음을 선물하겠습니다.",

  venue: {
    name: "루나웨딩홀 2층 그랜드볼룸",
    address: "서울특별시 강남구 테헤란로 123",
    notice: "토요일 오후 2시, 지각 시 탐켄치 궁극기 탑승 가능성이 있습니다.",
    // 비워두면 address로 구글 지도 검색 링크가 자동 생성됩니다.
    mapUrl: "",
  },
photos: [
    {
      src: "./assets/images/optimized/photo-01.webp",
      alt: "장난용 청첩장 대표 이미지",
      title: "운명의 투샷",
      caption: "이 조합, 정말 귀합니다.",
    },
    {
      src: "./assets/images/optimized/photo-02.webp",
      alt: "신랑과 탐켄치가 꽃길에서 함께 걷는 사진",
      title: "버진로드 입장",
      caption: "양가 하객 모두가 침묵한 압도적 피지컬 차이.",
    },
    {
      src: "./assets/images/optimized/photo-03.webp",
      alt: "신랑과 탐켄치가 셀카를 찍는 사진",
      title: "셀카 타임",
      caption: "이 정도면 청첩장이 아니라 증거 사진입니다.",
    },
    {
      src: "./assets/images/optimized/photo-04.webp",
      alt: "신랑이 탐켄치에게 케이크를 먹여주는 사진",
      title: "달콤한 한입",
      caption: "케이크보다 달콤하고, 궁극기보다 빠른 사랑.",
    },
    {
      src: "./assets/images/optimized/photo-05.webp",
      alt: "신랑과 탐켄치가 벤치에서 웃고 있는 사진",
      title: "평생 듀오 약속",
      caption: "이제 솔랭은 없습니다. 인생은 듀오큐입니다.",
    },
    {
      src: "./assets/images/optimized/photo-06.webp",
      alt: "신랑과 탐켄치가 반지를 들고 있는 사진",
      title: "반지 교환",
      caption: "작은 반지 하나에 담긴 거대한 혀의 맹세.",
    },
    {
      src: "./assets/images/optimized/photo-07.webp",
      alt: "신랑과 탐켄치가 하트 포즈를 하는 사진",
      title: "하트 시그널",
      caption: "하객 여러분, 지금 보시는 장면은 합성이 맞습니다. 아마도요.",
    },
    {
      src: "./assets/images/optimized/photo-08.webp",
      alt: "신랑과 탐켄치가 부케를 던지는 사진",
      title: "부케 던지는 날",
      caption: "받는 순간 다음 타깃은 당신입니다.",
    },
    {
      src: "./assets/images/optimized/photo-09.webp",
      alt: "신랑과 탐켄치가 노을길을 걷는 사진",
      title: "노을 산책",
      caption: "석양 아래, 둘은 조용히 강을 건넜습니다.",
    },
    {
      src: "./assets/images/optimized/photo-10.webp",
      alt: "신랑과 탐켄치가 어깨동무하고 웃는 사진",
      title: "레전드 가족사진",
      caption: "가족사진인데 왜 보스전 컷신 같죠?",
    },
    {
      src: "./assets/images/optimized/photo-11.webp",
      alt: "신랑과 탐켄치의 해변사진",
      title: "레전드 해변사진",
      caption: "역시 탐켄치는 물이 좋아요",
    },
    {
      src: "./assets/images/optimized/photo-12.webp",
      alt: "셀카",
      title: "셀카",
      caption: "엌ㅋㅋㅋ 얼굴 크기 차이 ㅋㅋㅋ",
    },
    {
      src: "./assets/images/optimized/photo-13.webp",
      alt: "음료",
      title: "음료",
      caption: "따뜻한 해변가에서 한잔 짠!",
    },
    {
      src: "./assets/images/optimized/photo-14.webp",
      alt: "저녁",
      title: "저녁",
      caption: "신혼여행 느낌이 듬뿍나네요~",
    },
    {
      src: "./assets/images/optimized/photo-15.webp",
      alt: "오토바이",
      title: "오토바이",
      caption: "ㅋㅋㅋㅋ 탐켄치는 어디서 타고있나요 ㅋㅋㅋ",
    },
],

  story: [
    {
      title: "첫 만남",
      text: "어느 평범한 날, 운명처럼 마주친 두 사람. 그 순간부터 모두가 눈치챘습니다.",
    },
    {
      title: "확신의 순간",
      text: "함께 웃고, 함께 먹고, 함께 강을 건너며 서로가 인생 듀오임을 깨달았습니다.",
    },
    {
      title: "결혼 발표",
      text: "이제 두 사람은 가족과 친구들 앞에서 전설의 계약을 맺으려 합니다.",
    },
  ],

  defaultGuestbook: [
  { name: "진섭", message: "오전 11:48  잘어울리넴 ㅎㅎ" },
  { name: "진섭", message: "오전 11:48  🥹🥹🥹" },
  { name: "임석진", message: "오전 11:54  ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" },
  { name: "임석진", message: "오전 11:54  신선하네" },
  { name: "이주영", message: "오후 12:46  와 개잘만들었네 ㅋㅋㅋㅋㅋ" },
  { name: "이현창", message: "오후 1:15  오른쪽이 석진이지?" },
  { name: "김진수", message: "오후 1:15  아니 부케임" },
  ],

  footerText: "Made for legendary friendship. No frogs were harmed.",
};
