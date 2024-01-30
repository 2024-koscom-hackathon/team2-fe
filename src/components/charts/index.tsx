import { ChangeEvent, useState } from "react";
import CurrentChart from "./current-chart";
import PastChart from "./past-chart";
import * as s from "./styles";

const Charts = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setStartDate(e.target.value);
  }

  const onChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEndDate(e.target.value);
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
      </s.InputContainer>

      <s.ChartContainer>
        <s.Title>비교 차트</s.Title>
        <PastChart />
      </s.ChartContainer>
    </s.Wrapper>
  )
}

export default Charts;