import './App.css';

import Header from './components/header';
import styled from "styled-components";
import SideBar from './components/sidebar';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/main';
import { Game } from './pages/game';
import { MyPage } from './pages/mypage';


function App() {
  return (
    <Wrapper>
      <Header />

      <Contents>
        <SideBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/game' element={<Game />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </Contents>

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
`;
