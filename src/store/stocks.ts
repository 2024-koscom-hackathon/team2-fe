import { atom, selector } from "recoil";

export const stockInfo = atom({
  key: "stockInfo",
  default: {
    sname: "",
    scode: ""
  }
});

export const stockList = atom({
  key: "stockList",
  default: [
    {"sname": "삼성전자", "scode": "005930"},
    {"sname": "SK하이닉스", "scode": "000660"},
    {"sname": "LG에너지솔루션","scode": "373220"},
    {"sname": "삼성바이오로직스","scode": "207940"},
    {"sname": "삼성전자우","scode": "005935"},
    {"sname": "셀트리온","scode": "068270"},
    {"sname": "현대차","scode": "005380"},
    {"sname": "기아","scode": "000270"},
    {"sname": "NAVER","scode": "035420"},
    {"sname": "POSCO홀딩스","scode": "005490"}
  ]
});

// export const stockValue = atom({
//   key: "stockValue",
//   default: 
// })