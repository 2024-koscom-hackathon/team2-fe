import { useRecoilValue, useSetRecoilState } from "recoil";
import * as s from "./styles";
import { stdSimilarPatternList } from "../../store/standard";
import { comDisplosureCurrent, comDisplosurePast, comDuration, comMacroInfo, comNewsList } from "../../store/compare";
import CompareAPI from "../../api/CompareAPI";
import { comStockValue, stockInfo } from "../../store/stocks";
import StockInfoAPI from "../../api/StockInfoAPI";
import { IStockVal } from "../header";

const SimilarList = () => {
  const stdSimilar = useRecoilValue(stdSimilarPatternList);

  /* 비교 기간 */
  const setComDuration = useSetRecoilState(comDuration); // 기간
  const setComDisplosureCurrent = useSetRecoilState(comDisplosureCurrent); // 공시 - 당기
  const setComDisplosurePast = useSetRecoilState(comDisplosurePast); // 공시 - 전기
  const setComMacroInfo = useSetRecoilState(comMacroInfo); // 거시경제지표
  const setComNewsList = useSetRecoilState(comNewsList); // 뉴스기사

  const scode = useRecoilValue(stockInfo).scode;
  const setStockValue = useSetRecoilState(comStockValue); // 기준차트 시세정보 setter

  const onClickDuration = async (sd: string, ed: string) => {
    await CompareAPI.getCompareInfo(scode, sd, ed)
      .then((res) => {
        console.log({res});

        setComDuration({startDate: sd, endDate: ed});
        setComDisplosureCurrent(res.financialInfoResCurrent);
        setComDisplosurePast(res.financialInfoResPast);
        setComMacroInfo(res.macroInfoRes[0]);
        setComNewsList(res.newsRes);
      })
      .catch((err) => {
        console.error({err});
        return null;
      });
    
    await StockInfoAPI.getStockDurationInfo(scode, sd, ed)
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
      <s.Title>유사 패턴 리스트</s.Title>
      <s.ListWrapper>
        {
          stdSimilar.map((item, index) => {
            return (
              <s.ListItem onClick={() => onClickDuration(item.cfStartDate, item.cfEndDate)}>
                <s.ListIndex>{index+1}.</s.ListIndex>
                <s.ListDate>{item.cfStartDate} ~ {item.cfEndDate}</s.ListDate>
              </s.ListItem>
            )
          })
        }
      </s.ListWrapper>
    </s.Wrapper>
  )
}

export default SimilarList;