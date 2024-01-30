import * as s from "./styles";
import UpIcon from "../../imgs/UpIcon.svg";
import DownIcon from "../../imgs/DownIcon.svg";
import StayIcon from "../../imgs/StayIcon.svg";
import { useRecoilValue } from "recoil";
import { stdDuration, stdMacroInfo } from "../../store/standard";
import { comDuration, comMacroInfo } from "../../store/compare";

const MacroInfo = () => {

  const stdDurate = useRecoilValue(stdDuration);
  const comDurate = useRecoilValue(comDuration);

  const stdMacro = useRecoilValue(stdMacroInfo);
  const comMacro = useRecoilValue(comMacroInfo);


  return (
    <s.Wrapper>
      <s.Title>거시경제 지표</s.Title>
      <s.MacroWrapper>

        <s.MacroContainer>
          <s.MacroHeader>
            <s.SubTitle>기준 시점</s.SubTitle>
            <s.Datetime>{stdDurate.startDate}</s.Datetime>
          </s.MacroHeader>

          
          <s.MacroBody>
            <s.MacroContentsWrapper>
              <s.MacroContentsName>미국 USD</s.MacroContentsName>
              <s.MacroContentsValue>{stdMacro.exRate}</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>1.00</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.12%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>기준 금리</s.MacroContentsName>
              <s.MacroContentsValue>{stdMacro.baseRateKr}%</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={StayIcon} />
                <s.MacroContentsStay>0.00</s.MacroContentsStay>
                <s.MacroContentsStayRate>+0.00%</s.MacroContentsStayRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSPI</s.MacroContentsName>
              <s.MacroContentsValue>{stdMacro.kospi}</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={DownIcon} />
                <s.MacroContentsDown>5.16</s.MacroContentsDown>
                <s.MacroContentsDownRate>-1.11%</s.MacroContentsDownRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSDAQ</s.MacroContentsName>
              <s.MacroContentsValue>{stdMacro.kosdaq}</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>1.12</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.07%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>
          </s.MacroBody>
        </s.MacroContainer>


        <s.MacroVerticalLine />

        <s.MacroContainer>
          <s.MacroHeader>
            <s.SubTitle>비교 시점</s.SubTitle>
            <s.Datetime>{comDurate.startDate}</s.Datetime>
          </s.MacroHeader>

          <s.MacroBody>
            <s.MacroContentsWrapper>
              <s.MacroContentsName>미국 USD</s.MacroContentsName>
              <s.MacroContentsValue>{comMacro.exRate}</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>1.00</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.12%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>기준 금리</s.MacroContentsName>
              <s.MacroContentsValue>{comMacro.baseRateKr}%</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={DownIcon} />
                <s.MacroContentsDown>0.5</s.MacroContentsDown>
                <s.MacroContentsDownRate>-0.03%</s.MacroContentsDownRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSPI</s.MacroContentsName>
              <s.MacroContentsValue>{comMacro.kospi}</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={DownIcon} />
                <s.MacroContentsDown>2.92</s.MacroContentsDown>
                <s.MacroContentsDownRate>-0.19%</s.MacroContentsDownRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSDAQ</s.MacroContentsName>
              <s.MacroContentsValue>{comMacro.kosdaq}</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>0.15</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.02%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>
          </s.MacroBody>
        </s.MacroContainer>

      </s.MacroWrapper>
    </s.Wrapper>
  )
}

export default MacroInfo;