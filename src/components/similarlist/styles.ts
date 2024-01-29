import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  font-size: 26px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #0D9FDE;
  border-radius: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const ListIndex = styled.div`
  display: flex;
  font-size: 14px;
`;

export const ListDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 26px;
  background: #F9DF81;
  border-radius: 10px;
`;