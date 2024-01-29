import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 26px;
`;

export const MacroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid #0D9FDE;
  border-radius: 10px;
  width: 600px;
  height: 300px;
  margin-top: 10px;
`;

export const MacroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MacroHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const SubTitle = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 20px;
`;

export const Datetime = styled.div`
  display: flex;
  font-size: 10px;
  color: #8C8C8C;
  margin-left: 10px;
`;

export const MacroBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 15px;
  column-gap: 15px;
  margin-top: 40px;
`;

export const MacroContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #C5C0C0;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
`;

export const MacroContentsName = styled.div`
  display: flex;
  font-size: 10px;
`;

export const MacroContentsValue = styled.div`
  display: flex;
  font-size: 16px;
`;

export const MacroUpDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MacroIcon = styled.img`
  display: flex;
  width: 10px;
  height: 10px;
`;

export const MacroContentsUp = styled.div`
  display: flex;
  margin-left: 5px;
  color: #FF0000;
`;

export const MacroContentsDown = styled.div`
  display: flex;
  margin-left: 5px;
  color: #0500FF;
`;

export const MacroContentsStay = styled.div`
  display: flex;
  margin-left: 5px;
  color: #6D6D6D;
`;

export const MacroContentsUpRate = styled.div`
  display: flex;
  margin-left: 10px;
  color: #FF0000;
`;

export const MacroContentsDownRate = styled.div`
  display: flex;
  margin-left: 10px;
  color: #0500FF;
`;

export const MacroContentsStayRate = styled.div`
  display: flex;
  margin-left: 10px;
  color: #6D6D6D;
`;

export const MacroVerticalLine = styled.div`
  display: flex;
  width: 1px;  
  height: 300px;
  background: #C5C0C0;
`;