import Report, { IReport } from "../report";
import * as s from "./styles";
import GoodIcon from "../../imgs/GoodIcon.svg";
import BadIcon from "../../imgs/BadIcon.svg";
import SosoIcon from "../../imgs/SosoIcon.svg";
import { useRecoilValue } from "recoil";
import { stdDuration, stdNewsList } from "../../store/standard";
import { comDuration, comNewsList } from "../../store/compare";
import { useState } from "react";

const News = () => {

  const stdDurate = useRecoilValue(stdDuration);
  const stdNewslist = useRecoilValue(stdNewsList);

  const comDurate = useRecoilValue(comDuration);
  const comNewslist = useRecoilValue(comNewsList);

  const [stdSelectedNews, setStdSelectedNews] = useState<IReport>({});
  const handleStdNewsItemClick = (news: IReport) => {
    setStdSelectedNews(news);
    console.log({news});
  };

  const [comSelectedNews, setComSelectedNews] = useState<IReport>({});
  const handleComNewsItemClick = (news: IReport) => {
    setComSelectedNews(news);
  };

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <s.Wrapper>
      <s.Title>핵심 뉴스 기사</s.Title>
      <s.ReportWrapper>
        <s.ReportContainer>
          <s.ReportHeader>
            <s.ReportTitle>기준 시점 핵심 뉴스 기사</s.ReportTitle>
            <s.ReportDuration>{stdDurate.startDate} ~ {stdDurate.endDate}</s.ReportDuration>
          </s.ReportHeader>

          {
            stdDurate.startDate === "" ? 
            <s.NoInformation>정보가 없습니다.</s.NoInformation> :
            <s.ReportBody>
              <s.ReportGrid>
                {
                  stdNewslist.map((news, index) => {
                    return (
                      <div onClick={() => handleStdNewsItemClick(news)}>
                        <Report title={news.title} source={news.source} link={news.link}/>
                      </div>
                    )
                  })
                }
              </s.ReportGrid>

              <s.ReportSummary>
                <s.SummaryWrapper>
                  {stdSelectedNews.summary}
                  <s.SummaryLink
                    onClick={() => handleLinkClick(stdSelectedNews.link!)}
                  >기사 원문 링크로 이동</s.SummaryLink>
                </s.SummaryWrapper>
                {
                  stdSelectedNews.score! > 0 ?
                  <s.BadIcon src={GoodIcon} alt="상승"/> :
                  stdSelectedNews.score! < 0 ?
                  <s.BadIcon src={BadIcon} alt="하락" /> :
                  <s.BadIcon src={SosoIcon} alt="중립" />
                }
              </s.ReportSummary>
            </s.ReportBody>
          }
        </s.ReportContainer>

        <s.ReportVerticalLine />

        <s.ReportContainer>
          <s.ReportHeader>
              <s.ReportTitle>비교 시점 핵심 뉴스 기사</s.ReportTitle>
              <s.ReportDuration>{comDurate.startDate} ~ {comDurate.endDate}</s.ReportDuration>
            </s.ReportHeader>

            {
              comDurate.startDate === "" ? 
              <s.NoInformation>정보가 없습니다.</s.NoInformation> :
              <s.ReportBody>
                <s.ReportGrid>
                {
                  comNewslist.map((news, index) => {
                    return (
                      <s.ReportLayout onClick={() => handleComNewsItemClick(news)}>
                        <Report title={news.title} source={news.source} link={news.link}/>
                      </s.ReportLayout>                  
                    )
                  })
                }
                </s.ReportGrid>

                <s.ReportSummary>
                  <s.SummaryWrapper>
                    {comSelectedNews.summary}
                    <s.SummaryLink 
                      onClick={() => handleLinkClick(comSelectedNews.link!)}
                    >
                    기사 원문 링크로 이동</s.SummaryLink>
                  </s.SummaryWrapper>
                  {
                    comSelectedNews.score! > 0 ?
                    <s.BadIcon src={GoodIcon} alt="상승"/> :
                    comSelectedNews.score! < 0 ?
                    <s.BadIcon src={BadIcon} alt="하락" /> :
                    <s.BadIcon src={SosoIcon} alt="중립" />
                  }
                </s.ReportSummary>
            </s.ReportBody>
            }
        </s.ReportContainer>
      </s.ReportWrapper>
    </s.Wrapper>
  )
}

export default News;