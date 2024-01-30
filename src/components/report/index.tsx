import * as s from "./styles";
import mkLogo from "../../imgs/mk_logo.jpg";

export interface IReport {
  title?: string;
  date?: string;
  source?: string;
  link?: string;
  score?: number;
  summary?: string;
  onClick?: () => void;
}

const Report = (props: IReport) => {
  return (
    <s.Wrapper>
      <s.Header>
        <s.Logo src={mkLogo} alt="매경"/>
        <s.Source>{props.source}</s.Source>
        <s.Link>{props.link}</s.Link>
      </s.Header>

      <s.Title>{props.title}</s.Title>
    </s.Wrapper>
  )
}

export default Report;