import { ChangeEvent, useState } from "react";
import CurrentChart from "./current-chart";
import PastChart from "./past-chart";
import * as s from "./styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { stockInfo, stdStockValue } from "../../store/stocks";
import StandardAPI from "../../api/StandardAPI";
import { stdDisplosureCurrent, stdDisplosurePast, stdDuration, stdMacroInfo, stdNewsList, stdSimilarPatternList } from "../../store/standard";
import StockInfoAPI from "../../api/StockInfoAPI";
import { IStockVal } from "../header";

const Charts = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  }

  const onChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  }

  /* 종목 코드 */
  const scode = useRecoilValue(stockInfo).scode;

  /* 기준 기간 */
  const setStdDuration = useSetRecoilState(stdDuration); // 기간
  const setStdDisplosureCurrent = useSetRecoilState(stdDisplosureCurrent); // 공시 - 당기
  const setStdDisplosurePast = useSetRecoilState(stdDisplosurePast); // 공시 - 전기
  const setStdMacroInfo = useSetRecoilState(stdMacroInfo); // 거시경제지표
  const setStdNewsList = useSetRecoilState(stdNewsList); // 뉴스기사
  const setStdSimilarPatternList = useSetRecoilState(stdSimilarPatternList); // 유사패턴리스트

  const setStockValue = useSetRecoilState(stdStockValue); // 기준차트 시세정보 setter

  const onClickSubmitBtn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log({scode});
    await StandardAPI.getStandardInfo(scode, startDate, endDate)
      .then((res) => {
        console.log({res});

        // atom setter
        setStdDuration({startDate: startDate, endDate: endDate});
        setStdDisplosureCurrent(res.financialInfoResCurrent);
        setStdDisplosurePast(res.financialInfoResPast);
        setStdMacroInfo(res.macroInfoRes[0]);
        setStdNewsList(res.newsRes);
        setStdSimilarPatternList(res.patternListRes);

      })
      .catch((err) => {
        console.error({err});
        return null;
      }); // 기준기간 정보 setter
    
    await StockInfoAPI.getStockDurationInfo(scode, startDate, endDate)
      .then((res) => {
        console.log({res});
        const transformedData = res.map((stockVal: IStockVal) => ({
          x: new Date(stockVal.date).getTime(),
          y: [stockVal.openingPrice, stockVal.minPrice, stockVal.maxPrice, stockVal.closingPrice]
        }));
        console.log({transformedData});
        setStockValue(transformedData);
      })
      .catch((err) => {
        console.error({err});
        return null;
      }); // 기준기간 시세정보 setter

  }

  return (
    <s.Wrapper>
      <s.ChartContainer>
        <s.Title>기준 차트</s.Title>
        <CurrentChart />
      </s.ChartContainer>

      <s.InputContainer>
        <s.InputTitle>시작 일자</s.InputTitle>
        <s.InputStart 
          type="date"
          value={startDate}
          onChange={onChangeStartDate}
        />

        <s.InputVerticalLine />

        <s.InputTitle>끝 일자</s.InputTitle>
        <s.InputEnd 
          type="date"
          value={endDate}
          onChange={onChangeEndDate}
        />

        <s.SubmitBtn
          onClick={onClickSubmitBtn}
        >검색</s.SubmitBtn>
      </s.InputContainer>

      <s.ChartContainer>
        <s.Title>비교 차트</s.Title>
        <PastChart />
      </s.ChartContainer>
    </s.Wrapper>
  )
}

export default Charts;