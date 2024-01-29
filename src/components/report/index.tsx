import * as s from "./styles";
import mkLogo from "../../imgs/mk_logo.jpg";

const Report = () => {
  return (
    <s.Wrapper>
      <s.Header>
        <s.Logo src={mkLogo} alt="매경"/>
        <s.Source>매일경제</s.Source>
        <s.Link>{"https://naver.com"}</s.Link>
      </s.Header>

      <s.Title>제목제목제목제목제목제목제목제목</s.Title>
    </s.Wrapper>
  )
}

export default Report;