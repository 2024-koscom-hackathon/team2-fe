import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 26px;
`;

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #0D9FDE;
  border-radius: 10px;
  width: 1500px;
  height: 650px;
  margin-top: 20px;
`;

export const ReportContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 748px;
`;

export const ReportHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  margin-top: 20px;
`;

export const ReportTitle = styled.div`
  display: flex;
  font-size: 20px;
`;

export const ReportDuration = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 10px;
`;

export const ReportBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ReportGrid = styled.div`
  display: grid;
  width: 750px;
  grid-template-columns: 1fr 1fr;
  row-gap: 5px;
  margin-left: 40px;
  margin-top: 20px;
`;

export const ReportVerticalLine = styled.div`
  display: flex;
  width: 1px;
  height: 650px;
  background: #C5C0C0;
`;

export const ReportSummary = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 40px;
  border: 1px solid #0D9FDE;
  border-radius: 10px;
  width: 620px;
  height: 200px;
  overflow: auto;
`;

export const GoodIcon = styled.img`

`;

export const BadIcon = styled.img`

`;