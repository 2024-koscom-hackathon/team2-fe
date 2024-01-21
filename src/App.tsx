import './App.css';
import CurrentChart from './components/charts/current-chart';
import PastChart from './components/charts/past-chart';
import Header from './components/header';
import styled from "styled-components";
import SideBar from './components/sidebar';


function App() {
  return (
    <Wrapper>
      <Header />

      <SideContainer>
        <SideBar />

        <ChartContainer>
          <CurrentChart />
          <PastChart />
        </ChartContainer>
        
      </SideContainer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;