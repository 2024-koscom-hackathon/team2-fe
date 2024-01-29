import * as s from "./styles";
import CurrentChart from '../../components/charts/current-chart';
import PastChart from '../../components/charts/past-chart';
import SimilarList from "../../components/similarlist";
import MacroInfo from "../../components/macroinfo";
import News from "../../components/news";
import Disclosure from "../../components/disclosure";

const MainPage = () => {
  return (
    <s.Wrapper>
      <s.ChartWrapper>
          <s.ChartContainer>
            <s.Title>기준 차트</s.Title>
            <CurrentChart />
          </s.ChartContainer>

          <s.ChartContainer>
            <s.Title>비교 차트</s.Title>
            <PastChart />
          </s.ChartContainer>
      </s.ChartWrapper>

      <s.InfoWrapper>
        <s.RightTopWrapper>
          <SimilarList />
          <Disclosure />
          <MacroInfo />
        </s.RightTopWrapper>

        <News />
      </s.InfoWrapper>
    </s.Wrapper>
  )
}

export default MainPage;