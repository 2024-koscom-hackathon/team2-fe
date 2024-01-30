import { atom } from "recoil";

export const stdDuration = atom({
  key: "stdDuration",
  default: {
    startDate: "",
    endDate: ""
  }
}); // 기준 기간

export const stdDisplosureCurrent = atom({
  key: "stdDisplosureCurrent",
  default: {
    sales: 0,
    cogs: 0,
    gross_profit: 0,
    sga_expense: 0,
    op_profit: 0,
    net_income: 0,
    tci: 0
  }
}); // 기준 기간 공시정보 - 당기

export const stdDisplosurePast = atom({
  key: "stdDisplosurePast",
  default: {
    sales: 0,
    cogs: 0,
    gross_profit: 0,
    sga_expense: 0,
    op_profit: 0,
    net_income: 0,
    tci: 0
  }
}); // 기준 기간 공시정보 - 전기

export const stdMacroInfo = atom({
  key: "stdMacroInfo",
  default: {
    year: 0,
    month: 0,
    kospi: 0,
    kosdaq: 0,
    exRate: 0,
    baseRateKr: 0
  }
}); // 기준 기간 거시경제지표

export const stdSimilarPatternList = atom({
  key: "stdSimilarPatternList",
  default: [{
    cfStartDate: "",
    cfEndDate: "",
    rank: 0
  }]
}); // 기준 기간에 대한 유사 패턴 리스트

export const stdNewsList = atom({
  key: "",
  default: [{
    title: "",
    date: "",
    source: "",
    link: "",
    score: 0,
    summary: ""
  }]
}); // 기준 기간 뉴스 리스트
