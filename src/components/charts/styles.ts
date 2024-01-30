import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 870px;
  margin-left: 40px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 200px;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 26px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 800px;
  height: 200px;
  border: 3px solid #0D9FDE;
  border-radius: 10px;
`;

export const InputVerticalLine = styled.div`
  display: flex;
  width: 1px;
  height: 60px;
  background: #C5C0C0;
`;

export const InputTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 60px;
`;

export const InputStart = styled.input`
  display: flex;
  width: 100px;
`;

export const InputEnd = styled.input`
  display: flex;
  width: 100px;
`;