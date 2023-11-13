// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// swagger 설정

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/re1.jpg",
      discount: 47,
      price: 6090,
      desc: "[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등",
      url: "a.html",
    },
    good_2: {
      image: "images/re2.jpg",
      discount: 0,
      price: 12900,
      desc: "유혜광 통등심돈까스 10장 (총 5팩)",
      url: "a.html",
    },
    good_3: {
      image: "images/re3.jpg",
      discount: 42,
      price: 12900,
      desc: "[10/31 단하루/한정수량] 매일 어메이징 오트 언스위트 190ml 24팩 + 오리지널 6팩 증정",
      url: "a.html",
    },
    good_4: {
      image: "images/re4.jpg",
      discount: 2,
      price: 8240,
      desc: "단하루! 베베숲 센시티브 20매 휴대 캡 12팩 외 휴대용 아기 물티슈 모음 / 외출 필수품",
      url: "a.html",
    },
    good_5: {
      image: "images/re5.jpg",
      discount: 22,
      price: 3900,
      desc: "★10월 마지막!★ 베어파우 키즈 방한 패딩 양털 부츠 베이비 남아 여아 아기 어린이 유아",
      url: "a.html",
    },
    good_6: {
      image: "images/re6.jpg",
      discount: 29,
      price: 34900,
      desc: "[스포츠파크]  뉴발란스 남성 UNI 에센셜 스몰로고 맨투맨 4종택1",
      url: "a.html",
    },
    good_7: {
      image: "images/re7.jpg",
      discount: 2,
      price: 22220,
      desc: "[더쎈위크]  롯데빼빼로 3종 x 20갑 (오리지널/아몬드/초코필드) 골라담기",
      url: "a.html",
    },
    good_8: {
      image: "images/re8.jpg",
      discount: 35,
      price: 26900,
      desc: "[한정수량특가]  한양식품 국내산 꽃보다오징어 오리지날 260g+260g",
      url: "a.html",
    },
    good_9: {
      image: "images/re9.jpg",
      discount: 14,
      price: 18260,
      desc: "샤오미 미지아 가습기2/미지아 스마트 살균가습기2/MJJSQ06DY/관부가세포함",
      url: "a.html",
    },
    good_10: {
      image: "images/re10.jpg",
      discount: 18,
      price: 2930,
      desc: "[쇼핑앱특가2400원] 아이팝 무라벨 먹는샘물 생수 2L*6펫 / 하이트진로",
      url: "a.html",
    },
    good_11: {
      image: "images/re11.jpg",
      discount: 25,
      price: 10410,
      desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송) ",
      url: "a.html",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});

// tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {
      total: 9,
      tour_1: {
        image: "images/to1.jpg",
        badge: "강력특가",
        benefit: "디럭스 킹, 정원뷰",
        name: "롤링힐스 호텔",
        price: 199000,
        url: "b.html"
      },
      tour_2: {
        image: "images/to2.jpg",
        badge: "강력특가",
        benefit: "패밀리 투룸 로프트(21평)",
        name: "어반스테이 여수웅천",
        price: 63900,
        url: "b.html"
      },
      tour_3: {
        image: "images/to3.png",
        badge: "강력특가",
        benefit: "디럭스 킹, 부분바다 전망, 리뉴얼 객실",
        name: "해운대 썬클라우드 호텔",
        price: 70000,
        url: "b.html"
      },
      tour_4: {
        image: "images/to4.jpg",
        badge: "강력특가",
        benefit: "룸온니 초특가",
        name: "인터컨티넨탈 알펜시아 평창",
        price: 153648,
        url: "b.html"
      },
      tour_5: {
        image: "images/to5.jpg",
        badge: "국적기직항",
        benefit: "아시아나항공,특급호텔",
        name: "북경/만리장성/서커스/이화원/전일정쉐라톤 4일",
        price: 299000,
        url: "b.html"
      },
      tour_6: {
        image: "images/to6.webp",
        badge: "오사카",
        benefit: "닛폰바시역 도보 5분",
        name: "소테츠 그랜드 프레사 오사카 남바",
        price: 86006,
        url: "b.html"
      },
      tour_7: {
        image: "images/to7.jpg",
        badge: "소아동반인기",
        benefit: "얼리 체크인 or 레이트 체크아웃 포함",
        name: "[더욱 오래 단둘이]푸꾸옥 5일_특급서비스 얼리체크인OR레이트체크아웃 풀만리조트",
        price: 740000,
        url: "b.html"
      },
      tour_8: {
        image: "images/to8.jpg",
        badge: "강력특가",
        benefit: "스탠다드 더블",
        name: "글래드 여의도",
        price: 134869,
        url: "b.html"
      },
      tour_9: {
        image: "images/to9.webp",
        badge: "방콕",
        benefit: "수라삭 BTS 스카이트레인역 접근성 GOOD!",
        name: "이스틴 그랜드 호텔 사톤",
        price: 159144,
        url: "b.html"
      }    
  };
  res.send(result);
});

// ticket 영역에 출력할 자료 요청
app.get("/ticket", (req, res) => {
  const result = {
    total: 8,
    ticket_1: {
      image: "images/ti1.gif",
      rank: 1,
      name: "뮤지컬 <몬테크리스토>",
      place: "충무아트센터 대극장",
      date: "2023.11.21 - 2024.02.25",
      class: "ticket-good-badge-blue",
      badge: "좌석우위",
      url: "c.html"
    },
    ticket_2: {
      image: "images/ti2.gif",
      rank: 2,
      name: "태양의서커스 <루치아>",
      place: "잠실종합운동장 내 빅탑",
      date: "2023.10.25 - 2023.12.31",
      class: "ticket-good-badge-blue",
      badge: "좌석우위",
      url: "c.html"
    },
    ticket_3: {
      image: "images/ti3.gif",
      rank: 3,
      name: "뮤지컬 <스토리오브마이라이프>",
      place: "두산아트센터 연강홀",
      date: "2023.11.30 - 2024.02.18",
      class: "ticket-good-badge-blue",
      badge: "좌석우위",
      url: "c.html"
    },
    ticket_4: {
      image: "images/ti4.gif",
      rank: 4,
      name: "뮤지컬 <렌트>",
      place: "coex 신한카드 artium",
      date: "2023.11.11 - 2024.02.25",
      class: "ticket-good-badge-red",
      badge: "단독판매",
      url: "c.html"
    },
    ticket_5: {
      image: "images/ti5.gif",
      rank: 5,
      name: "태양의서커스 <루치아> - 부산",
      place: "신세계 센텀시티 내 빅탑",
      date: "2024.01.13 - 2024.02.04",
      class: "ticket-good-badge-blue",
      badge: "좌석우위",
      url: "c.html"
    },
    ticket_6: {
      image: "images/ti6.gif",
      rank: 6,
      name: "뮤지컬 <레베카> 10주년 기념공연",
      place: "블루스퀘어 신한카드홀",
      date: "2023.08.19 - 2023.11.19",
      class: "ticket-good-badge-blue",
      badge: "좌석우위",
      url: "c.html"
    },
    ticket_7: {
      image: "images/ti7.gif",
      rank: 7,
      name: "뮤지컬 <레미제라블>",
      place: "블루스퀘어 신한카드홀",
      date: "2023.11.30 - 2024.03.10",
      class: "ticket-good-badge-red",
      badge: "단독판매",
      url: "c.html"
    },
    ticket_8: {
      url: "go,html"
    }
  };
  res.send(result);
});

// live 영역에 출력할 자료 요청
app.get("/live", (req, res) => {
  const result = {
    total: 8,
    live_1: {
      live_info: {
        image: "images/live1.jpg",
        state: "방송예정",
        title: "[에듀트립] 글로벌 캠프 첫방 기념 최초 할인! 채팅 참여만 해도 경품 추첨",
        url: "d.html"
      },
  
      live_day: {
        date: "11월 08일 (수)",
        time: "11:00"
      },
  
      live_good: {
        good_image: "images/live_sub1.png",
        good_title: "새로운 여행, 컨셉 트립 기획전",
        good_discount: 0,
        good_price: 0,
        good_url: "good.html"
      }
    },
    live_2: {
      live_info: {
        image: "images/live2.png",
        state: "방송예정",
        title: "제주 자연 속에서 즐기는 온전한 쉼 ✨ 파르나스 호텔 제주",
        url: "d.html"
      },
  
      live_day: {
        date: "11월 23일 (목)",
        time: "19:00"
      },
  
      live_good: {
        good_image: "",
        good_title: "",
        good_discount: 0,
        good_price: 0,
        good_url: ""
      }
    },
    live_3: {
      live_info: {
        image: "images/live3.png",
        state: "VOD",
        title: "네스트호텔 최대 73% 라이브특가",
        url: "d.html"
      },
  
      live_day: {
        date: "",
        time: ""
      },
  
      live_good: {
        good_image: "images/live_sub3.jpg",
        good_title: "네스트호텔 라이브특가 구매하러 가기!",
        good_discount: 73,
        good_price: 125100,
        good_url: "good.html"
      }
    },
    live_4: {
      live_info: {
        image: "images/live4.jpg",
        state: "VOD",
        title: "[나트랑] 스완도르 올인클루시브 5일 70만원대~",
        url: "d.html"
      },
  
      live_day: {
        date: "",
        time: ""
      },
  
      live_good: {
        good_image: "images/live_sub4.png",
        good_title: "[카쇼라X스완도르 리조트] 올인클루시브 나트랑 3박 5일",
        good_discount: 0,
        good_price: 749000,
        good_url: "good.html"
      }
    },
    live_5: {
      live_info: {
        image: "images/live5.jpg",
        state: "VOD",
        title: "전라도 특집 여수/전주/광주",
        url: "d.html"
      },
  
      live_day: {
        date: "",
        time: ""
      },
  
      live_good: {
        good_image: "images/live_sub5.jpg",
        good_title: "히든베이 호텔",
        good_discount: 81,
        good_price: 84950,
        good_url: "good.html"
      }
    },
    live_6: {
      live_info: {
        image: "images/live6.jpg",
        state: "VOD",
        title: "진에어 동계 잔여석 & 3월 출발 단독 특가! 방송 중에만 제휴카드로 결제시 15% 추가 할인 🎁",
        url: "d.html"
      },
  
      live_day: {
        date: "",
        time: ""
      },
  
      live_good: {
        good_image: "images/live_sub6.jpg",
        good_title: "[실시간 항공권] 인천 ↔ 오사카",
        good_discount: 0,
        good_price: 217900,
        good_url: "good.html"
      }
    },
    live_7: {
      live_info: {
        image: "images/live7.jpg",
        state: "VOD",
        title: "용평리조트 최대 85% 라이브 특가! 7만원대~",
        url: "d.html"
      },
  
      live_day: {
        date: "",
        time: ""
      },
  
      live_good: {
        good_image: "images/live_sub7.jpg",
        good_title: "용평리조트",
        good_discount: 80,
        good_price: 72000,
        good_url: "good.html"
      }
    },
    live_8: {
      live_info: {
        image: "images/live8.jpg",
        state: "VOD",
        title: "[이달의 여행] 코타키나발루 특가를 다 모았다!",
        url: "d.html"
      },
  
      live_day: {
        date: "",
        time: ""
      },
  
      live_good: {
        good_image: "images/live_sub8.png",
        good_title: "[이달의 여행] 코타키나발루 특가모음🎉",
        good_discount: 0,
        good_price: 0,
        good_url: "good.html"
      }
    }
  };
  res.send(result);
});

// books 영역에 출력할 자료 요청
app.get("/books", (req, res) => {
  const result = {
    total: 10,
    books_1: {
      image: "images/book1.jpg",
      name: "블루 아카이브 2주년 기념 Ost [Kit 앨범",
      price: 32000,
      url: "e.html"
    },
    books_2: {
      image: "images/book2.jpg",
      name: "더 그레이트 비트코인",
      price: 31500,
      url: "e.html"
    },
    books_3: {
      image: "images/book3.jpg",
      name: "기적의 자세요정",
      price: 19800,
      url: "e.html"
    },
    books_4: {
      image: "images/book4.jpg",
      name: "역사는 반복된다",
      price: 15750,
      url: "e.html"
    },
    books_5: {
      image: "images/book5.jpg",
      name: "최애의 아이 12",
      price: 5400,
      url: "e.html"
    },
    books_6: {
      image: "images/book6.jpg",
      name: "세이노의 가르침",
      price: 6480,
      url: "e.html"
    },
    books_7: {
      image: "images/book7.jpg",
      name: "[2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등",
      price: 6560,
      url: "e.html"
    },
    books_8: {
      image: "images/book8.jpg",
      name: "코스모폴리탄 11월호 - 표지 3종 C형 수지 / 부록없음",
      price: 6300,
      url: "e.html"
    },
    books_9: {
      image: "images/book9.jpg",
      name: "연인 대본집 1",
      price: 20700,
      url: "e.html"
    },
    books_10: {
      image: "images/book10.jpg",
      name: "최태성의 365 한국사 일력",
      price: 19800,
      url: "e.html"
    }
  };
  res.send(result);
});

// events 영역에 출력할 자료 요청
app.get("/events", (req, res) => {
  const result = {
    total: 20,
  events_1: {
    file: "images/ev1.jpg",
    url: "f.html"
  },
  events_2: {
    file: "images/ev2.jpg",
    url: "f.html"
  },
  events_3: {
    file: "images/ev3.jpg",
    url: "f.html"
  },
  events_4: {
    file: "images/ev4.jpg",
    url: "f.html"
  },
  events_5: {
    file: "images/ev5.jpg",
    url: "f.html"
  },
  events_6: {
    file: "images/ev6.jpg",
    url: "f.html"
  },
  events_7: {
    file: "images/ev7.jpg",
    url: "f.html"
  },
  events_8: {
    file: "images/ev8.jpg",
    url: "f.html"
  },
  events_9: {
    file: "images/ev9.png",
    url: "f.html"
  },
  events_10: {
    file: "images/ev10.jpg",
    url: "f.html"
  },
  events_11: {
    file: "images/ev11.png",
    url: "f.html"
  },
  events_12: {
    file: "images/ev12.png",
    url: "f.html"
  },
  events_13: {
    file: "images/ev13.jpg",
    url: "f.html"
  },
  events_14: {
    file: "images/ev14.jpg",
    url: "f.html"
  },
  events_15: {
    file: "images/ev15.jpg",
    url: "f.html"
  },
  events_16: {
    file: "images/ev16.jpg",
    url: "f.html"
  },
  events_17: {
    file: "images/ev17.jpg",
    url: "f.html"
  },
  events_18: {
    file: "images/ev18.jpg",
    url: "f.html"
  },
  events_19: {
    file: "images/ev19.jpg",
    url: "f.html"
  },
  events_20: {
    file: "images/ev20.jpg",
    url: "f.html"
  }
  };
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
