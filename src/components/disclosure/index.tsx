import { useState } from "react";
import * as s from "./styles";
import { useRecoilValue } from "recoil";
import { stdDisplosureCurrent, stdDisplosurePast } from "../../store/standard";
import { comDisplosureCurrent, comDisplosurePast } from "../../store/compare";

const Disclosure = () => {

  /* 기준 */
  const stdDispCur = useRecoilValue(stdDisplosureCurrent); // 당기
  const stdDispPast = useRecoilValue(stdDisplosurePast); // 전기
  
  /* 비교 */
  const comDispCur = useRecoilValue(comDisplosureCurrent); // 당기
  const comDispPast = useRecoilValue(comDisplosurePast); // 전기

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
                <s.DisclosureValueTd>{stdDispCur.sales}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.sales}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>매출원가</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispCur.cogs}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.cogs}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>매출총이익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispCur.gross_profit}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.gross_profit}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>판매관리비</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispCur.sga_expense}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.sga_expense}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>영업이익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispCur.op_profit}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.op_profit}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>당기순이익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispCur.net_income}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.net_income}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>총포괄손익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispCur.tci}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{stdDispPast.tci}</s.DisclosureValueTd>
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
                <s.DisclosureValueTd>{comDispCur.sales}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.sales}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>매출원가</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispCur.cogs}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.cogs}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>매출총이익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispCur.gross_profit}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.gross_profit}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>판매관리비</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispCur.sga_expense}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.sga_expense}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>영업이익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispCur.op_profit}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.op_profit}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>당기순이익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispCur.net_income}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.net_income}</s.DisclosureValueTd>
              </tr>
              <tr>
                <s.DisclosureValueTd>총포괄손익</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispCur.tci}</s.DisclosureValueTd>
                <s.DisclosureValueTd>{comDispPast.tci}</s.DisclosureValueTd>
              </tr>
            </tbody>

          </s.DisclosureTable>
        </s.DisclosureContainer>
      </s.DisclosureWrapper>
    </s.Wrapper>
  )
}

export default Disclosure;