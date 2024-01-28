import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background: linear-gradient(180deg, rgba(46, 180, 255, 0.70) 0%, rgba(78, 191, 255, 0.69) 43%, rgba(0, 163, 255, 0.67) 100%);
`;

export const Icon = styled.div`
    display: flex;
`;

export const SearchBar = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    width: 600px;
    height: 40px;
    border-radius: 10px;
    padding-left: 20px;
`;

export const Banner = styled.div`
    display: flex;

`;