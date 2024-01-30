import Report from "../report";
import * as s from "./styles";
import GoodIcon from "../../imgs/GoodIcon.svg";
import BadIcon from "../../imgs/BadIcon.svg";

const News = () => {
  return (
    <s.Wrapper>
      <s.Title>핵심 뉴스 기사</s.Title>
      <s.ReportWrapper>
        <s.ReportContainer>
          <s.ReportHeader>
            <s.ReportTitle>기준 시점 핵심 뉴스 기사</s.ReportTitle>
            <s.ReportDuration>{"(2023.02.12 - 2023.02.19)"}</s.ReportDuration>
          </s.ReportHeader>

          <s.ReportBody>
            <s.ReportGrid>
              <Report /><Report /><Report /><Report /><Report />
              <Report /><Report /><Report /><Report /><Report />
            </s.ReportGrid>

            <s.ReportSummary>
            삼성전자의 브랜드 가치가 약간 하락했지만 국내 기업들 중에서 1위를 기록했다. 
            삼성전자의 브랜드 가치는 83조2000억원으로, 작년보다 약 6.3% 감소했다. 
            도널드 트럼프 미국 대통령은 21일 삼성전자와 관련하여 대중국 관세 문제와 관련해 애플 CEO 팀 쿡을 도와야 한다고 말했다. 전에도 이와 비슷한 발언을 한 적이 있다. 
            이로 인해 애플의 중국 제품에 대한 관세 부과가 완화될 가능성이 높아졌다. 코스피 지수 및 삼성전자 주식에 대한 판단은 명시되어 있지 않다.
                <s.BadIcon src={GoodIcon} alt="상승"/>
            </s.ReportSummary>
          </s.ReportBody>
        </s.ReportContainer>

        <s.ReportVerticalLine />

        <s.ReportContainer>
          <s.ReportHeader>
              <s.ReportTitle>비교 시점 핵심 뉴스 기사</s.ReportTitle>
              <s.ReportDuration>{"(2013.09.23 - 2013.09.30)"}</s.ReportDuration>
            </s.ReportHeader>

            <s.ReportBody>
              <s.ReportGrid>
                <Report /><Report /><Report /><Report /><Report />
                <Report /><Report /><Report /><Report /><Report />
              </s.ReportGrid>

              <s.ReportSummary>
              삼성전자는 갤럭시 노트10을 오는 23일에 출시할 예정이며, 출시 국가는 한국을 포함한 70여개국이다. 또한, 갤럭시 노트10은 2가지 크기로 출시되며, S펜과 인피니티 디스플레이가 특징이다. 최근 진행된 국내 사전예약에서도 성공을 이뤘으며, 정식 출시 후 흥행이 기대된다.
                <s.BadIcon src={BadIcon} alt="하락" />
              </s.ReportSummary>

          </s.ReportBody>
        </s.ReportContainer>
      </s.ReportWrapper>
    </s.Wrapper>
  )
}

export default News;