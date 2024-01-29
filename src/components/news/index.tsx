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
                요약어쩌구..요약어쩌구..요약어쩌구..요약어쩌구..요약어쩌구..
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
                요약어쩌구..요약어쩌구..요약어쩌구..요약어쩌구..요약어쩌구..
                <s.BadIcon src={BadIcon} alt="하락" />
              </s.ReportSummary>

          </s.ReportBody>
        </s.ReportContainer>
      </s.ReportWrapper>
    </s.Wrapper>
  )
}

export default News;