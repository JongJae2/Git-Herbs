import styled from 'styled-components';
import React, { useEffect, useState } from "react";
import HerbList from "../components/pedia/HerbList";
import PediaFilter from '../components/pedia/PediaFilter';
import useStore from '../store/useStore';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;
`;

const Title = styled.div`
  width: 100%; /* Take full width */
  font-size: 25px;
  text-align: left;
  color: #4A4A4A;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const FilterWrapper = styled.div`
  position: absolute;
  top: 20px; // 상단 여백 설정
  right: 10px; // 우측 여백 설정
  z-index: 10px; // 너비 설정
`;

const PediaPage = () => {
    const { herbs, setHerbs, filterOption, setFilterOption } = useStore();
  // 데이터 상태를 Zustand store에서 가져옵니다.

    const [herbsData] = useState([
      // 임시 데이터 유지
      {
        herbId: 1,
        herbName: "곰보배추",
        bookmark: 0,
        acquireCheck: 3,
      },
      {
        herbId: 2,
        herbName: "당귀",
        bookmark: 2,
        acquireCheck: 0,
      },
      {
        herbId: 3,
        herbName: "도라지",
        bookmark: 2,
        acquireCheck: 3,
      },
      {
        herbId: 4,
        herbName: "산삼",
        bookmark: 2,
        acquireCheck: 3,
      },
      {
        herbId: 5,
        herbName: "쑥부쟁이",
        bookmark: 2,
        acquireCheck: 0,
      },
      {
        herbId: 6,
        herbName: "칡",
        bookmark: 4,
        acquireCheck: 0,
      },
    ]);
  
    /* 서버에서 데이터를 가져오는 부분을 주석 처리합니다.
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/herbs');
          const data = await response.json();
          setHerbs(data.content);
        } catch (error) {
          console.error('Failed to fetch herbs:', error);
        }
      }
  
      fetchData();
    }, []);
    */

    
    // 선택된 필터 옵션에 따라 약초 데이터를 정렬합니다.
    const sortHerbs = (herbs, option) => {
        switch (option) {
            case '즐겨찾기 순':
                return [...herbs].sort((a, b) => b.bookmark - a.bookmark || a.herbId - b.herbId);
            case '도감 저장 순':
                return [...herbs].sort((a, b) => b.acquireCheck - a.acquireCheck || a.herbId - b.herbId);
            case '가나다 순':
            default:
                return [...herbs].sort((a, b) => a.herbId - b.herbId);
        }
    };

    // 현재 선택된 필터 옵션에 따라 정렬된 약초 데이터
    const sortedHerbs = sortHerbs(herbsData, filterOption);
  
    return (
        <PageContainer>
          <Title>약초 도감</Title>
          <FilterWrapper>
            <PediaFilter filterOption={filterOption} setFilterOption={setFilterOption} />
          </FilterWrapper>
          <HerbList herbsData={sortedHerbs} />
        </PageContainer>
      );
    };
  
  export default PediaPage;
