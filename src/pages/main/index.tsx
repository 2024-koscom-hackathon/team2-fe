import * as s from "./styles";
import CurrentChart from '../../components/charts/current-chart';
import PastChart from '../../components/charts/past-chart';

export const MainPage = () => {
  return (
    <s.Wrapper>
        <s.ChartContainer>
          <div>기준 차트</div>
          <CurrentChart />
          <div>비교 차트</div>
          <PastChart />
        </s.ChartContainer>
    </s.Wrapper>
  )
}
