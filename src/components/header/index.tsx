import * as s from "./styles";

const Header = () => {
  return (
    <s.Wrapper>
      <s.Icon></s.Icon>
      <s.SearchBar placeholder="주식, 종목코드 검색"></s.SearchBar>
      <s.Banner></s.Banner>
    </s.Wrapper>
  )
}

export default Header;