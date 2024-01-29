import * as s from "./styles";
import UpIcon from "../../imgs/UpIcon.svg";
import DownIcon from "../../imgs/DownIcon.svg";
import StayIcon from "../../imgs/StayIcon.svg";

const MacroInfo = () => {
  return (
    <s.Wrapper>
      <s.Title>거시경제 지표</s.Title>
      <s.MacroWrapper>

        <s.MacroContainer>
          <s.MacroHeader>
            <s.SubTitle>기준 시점</s.SubTitle>
            <s.Datetime>2024.01.29</s.Datetime>
          </s.MacroHeader>

          <s.MacroBody>
            <s.MacroContentsWrapper>
              <s.MacroContentsName>미국 USD</s.MacroContentsName>
              <s.MacroContentsValue>1,3337.00</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>1.00</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.12%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>기준 금리</s.MacroContentsName>
              <s.MacroContentsValue>3.5%</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={StayIcon} />
                <s.MacroContentsStay>0.00</s.MacroContentsStay>
                <s.MacroContentsStayRate>+0.00%</s.MacroContentsStayRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSPI</s.MacroContentsName>
              <s.MacroContentsValue>2,607.31</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={DownIcon} />
                <s.MacroContentsDown>5.16</s.MacroContentsDown>
                <s.MacroContentsDownRate>-1.11%</s.MacroContentsDownRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSDAQ</s.MacroContentsName>
              <s.MacroContentsValue>839.69</s.MacroContentsValue>
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
            <s.Datetime>2015.02.21</s.Datetime>
          </s.MacroHeader>

          <s.MacroBody>
            <s.MacroContentsWrapper>
              <s.MacroContentsName>미국 USD</s.MacroContentsName>
              <s.MacroContentsValue>1,3337.00</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>1.00</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.12%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>기준 금리</s.MacroContentsName>
              <s.MacroContentsValue>3.5%</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={StayIcon} />
                <s.MacroContentsStay>0.00</s.MacroContentsStay>
                <s.MacroContentsStayRate>+0.00%</s.MacroContentsStayRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSPI</s.MacroContentsName>
              <s.MacroContentsValue>2,607.31</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={DownIcon} />
                <s.MacroContentsDown>5.16</s.MacroContentsDown>
                <s.MacroContentsDownRate>-1.11%</s.MacroContentsDownRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>

            <s.MacroContentsWrapper>
              <s.MacroContentsName>KOSDAQ</s.MacroContentsName>
              <s.MacroContentsValue>839.69</s.MacroContentsValue>
              <s.MacroUpDownContainer>
                <s.MacroIcon src={UpIcon} />
                <s.MacroContentsUp>1.12</s.MacroContentsUp>
                <s.MacroContentsUpRate>+0.07%</s.MacroContentsUpRate>
              </s.MacroUpDownContainer> 
            </s.MacroContentsWrapper>
          </s.MacroBody>
        </s.MacroContainer>

      </s.MacroWrapper>
    </s.Wrapper>
  )
}

export default MacroInfo;