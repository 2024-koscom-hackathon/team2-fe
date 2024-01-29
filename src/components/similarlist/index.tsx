import * as s from "./styles";

const SimilarList = () => {
  return (
    <s.Wrapper>
      <s.Title>유사 패턴 리스트</s.Title>
      <s.ListWrapper>
        <s.ListItem>
          <s.ListIndex>1.</s.ListIndex>
          <s.ListDate>2023.02.12 - 2023.03.12</s.ListDate>
        </s.ListItem>
        <s.ListItem>
          <s.ListIndex>2.</s.ListIndex>
          <s.ListDate>2013.07.04 - 2013.08.04</s.ListDate>
        </s.ListItem>
        <s.ListItem>
          <s.ListIndex>3.</s.ListIndex>
          <s.ListDate>2017.10.29 - 2017.11.29</s.ListDate>
        </s.ListItem>
        <s.ListItem>
          <s.ListIndex>4.</s.ListIndex>
          <s.ListDate>2023.02.12 - 2023.03.12</s.ListDate>
        </s.ListItem>
        <s.ListItem>
          <s.ListIndex>5.</s.ListIndex>
          <s.ListDate>2013.07.04 - 2013.08.04</s.ListDate>
        </s.ListItem>
      </s.ListWrapper>
    </s.Wrapper>
  )
}

export default SimilarList;