import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 650px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 26px;
`;

export const DisclosureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid #0D9FDE;
  border-radius: 10px;
  margin-top: 10px;
`;

export const DisclosureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DisclosureTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const DisclosureTable = styled.table`
  text-align: center;
`;

export const DisclosureValueTd = styled.td`
  width: 90px;
  border: 1px solid #ddd;
`;
export const DisclosureValueTr = styled.td`
  width: 90px;
  border: 1px solid #ddd;
`;

export const DisclosureVerticalLine = styled.div`
  display: flex;
  height: 300px;
  width: 1px;
  background: #C5C0C0;
`;