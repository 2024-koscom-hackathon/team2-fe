import { useState } from "react";
import * as s from "./styles";

const Disclosure = () => {

  const [stdSales, setStdSales] = useState<string[]>(["11,000,000", "19,000,000"]); // 매출
  const [stdCostSales, setStdCostSales] = useState<string[]>(["11,000,000", "11,000,000"]); // 매출원가
  const [stdProfit, setStdProfit] = useState<string[]>(["31,000,000", "14,000,000"]); // 매출총이익
  const [stdExpense, setStdExpense] = useState<string[]>(["100,000", "200,000"]); // 판매관리비
  const [stdOperating, setStdOperating] = useState<string[]>(["11,000,000", "11,000,000"]); // 영업이익
  const [stdNetIncome, setStdNetIncome] = useState<string[]>(["11,000,000", "11,000,000"]); // 당기순이익
  const [stdTotal, setStdTotal] = useState<string[]>(["11,000,000", "11,000,000"]); // 총포괄손익


  const [comSales, setComSales] = useState<string[]>(["11,000,000", "19,000,000"]); // 매출
  const [comCostSales, setComCostSales] = useState<string[]>(["11,000,000", "11,000,000"]); // 매출원가
  const [comProfit, setComProfit] = useState<string[]>(["31,000,000", "14,000,000"]); // 매출총이익
  const [comExpense, setComExpense] = useState<string[]>(["100,000", "200,000"]); // 판매관리비
  const [comOperating, setComOperating] = useState<string[]>(["11,000,000", "11,000,000"]); // 영업이익
  const [comNetIncome, setComNetIncome] = useState<string[]>(["11,000,000", "11,000,000"]); // 당기순이익
  const [comTotal, setComTotal] = useState<string[]>(["11,000,000", "11,000,000"]); // 총포괄손익

  return (
    <s.Wrapper>
      <s.Title>공시 정보</s.Title>

      <s.DisclosureWrapper>
        <s.DisclosureContainer>
          <s.DisclosureTitle>기준 기간 손익계산서</s.DisclosureTitle>
          <s.DisclosureTable>
            <thead>
              <tr>
                <th></th>
                <th>당기</th>
                <th>전기</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <s.DisclosureValueTd>매출</s.DisclosureValueTd>
                {stdSales.map((el, i) => <s.DisclosureValueTd>{stdSales[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>매출원가</s.DisclosureValueTd>
                {stdCostSales.map((el, i) => <s.DisclosureValueTd>{stdCostSales[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>매출총이익</s.DisclosureValueTd>
                {stdProfit.map((el, i) => <s.DisclosureValueTd>{stdProfit[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>판매관리비</s.DisclosureValueTd>
                {stdExpense.map((el, i) => <s.DisclosureValueTd>{stdExpense[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>영업이익</s.DisclosureValueTd>
                {stdOperating.map((el, i) => <s.DisclosureValueTd>{stdOperating[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>당기순이익</s.DisclosureValueTd>
                {stdNetIncome.map((el, i) => <s.DisclosureValueTd>{stdNetIncome[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>총포괄손익</s.DisclosureValueTd>
                {stdTotal.map((el, i) => <s.DisclosureValueTd>{stdTotal[i]}</s.DisclosureValueTd>)}
              </tr>
            </tbody>

          </s.DisclosureTable>
        </s.DisclosureContainer>

        <s.DisclosureVerticalLine />

        <s.DisclosureContainer>
          <s.DisclosureTitle>비교 기간 손익계산서</s.DisclosureTitle>
          <s.DisclosureTable>
            <thead>
              <tr>
                <th></th>
                <th>당기</th>
                <th>전기</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <s.DisclosureValueTd>매출</s.DisclosureValueTd>
                {comSales.map((el, i) => <s.DisclosureValueTd>{comSales[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>매출원가</s.DisclosureValueTd>
                {comCostSales.map((el, i) => <s.DisclosureValueTd>{comCostSales[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>매출총이익</s.DisclosureValueTd>
                {comProfit.map((el, i) => <s.DisclosureValueTd>{comProfit[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>판매관리비</s.DisclosureValueTd>
                {comExpense.map((el, i) => <s.DisclosureValueTd>{comExpense[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>영업이익</s.DisclosureValueTd>
                {comOperating.map((el, i) => <s.DisclosureValueTd>{comOperating[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>당기순이익</s.DisclosureValueTd>
                {comNetIncome.map((el, i) => <s.DisclosureValueTd>{comNetIncome[i]}</s.DisclosureValueTd>)}
              </tr>
              <tr>
                <s.DisclosureValueTd>총포괄손익</s.DisclosureValueTd>
                {comTotal.map((el, i) => <s.DisclosureValueTd>{comTotal[i]}</s.DisclosureValueTd>)}
              </tr>
            </tbody>

          </s.DisclosureTable>
        </s.DisclosureContainer>
      </s.DisclosureWrapper>
    </s.Wrapper>
  )
}

export default Disclosure;