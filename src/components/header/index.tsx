import { useState } from "react";
import * as s from "./styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { stockInfo, stockList, stdStockValue } from "../../store/stocks";
import StockInfoAPI from "../../api/StockInfoAPI";

export interface IStockVal {
  date: string;
  openingPrice: number;
  minPrice: number;
  maxPrice: number;
  closingPrice: number;
}

const Header = () => {

  const [s_Info, setS_Info] = useState("");
  const setStockInfo = useSetRecoilState(stockInfo);
  const stockInfoList = useRecoilValue(stockList);
  const setStockValue = useSetRecoilState(stdStockValue);

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") submitSName();
  }

  const submitSName = () => {
    let code = "";
    stockInfoList.find((stock) => {
      if(s_Info === stock.sname) {
        code = stock.scode;
        setStockInfo({sname: stock.sname, scode: stock.scode});
        return true;
      }
    });

    StockInfoAPI.getStockInfo(code)
      .then((res) => {
        console.log({res});
        // 차트 삽입 포맷으로 변환
        const transformedData = res.map((stockVal: IStockVal) => ({
          x: new Date(stockVal.date).getTime(),
          y: [stockVal.openingPrice, stockVal.minPrice, stockVal.maxPrice, stockVal.closingPrice]
        }));
          
        console.log(transformedData);
        // atom 삽입
        setStockValue(transformedData);
      })
      .catch((err) => {
        console.error({err});
        return null;
      })
  }

  const onChangeSInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setS_Info(e.target.value);
  }

  return (
    <s.Wrapper>
      <s.Icon></s.Icon>
      <s.SearchBar 
        placeholder="주식, 종목코드 검색" 
        onChange={onChangeSInfo}
        onKeyDown={handleOnKeyPress}
      />
      <s.Banner></s.Banner>
    </s.Wrapper>
  )
}

export default Header;