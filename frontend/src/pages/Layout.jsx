import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
  // display: flex;
  // flex-direction: column;  
  // align-items: center;
  // width: 375px;
  // min-height: 100vh;
  // margin: 0 auto;
  // // padding-bottom: 10px; // 푸터의 높이만큼 padding 추가
  // background-color: #f5f5f5;
  max-width: 375px; /* 모바일 화면에 최적화된 너비를 최대 너비로 설정 */
  width: 100%; /* 디바이스의 너비에 따라 유연하게 조정되도록 함 */
  height: 100dvh;
  margin: 0 auto; /* 가운데 정렬 */
  background-color: #f5f5f5;
  `;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  height: calc(100dvh - 105px);
  overflow-y: auto;
  // padding-bottom: 55px; // 내용물과 푸터 사이의 간격을 조정하려면 다시 추가
`;

const Layout = () => {
  return (
    <>
    <LayoutContainer>
      <Header />
      <MainContent> 
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
    </>
  );
};

export default Layout;
