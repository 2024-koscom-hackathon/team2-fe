import * as s from "./styles";
import CurrentChart from '../../components/charts/current-chart';
import PastChart from '../../components/charts/past-chart';
import SimilarList from "../../components/similarlist";
import MacroInfo from "../../components/macroinfo";
import News from "../../components/news";
import Disclosure from "../../components/disclosure";
import Charts from "../../components/charts";

const MainPage = () => {
  return (
    <s.Wrapper>
      <Charts />

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