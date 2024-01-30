import { atom } from "recoil";

export const comDuration = atom({
  key: "comDuration",
  default: {
    startDate: "",
    endDate: ""
  }
}); // 비교 기간

export const comDisplosureCurrent = atom({
  key: "comDisplosureCurrent",
  default: {
    sales: 0,
    cogs: 0,
    gross_profit: 0,
    sga_expense: 0,
    op_profit: 0,
    net_income: 0,
    tci: 0
  }
}); // 비교 기간 공시정보 - 당기

export const comDisplosurePast = atom({
  key: "comDisplosurePast",
  default: {
    sales: 0,
    cogs: 0,
    gross_profit: 0,
    sga_expense: 0,
    op_profit: 0,
    net_income: 0,
    tci: 0
  }
}); // 비교 기간 공시정보 - 전기

export const comMacroInfo = atom({
  key: "comMacroInfo",
  default: {
    year: 0,
    month: 0,
    kospi: 0,
    kosdaq: 0,
    exRate: 0,
    baseRateKr: 0
  }
}); // 비교 기간 거시경제지표


export const comNewsList = atom({
  key: "comNewsList",
  default: [{
    title: "",
    date: "",
    source: "",
    link: "",
    score: 0,
    summary: ""
  }]
}); // 비교 기간 뉴스 리스트
