import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 60px;
  border: 1px solid #C5C0C0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #0D9FDE;
  };
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 20px;
`;

export const Source = styled.div`
  display: flex;
  font-size: 10px;
  overflow: hidden;
`;

export const Link = styled.div`
  display: flex;
  font-size: 8px;
  margin-left: 10px;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  font-size: 12px;
  margin-left: 20px;
  font-weight: 800;
  width: 260px;
  overflow: hidden;
  word-break: keep-all;
`;